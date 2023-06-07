import React, { FC, useEffect, useState } from "react";
import DepartamentsList from "./DepartamentsList";
import Styles from '../styles/styles.module.scss'
import { IDepartment, IDepatmentListItem, IManager, IManagerMultiselectUsage, isDepartment } from "../../../types";
import { addDeparmentManagers, addManager, removeDepartmentManagers, removeManager } from "../../../utils/deparmentList.utils";
import Button from "../../button";

const DepartamentListItem: FC<IDepatmentListItem<IDepartment | IManagerMultiselectUsage>> = ({ data, handler, managersIds }) => {

    const [isInDepartmentState, setIsInDeparmentState] = useState<boolean>(false)

    const handleAddDepartmentManagers = () => {
       if(isDepartment(data)) {
        handler((prev:string[]) => addDeparmentManagers(prev, data.managers))
        setIsInDeparmentState(true)
       } else {
        handler((prev: string[]) => addManager(prev, data.id))
        setIsInDeparmentState(true)
       }
    }

    const handlerRemoveDepartmantManagers = () => {
        if(isDepartment(data)) {
            handler((prev: string[]) => removeDepartmentManagers(prev, data.managers))
            setIsInDeparmentState(false)
        } else {
            handler((prev: string[]) => removeManager(prev, data.id))
            setIsInDeparmentState(false)
        }
    }

    useEffect(() => {
        if(isDepartment(data)) {
            let count = 0
            data.managers.forEach(manager => managersIds.includes(manager.id) ? count++ : false)
            count === data.managers.length? setIsInDeparmentState(true) : setIsInDeparmentState(false)
        } else {
            managersIds.includes(data.id)? setIsInDeparmentState(true) : setIsInDeparmentState(false)
        }
    }, [managersIds])


    return (
        <li className={Styles.list__item}>
            { !isInDepartmentState? <Button onClick={() => handleAddDepartmentManagers()} title="Добавить" accent={true} /> : <Button onClick={() => handlerRemoveDepartmantManagers()} title="Убрать" accent={true} />}
            <span className={Styles.list__item_title}>{ data.title }</span>
            { isDepartment(data)? <DepartamentsList managersIds={managersIds} handler={handler} title="" elems={data.managers} /> : null }
        </li>
    )
}

export default DepartamentListItem
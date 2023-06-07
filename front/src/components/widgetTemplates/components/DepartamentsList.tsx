import React, { FC, useMemo, useState } from "react";
import DepartamentListItem from "./DepartamentsListItem";
import Styles from '../styles/styles.module.scss'
import Input from "../../input";
import { IDepartamentsList, IDepartment, IManagerMultiselectUsage } from "../../../types";

const DepartamentsList:FC<IDepartamentsList<IDepartment| IManagerMultiselectUsage>> = ({ elems, handler, managersIds }) => {
    const [departamentsName, setDepartamentsName] = useState<string>('')

    const memoDeportamentsList = useMemo(() => elems.filter((el: IDepartment | IManagerMultiselectUsage) => el.title.toLowerCase().includes(departamentsName.toLowerCase())), [departamentsName, elems])

    return (
        <section>
            <Input onChange={setDepartamentsName} label="" placeholder="Поиск" sx={{ width: 'w-full' }}/>
            <ul className={Styles.list}>
                {
                    memoDeportamentsList.map((el: IDepartment | IManagerMultiselectUsage) => <DepartamentListItem managersIds={managersIds} handler={handler} data={el} key={el.id} /> )
                }
            </ul>
        </section>
    )
}

export default DepartamentsList
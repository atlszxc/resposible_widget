import React, { FC, useMemo } from "react";
import Button from "../../button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Styles from '../styles/styles.module.scss'
import { deleteTemplate } from "../../../store/slices/templateSlice";

interface ITemplateList {
    toggleModal(): void,
    setTemplate(template: any): void
}

const TemplatesList: FC<ITemplateList> = ({ toggleModal, setTemplate }) => {
    const { templates } = useAppSelector(store => store.template)
    const dispatch = useAppDispatch()

    const templatesMemo = useMemo(() => templates, [templates])

    return (
        <section>
            <Button onClick={() => { setTemplate(null); toggleModal() }} title="Добавить новый шаблон" accent={true} sx={{ width: 'w-full' }} />
            <div className={Styles.listWrapper} style={{ margin: '24px 0' }}>
                <span>№</span>
                <span>Название</span>
                <span>Тип распределения</span>
                <span>Дата создания/обновления</span>
            </div>
            {
                templatesMemo? templatesMemo.map((tmp, id) => (
                    <div className={Styles.templatelist__item} key={tmp._id}>
                        <div onClick={() => { setTemplate(tmp); toggleModal() }} className={Styles.listWrapper}>
                            <span>{ id+1 }.</span>
                            <span>{ tmp.title }</span>
                            <span>{ tmp.alghoritm.label }</span>
                            <span>{ tmp.date }</span>
                        </div>
                        <Button title="Удалить" accent={true} onClick={() => dispatch(deleteTemplate(tmp._id!))} />
                    </div>
                )): null
            }
        </section>
    )
}

export default TemplatesList
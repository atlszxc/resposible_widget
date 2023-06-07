import React, { FC, useState } from "react";
import Styles from '../styles/styles.module.scss'
import { ALGHPRITMS, EXTRA_OPTIONS } from "../../../mock/lists.mock";
import Button from "../../button";
import Input from "../../input";
import Select, { MultiValue } from 'react-select'
import DepartamentsList from "./DepartamentsList";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { createTemplate, updateTemplate } from "../../../store/slices/templateSlice";
import { ISelectItem } from "../../../types";

interface IModal {
    template: any | null,
    toggle(): void
}

const Modal: FC<IModal> = ({ toggle, template=null }) => {
    const { departaments } = useAppSelector(state => state.account)
    const dispatch = useAppDispatch()

    const [templateName, setTemplateName] = useState<string>(template? template.title : '')
    const [alghoritm, setAlgoritm] = useState<ISelectItem>(template? template.alghoritm : '')
    const [extraOptions, setExtraOptions] = useState<MultiValue<ISelectItem>>(template? template.extraOptions : [])
    const [managers, setManagers] = useState<Array<string>>(template? template.managers : [])

    const handleAddTemplate = () => {
        dispatch(createTemplate({ title: templateName, alghoritm, extraOptions: extraOptions as ISelectItem[], managers, date: new Date(Date.now()).toLocaleDateString() }))
        toggle()
    }

    const handleUpdateTemplate = () => {
        dispatch(updateTemplate({ id: template.id, title: templateName, alghoritm, extraOptions, managers, date: new Date(Date.now()).toLocaleDateString() }))
        toggle()
    }

    return (
        <section className={Styles.modal}>
            <div onClick={() => toggle()} style={{ width: '100%', height: '100vh' }} />
            <div className={Styles.modal__form}>
                <Input value={templateName} label="Название шаблона" placeholder="Введите название шаблона" sx={{ width: 'w-full' }} onChange={setTemplateName} />
                <section className={Styles.modal__form_wrapper}>
                    <Select onChange={(e) => setAlgoritm(e)} defaultValue={template? template.alghoritm : null} placeholder='Выберите алгоритм распределения' isSearchable className="select" options={ALGHPRITMS} />
                    <Select onChange={(e) => setExtraOptions(e)} defaultValue={template? template.extraOptions : null} placeholder='Выберите дополнительные параметры' className="select" options={EXTRA_OPTIONS} isMulti isSearchable closeMenuOnSelect={false} />
                </section>
                <DepartamentsList managersIds={managers} title="Отделы и сотрудники" handler={setManagers} elems={departaments} />
                <footer className={Styles.modal__form__footer}>
                    <Button title={template? 'Обновить' : 'Создать'} accent={true} onClick={template? handleUpdateTemplate : handleAddTemplate} />
                    <Button title="Отменить" onClick={toggle} />
                </footer>
            </div>
        </section>
    )
}

export default Modal
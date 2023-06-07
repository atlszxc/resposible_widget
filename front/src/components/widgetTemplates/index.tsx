import React, { useEffect, useState } from "react"
import Styles from './styles/styles.module.scss'
import TemplatesList from "./components/TemplatesList"
import Modal from "./components/Modal"
import { getTemplates } from "../../store/slices/templateSlice"
import { useAppDispatch } from "../../hooks/redux"
import { ACCOUNTID } from "../../mock/lists.mock"

const WidgetTemplates= () => {
    const dispatch = useAppDispatch()

    const [toggleModal, setToggleModal] = useState<boolean>(false)
    const [template, setTemplate] = useState<any | null>(null)
    
    const handleToggleModal = () => {
        setToggleModal(!toggleModal)
    }

    const handleSetTemplate = (template: any) => {
        setTemplate(template)
    }

    useEffect(() => {
        dispatch(getTemplates(ACCOUNTID))
    }, [])

    return (
        <section className={Styles.wrapper}>
            { toggleModal? <Modal toggle={handleToggleModal} template={template} /> : null }
            <header className={Styles.wrapper__header}>
                <p className={Styles.wrapper__header_title}>Шаблоны распределения</p>
                <p className={Styles.wrapper__header_subtitle}>Создайте шаблоны для разных способов распределения и используйте их в настройках цифровой воронки</p>
            </header>
            <main>
                <TemplatesList toggleModal={handleToggleModal} setTemplate={handleSetTemplate} />
            </main>
        </section>
    )
}

export default WidgetTemplates
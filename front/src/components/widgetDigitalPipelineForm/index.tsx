import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { ALGHPRITMS } from "../../mock/lists.mock";
import Styles from './styles/style.module.scss'

const WidgetDigitalPipelineForm = () => {

    const [selectedTemplate] = useState<any | null>(document.querySelector<HTMLInputElement>(`input[name=templates]`)?.value)

    const changeTemplate = (val: string) => {
        document.querySelector<HTMLInputElement>(`input[name=templates]`)!.value = val
    }

    return (
        <Select defaultValue={selectedTemplate} className={Styles.prosto} onChange={e => changeTemplate(String(e?.value)) } isSearchable options={ALGHPRITMS} />
    )
}

export default WidgetDigitalPipelineForm
import React, { FC } from "react";
import Styles from './styles/styles.module.scss'

interface IInput {
    label: string,
    placeholder: string
    sx?: any | null,
    value?: string | null,
    onChange(e: string): void
}

const Input: FC<IInput> = ({ label, placeholder, sx=null, onChange, value=null }) => {
    return (
        <section className={Styles.wrapper}>
            <label className={Styles.title}>{label}</label>
            {
                value?
                <input value={value} onChange={e => onChange(e.target.value)} className={`${Styles.input} ${sx? Object.keys(sx).map(key => sx[key]).join(' ') : ''}`} type="text" placeholder={placeholder} />
                :
                <input onChange={e => onChange(e.target.value)} className={`${Styles.input} ${sx? Object.keys(sx).map(key => sx[key]).join(' ') : ''}`} type="text" placeholder={placeholder} />
            }
        </section>
    )
}

export default Input
import React, { Dispatch, FC, SetStateAction } from "react";
import Styles from './styles/styles.module.scss'

interface IButton {
    title: string,
    accent?: boolean,
    onClick(): void,
    sx?: any | null,
}

const Button: FC<IButton> = ({ title, accent=false, sx=null, onClick }) => {
    return (
        <button
            onClick={() => onClick()}
            className={`${Styles.button} ${accent ? Styles.accent : ''} ${sx? Object.keys(sx).map((key: string) => sx[key]).join(' ') : ''}`}
        >
            { title }
        </button>
    )
}

export default Button
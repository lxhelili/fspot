import React from 'react'
import styles from './Button.module.css';

function Button({type, text, eventHandler, style}) {
    return (
        <button className={styles.btn} type={type} onClick={eventHandler} style={style}>{text}</button>
    )
}

export default Button;
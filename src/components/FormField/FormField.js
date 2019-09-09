import React from 'react'
import styles from './FormField.module.css';


function FormField({type, name, value, change, label, required}) {
    return (
        <div className={styles.formField}>
            <input type={type} id={name} className={styles.formControl} value={value} onChange={change} name={name} required={required}/>
            <label className={styles.formControlPlaceholder} htmlFor={name}>{label}</label>
        </div>
    )
}
export default FormField;
import React from 'react'
import styles from './Search.module.css';

export default function Search() {
    return (
        <div className={styles.inputGroup}>
            <input type="text" placeholder="Looking for something specific?"/>
            <button type="button"></button>
        </div>
    )
}

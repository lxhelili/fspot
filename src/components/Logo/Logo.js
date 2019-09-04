import React, { Fragment } from 'react'
import logo from '../../images/logo.svg';
import styles from './Logo.module.css';

export default function Logo() {
    return (
        <React.Fragment>
            <img className={styles.logo} src={logo}/>
        </React.Fragment>
    )
}

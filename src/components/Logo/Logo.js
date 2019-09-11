import React, { Fragment } from 'react'
import logo from '../../images/logo.svg';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <React.Fragment>
            <Link to="/">
                <img className={styles.logo} src={logo}/>
            </Link>
        </React.Fragment>
    )
}

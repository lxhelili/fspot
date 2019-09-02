import React from 'react'
import styles from './Header.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Logo/>
            </div>
            <div className={styles.right}>
                <Nav/>
            </div>
        </div>
    )
}

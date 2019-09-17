import React, { useState } from 'react'
import * as styles from './Header.module.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import cx from 'classnames';

export default function Header() {
    const [menu, toggleMenu] = useState(false)
    return (
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <Logo />
                <button className={styles.burgerMenu} type="button" onClick={() => toggleMenu(!menu)}></button>
            </div>
            <div className={cx(styles.headerNav, (menu ? styles.active: ''))}>
                <Nav />
            </div>
        </div>
    )
}

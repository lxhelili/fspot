import React from 'react'
import logo from '../../images/logo.svg';
import styles from './Header.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo}/>
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>Flowers</li>
                    <li>Latest Sightings</li>
                    <li>Favorites</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}

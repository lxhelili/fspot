import React from 'react'
import styles from './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <React.Fragment>
            <ul className={styles.nav}>
                <li><Link to="/flowers">Flowers</Link></li>
                <li><Link to="/laters-sightings">Latest Sightings</Link></li>
                <li><Link to="/favorites">Favorites</Link></li>
                <li className={styles.login}><Link to="/login">Login</Link></li>
                <li>
                    <button type="button">New Account</button>
                </li>
            </ul>
        </React.Fragment>
    )
}

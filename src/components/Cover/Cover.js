import React from 'react'
import styles from './Cover.css';
import Search from '../Search/Search';

export default function Cover() {
    return (
        <div className={styles.cover}>
            <div className={styles.coverArea}>
                <h1>Discover flowers around you</h1>
                <p>Explore between more than 8.427 sightings</p>
                <Search />
            </div>
        </div>
    )
}

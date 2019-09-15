import React from 'react'
import styles from './FlowersGrid.module.css';
import FlowerItem from './FlowerItem/FlowerItem';
import { useSelector } from 'react-redux'

export default function FlowersGrid({flowers}) {
    const auth = useSelector(state => state.auth);
    
    return (
        <div className={styles.grid}>
            {flowers.map(item => (
                <div className={styles.cell} key={item.id}>
                    <FlowerItem item={item} isAuthenticated={auth.isAuthenticated}/>
                </div>
            ))}
        </div>
    )
}


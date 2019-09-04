import React, { useState, useEffect } from 'react'
import styles from './FlowersGrid.module.css';
import axios from 'axios';
import FlowerItem from './FlowerItem/FlowerItem';

export default function FlowersGrid() {
    const [data, setData] = useState({ flowers: [] });

    useEffect(() => {
        axios.get('https://flowrspot-api.herokuapp.com/api/v1/flowers').then(results=>{
            setData(results.data);
        })
    }, []);
      
    
    return (
        <div className={styles.grid}>
            {data.flowers.map(item => (
                <div className={styles.cell} key={item.id}>
                    <FlowerItem item={item} />
                </div>
            ))}
        </div>
    )
}

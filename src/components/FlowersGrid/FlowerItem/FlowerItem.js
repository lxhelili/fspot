import React, {Component } from 'react'
import styles from './FlowerItem.css';
import cx from 'classnames'
import axios from 'axios';

export default class FlowerItem extends Component {
    render() {
        return (
            <div className={styles.item} style ={ { backgroundImage: "url("+this.props.item.profile_picture+")" } }>
              <div className={cx(styles.favoriteIcon, (this.props.item.favorites ? styles.active: ''))}></div>
                <div className={styles.caption}>
                    <h2>{this.props.item.name}</h2>
                    <p>{this.props.item.latin_name}</p>
                   <button type="button">{this.props.item.sightings} sightings</button>
                </div>
            </div>
        )
    }
}


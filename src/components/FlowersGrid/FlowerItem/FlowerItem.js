import React, {Component } from 'react'
import styles from './FlowerItem.module.css';
import cx from 'classnames';

class FlowerItem extends Component {
    
    render() {
        const favoriteIcon = (<div className={cx(styles.favoriteIcon, (this.props.item.favorites ? styles.active: ''))}></div>)
        return (
            <div className={styles.item} style ={ { backgroundImage: "url("+this.props.item.profile_picture+")" } }>
              {this.props.isAuthenticated ? favoriteIcon: null}
                <div className={styles.caption}>
                    <h2>{this.props.item.name}</h2>
                    <p>{this.props.item.latin_name}</p>
                   <button type="button">{this.props.item.sightings} sightings</button>
                </div>
            </div>
        )
    }
}


export default FlowerItem;
import React, {Component } from 'react'
import styles from './FlowerItem.module.css';
import cx from 'classnames';
import { connect } from 'react-redux';

import { makeFavorite } from '../../../actions/items';

class FlowerItem extends Component {
    
    markAsFavorite = id => {
        this.props.makeFavorite(id);
    };
    render() {
        const favoriteIcon = (<div onClick={this.markAsFavorite.bind(this, this.props.item.id)} className={cx(styles.favoriteIcon, (this.props.item.favorites ? styles.active: ''))}></div>)
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

const mapDispatchToProps = dispatch => ({
    makeFavorite: (id) => {
        dispatch(makeFavorite({ id }))
    }
})

export default connect(null, mapDispatchToProps)(FlowerItem);
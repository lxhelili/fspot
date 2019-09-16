import React, { Component } from 'react'
import styles from './Search.module.css';
import { searchItems } from '../../actions/items';
import { connect } from 'react-redux';

class Search extends Component {
    state = {
        query: ""
    }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
    event.preventDefault();
        const { query } = this.state;
        this.props.searchItems(query);
    
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={styles.inputGroup}>
                    <input type="text" placeholder="Looking for something specific?" onChange={this.handleChange} value={this.state.query} name="query"/>
                    <button type="submit"></button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    searchItems: (query) => {
        dispatch(searchItems({ query }))
    }
})

export default connect(null, mapDispatchToProps)(Search);
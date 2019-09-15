import React, { Component } from 'react'
import Cover from '../components/Cover/Cover';
import FlowersGrid from '../components/FlowersGrid/FlowersGrid';
import { connect } from 'react-redux';
import { getItems } from '../actions/items';

class Home extends Component {
    componentDidMount(){
        this.props.getItems();
    }

    render() {
        const { flowers } = this.props.items;
        return (
            <React.Fragment>
                <Cover />
                <FlowersGrid flowers={flowers}/>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(getItems())
})
const mapStateToProps = state => ({
  items: state.items
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
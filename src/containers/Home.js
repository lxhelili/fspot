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
        const { flowers, loading } = this.props.items;
        let flowersList;
        if(loading) {
            flowersList = <h4 className="loader">Loading...</h4>
        } else if(!loading && !flowers.length) {
            flowersList = <h1 className="no-results">No Results Found</h1>
        } else {
            flowersList = <FlowersGrid flowers={flowers}/>
        }
        
        return (
            <React.Fragment>
                <Cover />
                {flowersList}
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
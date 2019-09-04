import React, { Component } from 'react'
import styles from './Nav.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// export default function Nav() {
//     return (
//         <React.Fragment>
//             <ul className={styles.nav}>
//                 <li><Link to="/flowers">Flowers</Link></li>
//                 <li><Link to="/laters-sightings">Latest Sightings</Link></li>
//                 <li><Link to="/favorites">Favorites</Link></li>
//                 <li className={styles.login}><Link to="/login">Login</Link></li>
//                 <li>
//                     <button type="button">New Account</button>
//                 </li>
//             </ul>
//         </React.Fragment>
//     )
// }

import { showModal, hideModal } from '../../actions/modal';

const MESSAGE = "A redux modal component.";

class Nav extends Component {
    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.openSignupModal = this.openSignupModal.bind(this);
        this.showInput = this.showInput.bind(this);
      }
    
      closeModal(event) {
        this.props.hideModal();
      }
    
      onInputChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      showInput(event) {
        console.log(this.state);
      }
    
      openLoginModal(event) {
        event.preventDefault();
        this.props.showModal({
          open: true,
          title: 'Login Modal',
          message: MESSAGE,
          closeModal: this.closeModal
        }, 'login')
      }
    
      openSignupModal(event) {
        this.props.showModal({
          open: true,
          title: 'Signup Modal',
          message: MESSAGE,
          confirmAction: this.closeModal,
          closeModal: this.closeModal
        }, 'signup')
      }
      
    render() {
        return (
            <React.Fragment>
                <ul className={styles.nav}>
                    <li><Link to="/flowers">Flowers</Link></li>
                    <li><Link to="/laters-sightings">Latest Sightings</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li className={styles.login}>
                        <a href="" onClick={this.openLoginModal}>Login</a>
                    </li>
                    <li>
                        <button type="button" onClick={this.openSignupModal}>New Account</button>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => {
      dispatch(showModal({ modalProps, modalType }))
    }
})

export default connect(null, mapDispatchToProps)(Nav);
import React, { Component } from 'react'
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import userAvatar from '../../images/menu-profile-holder.png';
import { loadUser } from '../../actions/auth';

import { showModal, hideModal } from '../../actions/modal';

const MESSAGE = "A redux modal component.";

class Nav extends Component {
  
  closeModal = event => {
    this.props.hideModal();
  }
  
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  openLoginModal = event => {
    event.preventDefault();
    this.props.showModal({
      open: true,
      title: 'Welcome back',
      message: MESSAGE,
      closeModal: this.closeModal
    }, 'login')
  }
  
  openSignupModal = event => {
    this.props.showModal({
      open: true,
      title: 'Create an Account',
      message: MESSAGE,
      confirmAction: this.closeModal,
      closeModal: this.closeModal
    }, 'signup')
  }

  logout = event => {
    event.preventDefault();
    this.props.logout();
  }
   componentDidUpdate(){
     if(this.props.auth.isAuthenticated) {
       this.props.hideModal();
     }
   }
    render() {
      const { isAuthenticated, user } = this.props.auth;
      const authLinks = (
        <React.Fragment>
          <li className={styles.login}>
              <a href="" onClick={this.openLoginModal}>Login</a>
          </li>
          <li>
              <button type="button" onClick={this.openSignupModal}>New Account</button>
          </li>
        </React.Fragment>
      );
      const userLink = (
        <li className={styles.user}>
            <a href="" onClick={this.logout}>{user ? `${user.first_name} ${user.last_name}` : null}</a>
            <img src={userAvatar} />
        </li>
      );
        return (
            <React.Fragment>
                <ul className={styles.nav}>
                    <li><Link to="/flowers">Flowers</Link></li>
                    <li><Link to="/laters-sightings">Latest Sightings</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    { isAuthenticated ? userLink : authLinks }
                </ul>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => {
      dispatch(showModal({ modalProps, modalType }))
    },
    logout: () => dispatch(logout()),
    loadUser: () => dispatch(loadUser())
})
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
import React, { Component } from 'react'
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/modal';
import { loadUser, logout } from '../../actions/auth';
import profileImage from '../../images/profile-holder.png';

class UserProfile extends Component {

    componentDidMount() {
        this.props.loadUser();
    }

    logout = event => {
        this.props.hideModal();
        this.props.logout();
    }

    render() {
        const {first_name, last_name } = this.props.user;
        return (
            <React.Fragment>
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="profile-holder">
                            <img src={profileImage} />
                            <div className="profile-name">
                                <h3>{first_name} {last_name}</h3>
                                <p>47 sightings</p>
                            </div>
                        </div>
                        <div className="profile-details">
                            <div className="profile-row-details">
                                <p>First Name</p>
                                <h3>{first_name}</h3>
                            </div>
                            <div className="profile-row-details">
                                <p>Last Name</p>
                                <h3>{last_name}</h3>
                            </div>
                            <div className="profile-row-details">
                                <p>Date of Birth</p>
                                <h3>May 20, 1980</h3>
                            </div>
                            <div className="profile-row-details">
                                <p>Email Address</p>
                                <h3>michael.berry@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="modal-row">
                            <div className="modal-column-1" style={{textAlign: 'center'}}>
                                <Button type="button" text="Logout" eventHandler={this.logout} style={{width: 'auto'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    loadUser: () => dispatch(loadUser()),
    logout: () => dispatch(logout())
  })
  const mapStateToProps = state => ({
    user: state.auth.user
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
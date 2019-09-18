import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import { loadUser } from '../../actions/auth';
import { hideModal } from '../../actions/modal';
import { showModal } from '../../actions/modal';

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    const user = {
      email,
      password
    };

    // Attempt to login
    this.props.login(user);
    
  }
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for login error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({msg: error.msg})
      } else {
        this.setState({ msg: null });
      }
    }
    if(isAuthenticated) {
      this.props.showModal({
        open: true,
        message: "Congratulations! You have successfully logged into FlowrSpot!",
        confirmAction: this.closeModal,
        closeModal: this.closeModal
      }, 'loginSuccess');
      this.props.loadUser();
    }
  }
  closeModal = event => {
    this.props.hideModal();
  }

   render() {
    const otherProps = {
      required: true
    }
    return (
      <React.Fragment>
        <div className="modal-content">
        <form onSubmit={this.handleSubmit}>
          <div className="modal-header">
            <h3>{this.props.title}</h3>
            <div className="alert-danger">
              {this.state.msg}
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-row">
              <div className="modal-column-1 mb-10">
                <FormField label="Email Address" type="text" change={this.handleChange} value={this.state.email} name="email" {...otherProps} />
              </div>
              <div className="modal-column-1">
                <FormField label="Password" type="password" change={this.handleChange} value={this.state.password} name="password" {...otherProps}/>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button text="Login to your Account" type="submit"/>
          </div>
        </form>
        </div>
        <div className="modal-bottom">
          <p onClick={this.props.closeModal}>I don’t want to Login</p>
        </div>
      </React.Fragment>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }))
  },
  login: (user) => {
    dispatch(login(user))
  },
  loadUser: () => dispatch(loadUser())
})
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
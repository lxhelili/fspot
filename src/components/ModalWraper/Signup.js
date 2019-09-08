import React, {Component} from 'react';
import {connect} from 'react-redux';
import { clearErrors } from '../../actions/error';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import { hideModal, showModal } from '../../actions/modal';
import { login, register } from '../../actions/auth';


class Signup extends Component {
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    msg: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, first_name, last_name, date_of_birth } = this.state;

    // Create user object
    const newUser = {
      email,
      password,
      first_name,
      last_name,
      date_of_birth
    };

    // Attempt to register
    this.props.register(newUser);
  }
  componentDidUpdate(prevProps) {
    const { error, isRegistred } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if(isRegistred) {
      this.props.showModal({
        open: true,
        message: "Congratulations! You have successfully signed up for FlowrSpot!",
        confirmAction: this.closeModal,
        closeModal: this.closeModal
      }, 'registerSuccess');
    }
  }

  
  render() {
    return (
      <React.Fragment>
        <div className="modal-content">
        <form onSubmit={this.handleSubmit}>
          <div className="modal-header">
            <h3>{this.props.title}</h3>
            {this.state.msg}
          </div>
          <div className="modal-body">
            <div className="modal-row">
              <div className="modal-column-2 mb-10">
                <FormField label="First Name" type="text" change={this.handleChange} value={this.state.first_name} name="first_name"/>
              </div>
              <div className="modal-column-2 mb-10">
                <FormField label="Last Name" type="text" change={this.handleChange} value={this.state.last_name} name="last_name"/>
              </div>
            </div>
            <div className="modal-row">
              <div className="modal-column-1 mb-10">
                <FormField label="Email Address" type="text" change={this.handleChange} value={this.state.email} name="email"/>
              </div>
              <div className="modal-column-1 mb-10">
                <FormField label="Password" type="password" change={this.handleChange} value={this.state.password} name="password"/>
              </div>
              <div className="modal-column-1">
                <FormField label="Date of Birth" type="text" change={this.handleChange} value={this.state.date_of_birth} name="date_of_birth"/>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button text="Create Account" type="submit"/>
          </div>
        </form>
        </div>
        <div className="modal-bottom">
          <p onClick={this.props.closeModal}>I don’t want to Register</p>
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
  register: (user) => {
    dispatch(register(user))
  }
})
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isRegistred: state.auth.isRegistred,
  error: state.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
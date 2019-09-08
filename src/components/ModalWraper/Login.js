import React, {Component} from 'react';
import {connect} from 'react-redux';
import { clearErrors } from '../../actions/error';
import { login } from '../../actions/auth';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
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
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({msg: error.msg})
      } else {
        this.setState({ msg: null });
      }
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
              <div className="modal-column-1 mb-10">
                <FormField label="Email Address" type="text" change={this.handleChange} value={this.state.email} name="email"/>
              </div>
              <div className="modal-column-1">
                <FormField label="Password" type="password" change={this.handleChange} value={this.state.password} name="password"/>
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

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error
})

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(Login);
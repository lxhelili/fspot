import React, { Component } from 'react'
import Button from '../Button/Button';
import {connect} from 'react-redux';
import { hideModal, showModal } from '../../actions/modal';;

const okButton = {
    color: "#df9186",
    border: "1px solid #df9186",
    background: "#fff"
}
class RegisterSuccess extends Component {
    openLoginModal = event => {
        event.preventDefault();
        this.props.showModal({
          open: true,
          title: 'Welcome back',
          closeModal: this.closeModal
        }, 'login') 
    }

    render() {
        return (
            <React.Fragment>
                <div className="modal-content">
                    <div className="modal-body">
                    {this.props.message}
                    </div>
                    <div className="modal-footer">
                        <div className="modal-row">
                            <div className="modal-column-1">
                                <Button type="button" text="OK" eventHandler={this.openLoginModal} style={okButton}/>
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
    showModal: (modalProps, modalType) => {
        dispatch(showModal({ modalProps, modalType }))
    }
  })
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isRegistred: state.auth.isRegistred,
    error: state.error
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegisterSuccess);
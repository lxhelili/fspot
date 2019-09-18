import React, { Component } from 'react'
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { hideModal, showModal } from '../../actions/modal';

const okButton = {
    color: "#df9186",
    border: "1px solid #df9186",
    background: "#fff"
}
class LoginSuccess extends Component {
    closeModal = event => {
        this.props.hideModal();
    }
    openUserProfileModal = event => {
        event.preventDefault();
        this.props.showModal({
          open: true,
          title: 'User Profile',
          confirmAction: this.closeModal,
          closeModal: this.closeModal
        }, 'userProfile')
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
                            <div className="modal-column-2">
                                <Button type="button" text="OK" eventHandler={this.closeModal} style={okButton}/>
                            </div>
                            <div className="modal-column-2">
                                <Button type="button" text="Profile" eventHandler={this.openUserProfileModal}/>
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
});
  
export default connect(null, mapDispatchToProps)(LoginSuccess);
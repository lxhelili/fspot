import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';

import { default as modalTypes } from './components/ModalWraper';

const MODAL_TYPES = {
  'signup': modalTypes.signupModal,
  'login': modalTypes.loginModal,
  'loginSuccess': modalTypes.loginSuccessModal,
  'registerSuccess': modalTypes.registerSucessModal,
  'userProfile': modalTypes.userProfileModal
}

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      })
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    if (!this.props.modalType) {
      return null
    }
    const SpecifiedModal = MODAL_TYPES[this.props.modalType]
    
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          ariaHideApp={false}
          overlayClassName="modal show"
          bodyOpenClassName="modal-open"
          className="modal-dialog"
        >
          <SpecifiedModal
            closeModal={this.closeModal}
            {...this.props.modalProps}
          />
        </ReactModal>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    ...state.modal
})

export default connect(mapStateToProps, null)(ModalContainer)
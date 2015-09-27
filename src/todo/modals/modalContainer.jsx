const React = require('react');
const Modal = require('react-modal');
const Store = require('../store/store.js');
const ActionCreators = require("../store/actionCreators.js");

class ModalContainer extends React.Component {

  closeModal() {
    Store.dispatch(ActionCreators.closeModal())
  }

  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={this.closeModal.bind(this)}
        >
        <this.props.modalComponent {...this.props} store={Store}/>
      </Modal>
    );
  }
}

module.exports = ModalContainer

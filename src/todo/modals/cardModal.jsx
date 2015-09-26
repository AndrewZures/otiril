const React = require('react');
const Modal = require('react-modal');
const Store = require('../store/store.js');
const ActionCreators = require("../store/actionCreators.js");

class CardModal extends React.Component {

  closeModal() {
    Store.dispatch(ActionCreators.closeModal())
  }

  render() {
    return (
      <Modal
        isOpen={this.props.showModal}
        onRequestClose={this.closeModal.bind(this)}
        >

        <h2>{this.props.cardData.title}</h2>
        <p>{this.props.cardData.summary}</p>
        <button onClick={this.closeModal.bind(this)}>close</button>
      </Modal>
    );
  }
}

module.exports = CardModal

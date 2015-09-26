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
      <div>
        <Modal
          isOpen={this.props.showModal}
        >

          <h2>{this.props.cardData.title}</h2>
          <button onClick={this.closeModal.bind(this)}>close</button>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}

module.exports = CardModal

const _ = require('ramda');
const React = require('react');
const ActionCreators = require('../../store/actionCreators.js');

class ModalButtons extends React.Component {

  toggleEditable() {
    this.props.store.dispatch(ActionCreators.modal.toggleEditable())
  }

  resetModal() {
    this.props.store.dispatch(ActionCreators.modal.resetModal())
  }

  closeModal() {
    this.props.store.dispatch(ActionCreators.modal.closeModal())
  }

  hasDataChanged() {
    return !_.equals(this.props.data, this.props.presentedData)
  }

  saveCard() {
    this.props.store.dispatch(ActionCreators.board.saveOrUpdateCard(this.props.presentedData))
    this.closeModal()
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleEditable.bind(this)}>Edit</button>
        <button onClick={this.closeModal.bind(this)}>Close</button>
        { this.hasDataChanged() ? this.saveButton() : "" }
      </div>
    )
  }

  saveButton(){
    return (
      <div>
        <button onClick={this.resetModal.bind(this)}>Reset</button>
        <button onClick={this.saveCard.bind(this)}>Save</button>
      </div>
    )
  }
}

module.exports = ModalButtons

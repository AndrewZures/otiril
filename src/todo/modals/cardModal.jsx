const _ = require('ramda');
const React = require('react');
const ActionCreators = require('../store/actionCreators.js');

class CardModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isEditable: false, tempState: _.clone(props.data) }
  }

  toggleEditable() {
    this.setState({ isEditable: !this.state.isEditable })
  }

  closeModal() {
    this.props.store.dispatch(ActionCreators.closeModal())
  }

  updateTempState(updated) {
    const updatedState = _.merge(this.state.tempState, updated)
    this.setState(_.merge(this.state, { tempState: updatedState }))
  }

  updateTitle(e) {
    this.updateTempState({ title: e.target.value })
  }

  updateSummary(e) {
    this.updateTempState({ summary: e.target.value })
  }

  resetModal() {
    this.setState(_.merge(this.state, { tempState: this.props.data }))
  }

  hasDataChanged() {
    return !_.equals(this.props.data, this.state.tempState)
  }

  saveCard() {
    console.log('saving card')
  }

  render() {
    return (
      <div className="cardModal">
        <h2>{this.state.tempState.title}</h2>
        <textarea
          className="summary lock"
          readOnly={!this.state.isEditable}
          onChange={this.updateSummary.bind(this)}
          value={this.state.tempState.summary}
          ></textarea>
        <div>
          <button onClick={this.toggleEditable.bind(this)}>
            Edit
          </button>
          <button onClick={this.closeModal.bind(this)}>
            Close
          </button>
          <button onClick={this.resetModal.bind(this)}>
            Reset
          </button>
          { this.hasDataChanged() ? this.saveButton() : "" }
        </div>
      </div>
    );
  }

  saveButton(){
    return (
      <button onClick={this.saveCard.bind(this)}>
        Save
      </button>
    )
  }
}

module.exports = CardModal

const React = require('react');
const ActionCreators = require('../../store/actionCreators.js');

class SummaryBox extends React.Component {

  updateModal(attribute, event) {
    this.props.presentedData[attribute] = event.target.value
    this.props.store.dispatch(ActionCreators.modal.updateModal(this.props.data, this.props.presentedData))
  }

  render() {
    return (
      <textarea
        className="summary lock"
        readOnly={!this.props.editable}
        onChange={this.updateModal.bind(this, "summary")}
        placeholder="card summary"
        value={this.props.presentedData.summary}>
      </textarea>
    )
  }
}

module.exports = SummaryBox

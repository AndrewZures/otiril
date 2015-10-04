const React = require('react');
const ActionCreators = require('../../store/actionCreators.js');

class TitleBox extends React.Component {

  updateModal(attribute, event) {
    this.props.presentedData[attribute] = event.target.value
    this.props.store.dispatch(ActionCreators.modal.updateModal(this.props.data, this.props.presentedData))
  }

  render() {
    return (
      <h2>
        <input
          type="text"
          readOnly={!this.props.editable}
          onChange={this.updateModal.bind(this, "title")}
          placeholder="card title"
          value={this.props.presentedData.title} />
      </h2>
    )
  }
}

module.exports = TitleBox

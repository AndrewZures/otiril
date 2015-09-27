const React = require('react');
const ActionCreators = require('../store/actionCreators.js');

class CardModal extends React.Component {

  closeModal() {
    this.props.store.dispatch(ActionCreators.closeModal())
  }

  render() {
    return (
      <div>
        <h2>{this.props.data.title}</h2>
        <p>{this.props.data.summary}</p>
        <button onClick={this.closeModal.bind(this)}>close</button>
      </div>
    );
  }
}

module.exports = CardModal

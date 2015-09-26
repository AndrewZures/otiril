const React = require('react');
const Store = require('../store/store.js');
const ActionCreators = require('../store/actionCreators.js');

class Card extends React.Component {

  deleteCardHandler(e) {
    Store.dispatch(ActionCreators.deleteCard(this.props));
  }

  render() {
    return(
      <div className="card">
        <div>{this.props.title}</div>
        <button
          type="button"
          className="delete-button"
          onClick={this.deleteCardHandler.bind(this)}>
          X
        </button>
      </div>
    )
  }
}

module.exports = Card

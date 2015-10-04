const React = require('react');
const Store = require('../store/store.js');
const ActionCreators = require('../store/actionCreators.js');

class Card extends React.Component {

  deleteCard() {
    Store.dispatch(ActionCreators.board.deleteCard(this.props));
  }

  editCard() {
    Store.dispatch(ActionCreators.board.editCard(this.props));
  }

  render() {
    return(
      <div className="card">
        <button
          type="button"
          className="delete-button"
          onClick={this.deleteCard.bind(this)}>
          Delete
        </button>
        <div className="modal">
          <button onClick={this.editCard.bind(this)}>
            Edit
          </button>
        </div>

        <div>{this.props.title}</div>
        <p>{this.props.summary}</p>
      </div>
    )
  }
}

module.exports = Card

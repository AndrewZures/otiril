const React = require('react');
const Store = require('../store/store.js');
const ActionCreators = require('../store/actionCreators.js');

class Card extends React.Component {

  deleteCard(e) {
    Store.dispatch(ActionCreators.deleteCard(this.props));
  }

  editCard(e) {
    Store.dispatch(ActionCreators.editCard(this.props));
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

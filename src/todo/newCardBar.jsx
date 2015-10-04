const React = require('react');
const Store = require('./store/store.js');
const ActionCreators = require('./store/actionCreators.js');

class NewCardBar extends React.Component {

  newCard(e) {
    e.preventDefault()
    Store.dispatch(ActionCreators.board.newCard());
  }

  render() {
    return (
      <div>
        <button
          className="newCardSubmit"
          onClick={this.newCard.bind(this)}>Add Card</button>
      </div>
    )
  }
}

module.exports = NewCardBar

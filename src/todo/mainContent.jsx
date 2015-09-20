const React = require('react');
const NewCardBar = require('./newCardBar.jsx');
const Board = require('./board.jsx');

class MainContent extends React.Component {

  render() {
    return (
      <div>
        <NewCardBar {...this.props.newCard} />
        <Board {...this.props.board} />
      </div>
    )
  }

}

module.exports = MainContent

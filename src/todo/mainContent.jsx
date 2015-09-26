const React = require('react');
const NewCardBar = require('./newCardBar.jsx');
const Board = require('./board.jsx');
const CardModal = require('./modals/cardModal.jsx');

class MainContent extends React.Component {

  render() {
    return (
      <div>
        <NewCardBar {...this.props.newCard} />
        <Board {...this.props.board} />
        <CardModal {...this.props.modal} />
      </div>
    )
  }

}

module.exports = MainContent

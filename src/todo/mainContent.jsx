const React = require('react');
const NewCardBar = require('./newCardBar.jsx');
const Board = require('./board.jsx');
const ModalContainer = require('./modals/modalContainer.jsx');

class MainContent extends React.Component {

  render() {
    return (
      <div>
        <NewCardBar {...this.props.newCard} />
        <Board {...this.props.board} />
        <ModalContainer {...this.props.modal} />
      </div>
    )
  }

}

module.exports = MainContent

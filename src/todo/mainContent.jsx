const React = require('react');
const Board = require('./board.jsx');

class MainContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Board {...this.props.board} />
      </div>
    )
  }

}

module.exports = MainContent

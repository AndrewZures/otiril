const React = require('react');
const DragDropContext = require('react-dnd').DragDropContext;
const HTML5Backend = require('react-dnd/modules/backends/HTML5');
const DropColumn = require('./columns/dropColumn.jsx');

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cards: [{ id: 1, title: 'first' }, { id: 2, title: 'second' }] }
  }

  render() {
    return (
      <DropColumn cards={this.state.cards} />
    )
  }
}

module.exports = DragDropContext(HTML5Backend)(Board);

const _ = require('ramda');
const React = require('react');
const DragDropContext = require('react-dnd').DragDropContext;
const HTML5Backend = require('react-dnd/modules/backends/HTML5');
const DropColumn = require('./columns/dropColumn.jsx');

class Board extends React.Component {

  render() {
    return (
      <div>
        { _.map((column) => <DropColumn {...column } key={column.id} />, this.props.columns) }
      </div>
    )
  }
}

module.exports = DragDropContext(HTML5Backend)(Board);

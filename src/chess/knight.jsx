const React = require('react');
const DragSource = require('react-dnd').DragSource
const ItemTypes = require('./constants.js').ItemTypes

const knightSource = {
  beginDrag(props) {
    return {};
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Knight extends React.Component {
  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
    <div style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move'
    }}>
     K
    </div>
    )
  }
}

module.exports = DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);

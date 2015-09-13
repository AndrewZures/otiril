const React = require('react');
const DragSource = require('react-dnd').DragSource
const Card = require('./card.jsx');

const cardSource = {
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

class DroppableCard extends React.Component {


  render() {
    const { connectDragSource } = this.props;

    return connectDragSource(
      <Card {...this.props} />
    )
  }
}

module.exports = DragSource('hi', cardSource, collect)(DroppableCard);

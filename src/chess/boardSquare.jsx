const React = require('react');
const DropTarget = require('react-dnd').DropTarget
const ItemTypes = require('./constants.js').ItemTypes
const Square = require('./square.jsx');
const Game = require('./game.jsx');

const squareTarget = {
  canDrop(props) {
    return Game.canMoveKnight(props.position);
  },

  drop(props, monitor) {
    Game.moveKnight(props.position);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

class DroppableSquare extends React.Component {

  render() {
    const { position, connectDropTarget, isOver, canDrop } = this.props;

    return connectDropTarget(
      <div style={{ position: 'relative' }}>
        <Square position={position} >
          {this.props.children}
        </Square>
        { isOver && !canDrop && this.renderOverlay('red') }
        { !isOver && canDrop && this.renderOverlay('yellow') }
        { isOver && canDrop && this.renderOverlay('green') }
      </div>
    );
  }

  renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

}


module.exports = DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(DroppableSquare);

const React = require('react');
const DragTypes = require('../constants.js').DragTypes
const Store = require('../store/store.js');
const ActionCreators = require('../store/actionCreators.js');
const DropTarget = require('react-dnd').DropTarget
const Column = require('./column.jsx');

const columnTarget = {
  drop(props, monitor) {
    Store.dispatch(ActionCreators.board.updateCardColumn(monitor.getItem(), props.id));
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver()
  }
}

class DropColumn extends React.Component {

  render() {
    const { connectDropTarget } = this.props

    return connectDropTarget(
      <div className={ this.getStyle() }>
        <Column {...this.props} />
      </div>
    )
  }

  getStyle(){
    const { canDrop, isOver } = this.props
    if(canDrop && isOver){
      return "column active-drop"
    } else if(canDrop) {
      return "column can-drop";
    } else {
      return "column"
    }
  }
}

module.exports = DropTarget(DragTypes.basicCard, columnTarget, collect)(DropColumn);

const React = require('react');
const Store = require('../store/store.js');
const ActionCreators = require('../store/actionCreators.js');
const DropTarget = require('react-dnd').DropTarget
const Column = require('./column.jsx');

const columnTarget = {
  drop(props, monitor) {
    const columnId = props.id
    Store.dispatch(ActionCreators.changeColumn(monitor.getItem(), columnId));
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
        <Column cards={ this.props.cards } />
      </div>
    )
  }

  getStyle(){
    const { canDrop, isOver } = this.props
    if(canDrop && isOver){
      return "active-drop"
    } else if(canDrop) {
      return "can-drop";
    } else {
      return ""
    }
  }
}

module.exports = DropTarget('hi', columnTarget, collect)(DropColumn);

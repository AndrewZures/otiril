const React = require('react');
const Store = require('../store/store.js');
const ActionCreators = require('../store/actionCreators.js');
const DropTarget = require('react-dnd').DropTarget
const Column = require('./column.jsx');

const columnTarget = {
  drop(props, monitor) {
    Store.dispatch(ActionCreators.updateCardColumn(monitor.getItem(), props.id));
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
      return "column active-drop"
    } else if(canDrop) {
      return "column can-drop";
    } else {
      return "column"
    }
  }
}

module.exports = DropTarget('hi', columnTarget, collect)(DropColumn);

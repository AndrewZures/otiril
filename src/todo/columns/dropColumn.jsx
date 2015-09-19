const React = require('react');
const store = require('../store/store.js');
const DropTarget = require('react-dnd').DropTarget
const Column = require('./column.jsx');

const columnTarget = {
  drop(props, monitor) {
    console.log('column data');
    console.log(props);
    console.log('card data');
    console.log(monitor.getItem());
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

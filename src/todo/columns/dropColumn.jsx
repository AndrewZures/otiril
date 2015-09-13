const React = require('react');
const DropTarget = require('react-dnd').DropTarget
const Column = require('./column.jsx');

const columnTarget = {
  canDrop(props) {
  },

  drop(props, monitor) {
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class DropColumn extends React.Component {

  render() {
    const { connectDropTarget } = this.props

    return connectDropTarget(
      <div><Column cards={this.props.cards} /></div>
    )
  }
}

module.exports = DropTarget('hi', columnTarget, collect)(DropColumn);

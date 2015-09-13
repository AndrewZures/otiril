const _ = require('ramda');
const React = require('react');
const DroppableCard = require('../cards/droppableCard.jsx');

class Column extends React.Component {

  render() {
    return (
      <div>
        { _.map((card) => <DroppableCard {...card} />, this.props.cards) }
      </div>
    )
  }

}

module.exports = Column

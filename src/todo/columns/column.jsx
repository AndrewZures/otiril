const _ = require('ramda');
const React = require('react');
const DraggableCard = require('../cards/draggableCard.jsx');

class Column extends React.Component {

  render() {
    const cards = this.props.cards || []

    return (
      <div>
        { _.map((card) => <DraggableCard {...card} key={card.id} columnId={this.props.id} />, cards) }
      </div>
    )
  }

}

module.exports = Column

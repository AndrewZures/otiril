const _ = require('ramda');
const React = require('react');
const DraggableCard = require('../cards/draggableCard.jsx');

class Column extends React.Component {

  render() {
    const cards = this.props.cards || []
    return (
      <div className="column">
        { _.map((card) => <DraggableCard key={card.id} {...card} />, cards) }
      </div>
    )
  }

}

module.exports = Column

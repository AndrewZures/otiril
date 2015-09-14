const _ = require('ramda');
const React = require('react');
const DraggableCard = require('../cards/draggableCard.jsx');

class Column extends React.Component {

  render() {
    return (
      <div className="column">
        { _.map((card) => <DraggableCard key={card.id} {...card} />, this.props.cards) }
      </div>
    )
  }

}

module.exports = Column

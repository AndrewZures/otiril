const React = require('react');

class Card extends React.Component {

  render() {
    return(
      <div className="card">
        { this.props.title }
      </div>
    )
  }
}

module.exports = Card

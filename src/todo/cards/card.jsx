const React = require('react');

class Card extends React.Component {

  render() {
    return(
      <div className="card">
        { this.props }
      </div>
    )
  }
}

module.exports = Card

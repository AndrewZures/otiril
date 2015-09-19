const React = require('react');

class Card extends React.Component {

  render() {
    return(
      <div className="card">
        Title: { this.props.title }
      </div>
    )
  }
}

module.exports = Card

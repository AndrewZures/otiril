const React = require('react');

class Square extends React.Component {

  render(){
    const { position } = this.props
    const black = this.isBlackSquare(position);
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    return <div style={ this.style(fill, stroke) }>
              { this.props.children }
           </div>
  }

  style(fill, stroke){
    return { backgroundColor: fill, color: stroke, width: '100%', height: '100%' }
  }

  isBlackSquare(squarePosition){
    const [x,y] = squarePosition
    return (x + y) % 2 === 1
  }

}

Square.propTypes = { black: React.PropTypes.bool }

module.exports = Square

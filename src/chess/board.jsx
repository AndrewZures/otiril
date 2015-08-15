const _ = require('ramda');
const React = require('react');
const PropTypes = React.PropTypes
const Square = require('./square.jsx');
const Knight = require('./knight.jsx');

class Board extends React.Component {

  render(){
    const squares = this.buildSquares(64);

    return <div style={this.squareStyle()}>{squares}</div>
  }

  squareStyle(){
    return { width: '100%', height: '100', display: 'flex', flexWrap: 'wrap' }
  }

  buildSquares(numSquares){
    return _.times(v => this.renderSquare(v), numSquares)
  }

  renderSquare(i) {
    const squarePosition = this.findSquarePosition(i);
    const black = this.findSquareColor(squarePosition)
    const piece = this.findPiece(squarePosition, this.props.knightPosition, <Knight />)

    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <Square black={black}> {piece} </Square>
      </div>
    );
  }

  findSquareColor(squarePosition){
    const [x,y] = squarePosition
    return (x + y) % 2 === 1
  }

  findSquarePosition(i){
    const x = i % 8;
    const y = Math.floor(i / 8);
    return [x,y]
  }

  findPiece(squarePosition, piecePosition, pieceType){
    const [sx, sy] = squarePosition
    const [kx, ky] = piecePosition
    return (sx === kx && sy === ky) ? pieceType : null;
  }

}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

module.exports = Board

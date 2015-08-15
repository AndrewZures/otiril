const _ = require('ramda');
const React = require('react');
const PropTypes = React.PropTypes
const Square = require('./square.jsx');
const Knight = require('./knight.jsx');
const Game = require('./game.jsx');

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
    const piece = this.findPiece(squarePosition, Game.knightPosition, <Knight />)

    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}
           onClick={() => this.handleSquareClick(squarePosition)}>
        <Square black={black}> {piece} </Square>
      </div>
    );
  }

  handleSquareClick(position) {
    if(this.canMoveKnight(position, Game)){ Game.moveKnight(position); }
  }

  canMoveKnight(position, Game) {
    const [px, py] = position
    const [x, y] = Game.knightPosition;
    const dx = px - x;
    const dy = py - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
           (Math.abs(dx) === 1 && Math.abs(dy) === 2);
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

// Board.propTypes = {
//   knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
// };

module.exports = Board

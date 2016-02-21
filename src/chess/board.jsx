const _ = require('ramda');
const React = require('react');
const PropTypes = React.PropTypes
const DroppableSquare = require('./boardSquare.jsx');
const Knight = require('./knight.jsx');
const Game = require('./game.jsx');
const DragDropContext = require('react-dnd').DragDropContext;
const HTML5Backend = require('react-dnd-html5-backend');

class Board extends React.Component {

  constructor(props){
    super(props)
    Game.observe(() => this.forceUpdate());
  }

  render(){
    const squares = this.buildSquares(64);

    return <div style={this.squareStyle()}>{squares}</div>
  }

  squareStyle(){
    return { width: '100%', height: '400px', display: 'flex', flexWrap: 'wrap' }
  }

  buildSquares(numSquares){
    return _.times(v => this.renderSquare(v), numSquares)
  }

  renderSquare(i) {
    const squarePosition = this.findSquarePosition(i);
    const piece = this.findPiece(squarePosition, Game.knightPosition, <Knight />)

    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }} >
        <DroppableSquare position={ squarePosition } props={ this.props }> {piece} </DroppableSquare>
      </div>
    );
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

module.exports = DragDropContext(HTML5Backend)(Board)

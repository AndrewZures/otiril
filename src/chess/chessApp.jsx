const React = require('react')
const Board = require('./board.jsx')
const Game = require('./game.jsx')
const root  = window.document.querySelector('#app')

class ChessApp extends React.Component {

  render(){
    return <div>
             <Board />
           </div>
  }

}

module.exports = ChessApp


const React = require('react');
const ChessApp = require('./chess/chessApp.jsx');

class App extends React.Component {

  render() {
    return <div><ChessApp /></div>
  }
}

module.exports = App

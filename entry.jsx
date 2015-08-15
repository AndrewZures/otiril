require("./css/style.css")
const React = require('react')
const App   = require('./src/app.jsx')
const Board = require('./src/chess/board.jsx')

React.render(
  <Board knightPosition={[1,1]} />, window.document.querySelector('#app'));

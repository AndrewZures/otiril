require("./css/style.css")
const React = require('react')
const App   = require('./src/app.jsx')
const Board = require('./src/chess/board.jsx')
const Game = require('./src/chess/game.jsx')
const root  = window.document.querySelector('#app')

Game.observe(k => React.render(<Board knightPosition={k} />, root))

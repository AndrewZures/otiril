const React = require('react')
const Router = require('react-router');
const { Route, DefaultRoute } = Router

const App      = require('./app.jsx');
const ChessApp = require('./chess/chessApp.jsx');
const TodoApp  = require('./todo/todoApp.jsx');

const AppRoutes = (
  <Route name="app" path="/" handler={App} >
    <Route name="chess" handler={ChessApp} />
    <Route name="todo" handler={TodoApp} />
    <DefaultRoute handler={ChessApp} />
  </Route>
)

module.exports = AppRoutes

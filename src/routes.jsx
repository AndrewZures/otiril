const React = require('react')
const Router = require('react-router');
const { Route, DefaultRoute } = Router

const App      = require('./app.jsx');
const ChessApp = require('./chess/chessApp.jsx');
const ReduxApp = require('./redux/reduxApp.jsx');
const TodoApp = require('./todo/todoApp.jsx');

const AppRoutes = (
  <Route name="app" path="/" handler={App} >
    <Route name="chess" handler={ChessApp} />
    <Route name="redux" handler={ReduxApp} />
    <Route name="todo" handler={TodoApp} />
    <DefaultRoute handler={ChessApp} />
  </Route>
)

module.exports = AppRoutes

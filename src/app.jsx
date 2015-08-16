const React = require('react');
const Router = require('react-router');
const { Link, RouteHandler } = Router

class App extends React.Component {

  render() {
    return(
      <div>
        <ul>
          <li><Link to="chess">Chess Game</Link></li>
          <li><Link to="todo">To Do</Link></li>
        </ul>
        <RouteHandler />
      </div>
    )
  }
}

module.exports = App

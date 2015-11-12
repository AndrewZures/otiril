const React = require('react');
const Router = require('react-router');
const { Link, RouteHandler } = Router

class App extends React.Component {

  render() {
    return(
      <div>
        <ul>
          <li><Link to="chess">Chess Game</Link></li>
          <li><Link to="redux">Redux Stuff</Link></li>
          <li><Link to="todo">Todo</Link></li>
          <li><Link to="jest">Jest Sample</Link></li>
        </ul>
        <RouteHandler />
      </div>
    )
  }
}

module.exports = App

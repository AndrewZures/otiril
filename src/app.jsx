const { Link, RouteHandler } = require('react-router');

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

import { Link } from 'react-router'

class AppContainer extends React.Component {

  static contextTypes = {
    store: React.PropTypes.object
  }

  componentWillMount() {
    this.setState({ store: this.context.store })
  }

  render() {
    return(
      <div>
        <ul>
          <li><Link to="chess">Chess Game</Link></li>
          <li><Link to="redux">Redux Stuff</Link></li>
          <li><Link to="todo">Todo</Link></li>
          <li><Link to="jest">Jest Sample</Link></li>
        </ul>
      </div>
    )
  }
}

export default AppContainer

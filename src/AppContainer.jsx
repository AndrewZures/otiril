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
        <Link to="/list">List</Link>
        <Link to="/transitions">Transitions</Link>
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer

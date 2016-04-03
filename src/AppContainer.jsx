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
      <div className="main-container">
        <div className="navbar">
          <div className="left-links">
            <Link className="navbar-item navbar-item-link" to="/list">List</Link>
            <Link className="navbar-item navbar-item-link" to="/transitions">Transitions</Link>
          </div>
          <div className="right-menu">
            <div className="navbar-item navbar-item-link">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default AppContainer

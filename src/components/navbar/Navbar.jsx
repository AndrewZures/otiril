import { Link } from 'react-router'
import Menu from './Menu'

class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <div className="left-links">
          <Link className="navbar-item navbar-item-link" to="/list">List</Link>
          <Link className="navbar-item navbar-item-link" to="/transitions">Transitions</Link>
          <div className="navbar-item navbar-item-link">
            <Menu {...this.props} />
          </div>
        </div>
        <div className="right-menu">
        </div>
      </div>
    )
  }
}

export default Navbar

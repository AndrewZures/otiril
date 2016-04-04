class Menu extends React.Component {

  componentWillMount() {
    this.setState(this.context.store.getState());
    this.context.store.subscribe(() => this.setState(this.context.store.getState()));
  }

  static contextTypes = {
    store: React.PropTypes.object,
    actionCreators: React.PropTypes.func
  }

  toggleMenu() {
    const action = this.context.actionCreators.toggleMenu();
    this.context.store.dispatch(action);
  }

  renderMenu() {
    return (
      <div className="dropdown-content">
        <div className="dropdown-item">Account</div>
        <div className="dropdown-item">Social</div>
        <div className="dropdown-item">Logout</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <i className="dropdown fa fa-bars" onClick={this.toggleMenu.bind(this)} />
        {this.state.menuVisible ? this.renderMenu() : '' }
      </div>
    )
  }
}

export default Menu;

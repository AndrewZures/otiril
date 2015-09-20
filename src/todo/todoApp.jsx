const React = require('react');
const Store = require('./store/store.js');
const MainContent = require('./mainContent.jsx');

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  componentDidMount() {
    Store.subscribe(() => this.setState(Store.getState()))
  }

  render() {
    return (
      <MainContent {...this.state} />
    )
  }
}

module.exports = TodoApp

const React = require('react');
const Store = require('./store/store.js');
const MainContent = require('./mainContent.jsx');

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = Store.getState();
    this.subscribe();
  }

  render() {
    return (
      <MainContent {...this.state} />
    )
  }

  subscribe(){
    Store.subscribe(() => this.setState(Store.getState()))
  }
}

module.exports = TodoApp

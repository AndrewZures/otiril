const React = require('react');
const MainContent = require('./mainContent.jsx');

class TodoApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContent />
    )
  }
}

module.exports = TodoApp

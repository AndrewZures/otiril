const { Router, Route, browserHistory } = require('react-router');
const AppContainer = require('./AppContainer')

class AppRouter extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer} />
      </Router>
    )
  }
}

export default AppRouter

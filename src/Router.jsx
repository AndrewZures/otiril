import { Router, Route, browserHistory } from 'react-router'
import AppContainer from './AppContainer'

import store from './store/Store'

class AppRouter extends React.Component {

  static childContextTypes = {
    store: React.PropTypes.object
  }

  getChildContext() {
    return {
      store: store
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer} />
      </Router>
    )
  }
}

export default AppRouter

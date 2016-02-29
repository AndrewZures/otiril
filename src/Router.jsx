import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './store/Store'

import AppContainer from './AppContainer'
import ListContainer from './components/list/ListContainer'
import TransitionsContainer from './components/transitions/TransitionsContainer'

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
        <Route path="/" component={AppContainer} >
          <Route path="list" component={ListContainer} />
          <Route path="transitions" component={TransitionsContainer} />
          <IndexRoute component={TransitionsContainer} />
        </Route>
      </Router>
    )
  }
}

export default AppRouter

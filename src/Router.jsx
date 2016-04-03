import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/Store'
import ActionCreators from './ActionCreators'

import AppContainer from './AppContainer'
import ListContainer from './components/list/ListContainer'
import TransitionsContainer from './components/transitions/TransitionsContainer'

class AppRouter extends React.Component {

  static childContextTypes = {
    store: React.PropTypes.object,
    actionCreators: React.PropTypes.func
  }

  getChildContext() {
    return {
      store: store,
      actionCreators: ActionCreators
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={AppContainer} >
            <Route path="list" component={ListContainer} />
            <Route path="transitions" component={TransitionsContainer} />
            <IndexRoute component={TransitionsContainer} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default AppRouter

import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import AppContainer from './AppContainer'

import store from './store/Store'

class AppRouter extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={AppContainer} />
        </Router>
      </Provider>
    )
  }
}

export default AppRouter

import { Router, Route, browserHistory } from 'react-router'
import AppContainer from './AppContainer'

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

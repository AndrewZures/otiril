import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routeReducer, syncHistory } from 'react-router-redux'
import appReducer from './reducers/appReducer'

const reduxRouterWithMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterWithMiddleware)(createStore)

const rootReducer = (state={}, action) => {
  return {
    menuVisible: appReducer(state.menuVisible, action),
    routing: routeReducer(state.routing, action)
  }
}

export default createStoreWithMiddleware(rootReducer)

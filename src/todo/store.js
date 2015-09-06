const Redux = require('redux');
const ActionTypes = require('./actionTypes.js')
const FirstReducer = require('./firstReducer.js')
const SecondReducer = require('./secondReducer.js')

function appReducers(state, action) {
  return {
    title: SecondReducer(state.title, action),
    count: FirstReducer(state.count, action)
  }
}

const initialState = { count: 0, title: "bargo" }
module.exports = Redux.createStore(appReducers, initialState );

const Redux = require('redux');
const ActionTypes = require('./actionTypes.js')
const FirstReducer = require('./firstReducer.js')
const SecondReducer = require('./secondReducer.js')
const Titleize = require('./titleize.js')

function appReducers(state, action) {
  return {
    title: secondAppReducer(state.title, action),
    count: FirstReducer(state.count, action)
  }
}

function secondAppReducer(state, action) {
  return {
    capitalize: Titleize(state.capitalize, action),
    title: SecondReducer(state.title, action)
  }
}


const initialState = { count: 0, title: { title: "bargo", capitalize: true } }
module.exports = Redux.createStore(appReducers, initialState );

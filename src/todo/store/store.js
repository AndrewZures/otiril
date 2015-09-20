const Redux = require('redux');
const initialState = require('./initialState.js');
const ColumnReducer = require('./reducers/columnReducers.js');

function appReducers(state, action) {
  return {
    board: boardReducers(state.board, action),
    newCard: state.newCard
  }
}

function boardReducers(state = {}, action) {
  return {
    columns: ColumnReducer(state.columns, action)
  }
}

module.exports = Redux.createStore(appReducers, initialState);

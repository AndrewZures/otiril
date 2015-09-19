const Redux = require('redux');
const initialState = require('./initialState.js');
const ActionTypes = require('./actionTypes.js');

function appReducers(state, action) {
  return {
    board: boardReducers(state.board, action)
  }
}

function boardReducers(state = {}, action) {
  return {
    columns: columnsReducer(state.columns, action)
  }
}

function columnsReducer(state = [], action) {
  switch(action.type) {
    case ActionTypes.board.addToWorkingColumn: state = [[], [], []];
  }
  return state;
}

module.exports = Redux.createStore(appReducers, initialState );

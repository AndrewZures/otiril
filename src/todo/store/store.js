const Redux = require('redux');
const initialState = require('./initialState.js');
const ColumnReducer = require('./reducers/columnReducers.js');
const ModalReducer = require('./reducers/modalReducer.jsx');

function appReducers(state, action) {
  return {
    board: boardReducers(state.board, action),
    newCard: state.newCard,
    modal: ModalReducer(state.modal, action)
  }
}

function boardReducers(state = {}, action) {
  return {
    columns: ColumnReducer(state.columns, action)
  }
}

module.exports = Redux.createStore(appReducers, initialState);

const _ = require("ramda");
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

function deleteCardFromColumns(cardId, column) {
  column.cards = _.reject((card) => card.id === cardId, column.cards)
  return column
}

function addCardToColumn(column, card, columnId) {
  if(columnId === column.id) {
    column.cards.push(card);
  }

  return column;
}

function updateColumn(column, data) {
  column = deleteCardFromColumns(data.card.id, column)
  column = addCardToColumn(column, data.card, data.columnId)
  return column
}

function updateColumns(columns, data) {
  return _.map((column) => updateColumn(column, data), columns);
}

function columnsReducer(columns = [], action) {
  switch(action.type) {
    case ActionTypes.board.addToWorkingColumn: updateColumns(columns, action.data);
  }
  return columns;
}

module.exports = Redux.createStore(appReducers, initialState );

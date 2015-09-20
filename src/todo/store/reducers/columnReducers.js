const _ = require("ramda");
const BoardActions = require('../actionTypes.js').board;

const ColumnReducer = function() {

  const columnReducer = function(columns = [], action) {
    switch(action.type) {
      case BoardActions.addToWorkingColumn: updateColumns(columns, action.data);
    }
    return columns;
  }

  const deleteCardFromColumn = function(cardId, column) {
    column.cards = _.reject((card) => card.id === cardId, column.cards)
    return column;
  }

  const addCardToColumn = function(column, card, columnId) {
    if(columnId === column.id) {
      column.cards.push(card);
    }

    return column;
  }

  const updateColumn = function(column, data) {
    column = deleteCardFromColumn(data.card.id, column)
    column = addCardToColumn(column, data.card, data.columnId)
    return column
  }

  const updateColumns = function(columns, data) {
    return _.map((column) => updateColumn(column, data), columns);
  }

  return columnReducer;
}

module.exports = ColumnReducer();

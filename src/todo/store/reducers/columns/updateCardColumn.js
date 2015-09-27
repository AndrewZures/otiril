const _ = require("ramda");

const UpdateCardColumn = function() {

  const updateCardColumn = function(columns, data) {
    return _.map((column) => updateColumn(column, data), columns);
  }

  const updateColumn = function(column, data) {
    column = deleteCardFromColumn(data.card.id, column)
    column = addCardToColumn(column, data.card, data.columnId)
    return column
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

  return updateCardColumn
}

module.exports = UpdateCardColumn();

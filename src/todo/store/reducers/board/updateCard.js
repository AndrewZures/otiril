const _ = require("ramda");

const UpdateCard = function() {

  const updateCard = function(data, columns) {
    return _.map((column) => updateCardInColumn(data, column), columns)
  }

  const updateCardInColumn = function(updatedCard, column) {
    column.cards = _.map((colCard) => updateCardToColumn(colCard, updatedCard), column.cards)
    return column;
  }

  const updateCardToColumn = function(columnCard, updatedCard) {
    return columnCard.id === updatedCard.id ? updatedCard : columnCard;
  }

  return updateCard;
}

module.exports = UpdateCard();

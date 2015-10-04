const _ = require("ramda");

const AddCard = function() {

  let RANDOM_ID = 12345;

  const addCard = function(card, columns) {
    const newCard = buildNewCard(card);
    return _.map((column) => addCardToColumn(newCard, column, "ready"), columns)
  }

  const addCardToColumn = function(card, column, columnID) {
    if(column.id === columnID) {
      column.cards = _.append(card, column.cards)
    }
    return column
  }

  const buildNewCard = function(card) {
    return _.merge(card, { id: randomId() });
  }

  const randomId = function() {
    return RANDOM_ID += 1;
  }

  return addCard;
}

module.exports = AddCard();

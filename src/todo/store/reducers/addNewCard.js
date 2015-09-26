const _ = require("ramda");

const AddNewCard = function() {

  let randomId = 12345;

  const addNewCard = function(columns, cardData) {
    const newCardData = buildNewCardData(cardData);
    const readyColumn = columns.find((column) => column.id === "ready");
    readyColumn.cards.push(newCardData);
    return columns;
  }

  const buildNewCardData = function(originalCardData) {
    randomId += 1;
    return _.merge(originalCardData, { id: randomId })
  }

  return addNewCard;
}

module.exports = AddNewCard();

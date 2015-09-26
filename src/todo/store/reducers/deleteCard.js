const _ = require('ramda');

const DeleteCard = function() {

  const run = function(columns, data) {
    return _.map((column) => removeCard(column, data), columns);
  }

  const removeCard = function(column, data) {
    if(column.id === data.columnId) {
      column.cards = _.reject((card) => card.id === data.id, column.cards);
    }

    return column;
  }

  return run;
}

module.exports = DeleteCard();

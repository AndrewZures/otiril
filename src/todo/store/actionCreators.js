const ActionTypes = require('./actionTypes.js')

const actionCreators = {

  addCard: function(cardData) {
    return {
      type: ActionTypes.board.addCard,
      data: cardData
    }
  },

  updateCardColumn: function(card, columnId) {
    return {
      type: ActionTypes.board.updateCardColumn,
      data: {
        columnId: columnId,
        card: card
      }
    };
  }

}

module.exports = actionCreators;

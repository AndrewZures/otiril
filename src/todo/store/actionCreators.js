const ActionTypes = require('./actionTypes.js')

const actionCreators = {

  addCard: function(cardData) {
    return {
      type: ActionTypes.board.addCard,
      data: cardData
    }
  },

  deleteCard: function(data) {
    return {
      type: ActionTypes.board.deleteCard,
      data: data
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

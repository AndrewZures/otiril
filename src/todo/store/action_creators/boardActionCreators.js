const ActionTypes = require('../actionTypes.js')

const BoardActionCreators = {

  newCard: function() {
    return {
      type: ActionTypes.board.newCard
    }
  },

  saveOrUpdateCard: function(card) {
    return {
      type: ActionTypes.board.saveOrUpdateCard,
      data: card
    }
  },

  deleteCard: function(data) {
    return {
      type: ActionTypes.board.deleteCard,
      data: data
    }
  },

  editCard: function(data) {
    return {
      type: ActionTypes.board.editCard,
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
    }
  },

  moveCardPosition: function(originalIndex, overIndex, columnId) {
    return {
      type: ActionTypes.board.moveCardPosition,
      data: {
        originalIndex: originalIndex,
        overIndex: overIndex,
        columnId: columnId
      }
    }
  }

}

module.exports = BoardActionCreators

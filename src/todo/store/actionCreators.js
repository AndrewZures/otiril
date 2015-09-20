const ActionTypes = require('./actionTypes.js')

const actionCreators = {

  changeColumn: function(card, columnId) {
    return {
      type: ActionTypes.board.addToWorkingColumn,
      data: {
        columnId: columnId,
        card: card
      }
    };
  }

}

module.exports = actionCreators;

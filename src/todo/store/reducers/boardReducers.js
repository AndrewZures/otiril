const _ = require("ramda");
const Actions = require('../actionTypes.js');
const AddCard = require('./board/addCard.js');
const UpdateCard = require('./board/updateCard.js');
const DeleteCard = require('./board/deleteCard.js');
const MoveCardPosition = require('./board/moveCardPosition.js');
const UpdateCardColumn = require('./board/updateCardColumn.js');

const ColumnReducer = function() {

  const columnReducer = function(columns = [], action) {
    switch(action.type) {
      case Actions.board.saveOrUpdateCard:
        columns = saveOrUpdateCard(columns, action); break;
      case Actions.board.deleteCard:
        columns = DeleteCard(columns, action.data); break;
      case Actions.board.updateCardColumn:
        columns = UpdateCardColumn(columns, action.data); break;
      case Actions.board.moveCardPosition:
        columns = MoveCardPosition(columns, action); break
    }

    return columns;
  }

  const saveOrUpdateCard = function(columns, action) {
    if(action.data.id === undefined) {
      return AddCard(action.data, columns)
    } else {
      return UpdateCard(action.data, columns)
    }
  }


  return columnReducer;
}

module.exports = ColumnReducer();

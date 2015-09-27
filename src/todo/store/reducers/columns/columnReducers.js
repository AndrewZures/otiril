const _ = require("ramda");
const Actions = require('../../actionTypes.js');
const AddNewCard = require('./addNewCard.js');
const DeleteCard = require('./deleteCard.js');
const UpdateCardColumn = require('./updateCardColumn.js');

const ColumnReducer = function() {

  const columnReducer = function(columns = [], action) {
    switch(action.type) {
      case Actions.board.updateCardColumn:
        columns = UpdateCardColumn(columns, action.data); break;
      case Actions.board.addCard:
        columns = AddNewCard(columns, action.data); break;
      case Actions.board.deleteCard:
        columns = DeleteCard(columns, action.data); break;
    }

    return columns;
  }


  return columnReducer;
}

module.exports = ColumnReducer();

const _ = require("ramda");
const BoardActions = require('../actionTypes.js').board;
const AddNewCard = require('./addNewCard.js');
const DeleteCard = require('./deleteCard.js');
const UpdateCardColumn = require('./updateCardColumn.js');

const ColumnReducer = function() {

  const columnReducer = function(columns = [], action) {
    switch(action.type) {
      case BoardActions.updateCardColumn:
        columns = UpdateCardColumn(columns, action.data); break;
      case BoardActions.addCard:
        columns = AddNewCard(columns, action.data); break;
      case BoardActions.deleteCard:
        columns = DeleteCard(columns, action.data); break;
    }

    return columns;
  }


  return columnReducer;
}

module.exports = ColumnReducer();

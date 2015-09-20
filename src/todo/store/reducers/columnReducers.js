const _ = require("ramda");
const BoardActions = require('../actionTypes.js').board;
const AddNewCard = require('./addNewCard.js');
const UpdateCardColumn = require('./updateCardColumn.js');

const ColumnReducer = function() {

  const columnReducer = function(columns = [], action) {
    switch(action.type) {
      case BoardActions.updateCardColumn: UpdateCardColumn(columns, action.data); break;
      case BoardActions.addCard: AddNewCard(columns, action.data); break;
    }
    return columns;
  }


  return columnReducer;
}

module.exports = ColumnReducer();

const _ = require("ramda");
const ActionTypes = require('../actionTypes.js');
const NewModalReducer = require('./modal/newModalReducer.jsx');
const ShowModalReducer = require('./modal/showModalReducer.jsx');
const CloseModalReducer = require('./modal/closeModalReducer.jsx');
const ResetModalReducer = require('./modal/resetModalReducer.jsx');
const ToggleEditableReducer = require('./modal/toggleEditableReducer.jsx');

const ModalReducer = function(modal = {}, action) {
  switch(action.type) {
    case ActionTypes.board.newCard: return NewModalReducer();
    case ActionTypes.board.editCard: return ShowModalReducer(action);
    case ActionTypes.modal.resetModal: return ResetModalReducer(modal);
    case ActionTypes.modal.closeModal: return CloseModalReducer();
    case ActionTypes.modal.toggleEditable: return ToggleEditableReducer(modal);
  }

  return modal
}


module.exports = ModalReducer;

const _ = require("ramda");
const ActionTypes = require('../actionTypes.js');
const CardModal = require('../../modals/card_modal/cardModal.jsx');

const ModalReducer = function() {

  const modalReducer = function(modal = {}, action) {
    switch(action.type) {
      case ActionTypes.board.newCard:
        modal = newModal(); break;
      case ActionTypes.board.editCard:
        modal = showModal(action); break;
      case ActionTypes.modal.resetModal:
        modal = resetModal(modal); break;
      case ActionTypes.modal.closeModal:
        modal = closeModal(); break;
      case ActionTypes.modal.toggleEditable:
        modal = toggleEditable(modal); break;
    }

    return modal
  }

  const newModal = function() {
    return { showModal: true,
             editable: false,
             data: {},
             presentedData: {},
             modalComponent: CardModal }
  }

  const showModal = function(action) {
    return { showModal: true,
             editable: false,
             data: action.data,
             presentedData: _.clone(action.data),
             modalComponent: CardModal }
  }

  const closeModal = function(action) {
    return { showModal: false,
             editable: false,
             data: {},
             presentedData: {},
             modalComponent: "" }
  }

  const resetModal = function(modal) {
    return _.merge(modal, { presentedData: _.clone(modal.data) })
  }

  const toggleEditable = function(modal) {
    return _.merge(modal, { editable: !modal.editable })
  }

  return modalReducer
}

module.exports = ModalReducer()

const _ = require("ramda");
const Actions = require('../actionTypes.js');
const CardModal = require('../../modals/cardModal.jsx');

const ModalReducer = function() {

  const modalReducer = function(modal = {}, action) {
    switch(action.type) {
      case Actions.card.editCard:
        modal = showCardModal(action); break;
      case Actions.main.closeModal:
        modal = closeModal(); break;
    }

    return modal
  }

  const closeModal = function(action) {
    return { showModal: false,
             data: {},
             modalComponent: "" }
  }

  const showCardModal = function(action) {
    return { showModal: true,
             data: action.data,
             modalComponent: CardModal }
  }

  return modalReducer
}

module.exports = ModalReducer()

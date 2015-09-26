const _ = require("ramda");
const Actions = require('../actionTypes.js');

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
    return { showModal: false, cardData: {} }
  }

  const showCardModal = function(action) {
    return { showModal: action.showModal, cardData: action.cardData }
  }

  return modalReducer
}

module.exports = ModalReducer()

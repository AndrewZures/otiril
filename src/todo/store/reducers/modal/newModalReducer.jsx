const CardModal = require('../../../modals/card_modal/cardModal.jsx');

const NewModal = function() {
  return {
    showModal: true,
    editable: false,
    data: {},
    presentedData: {},
    modalComponent: CardModal
  }
}

module.exports = NewModal;

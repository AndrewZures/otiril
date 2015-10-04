const _ = require("ramda");
const CardModal = require('../../../modals/card_modal/cardModal.jsx');

const ShowModal = function(action) {
  return {
    showModal: true,
    editable: false,
    data: action.data,
    presentedData: _.clone(action.data),
    modalComponent: CardModal
  }
}

module.exports = ShowModal;

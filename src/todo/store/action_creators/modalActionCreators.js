const ActionTypes = require('../actionTypes.js')

const ModalActionCreators = {

  updateModal: function(presentedData) {
    return {
      type: ActionTypes.modal.updateModal,
      presentedData: presentedData
    }
  },

  closeModal: function() {
    return { type: ActionTypes.modal.closeModal }
  },

  resetModal: function() {
    return { type: ActionTypes.modal.resetModal }
  },

  toggleEditable: function() {
    return { type: ActionTypes.modal.toggleEditable }
  }

}

module.exports = ModalActionCreators;

const ActionTypes = {
  modal: {
    closeModal: "CLOSE_MODAL",
    updateModal: "UPDATE_MODAL",
    resetModal: "RESET_MODAL",
    toggleEditable: "TOGGLE_EDITABLE"
  },
  board: {
    newCard: 'NEW_CARD',
    editCard: 'EDIT_CARD',
    deleteCard: 'DELETE_CARD',
    updateCardColumn: 'UPDATE_CARD_COLUMN',
    saveOrUpdateCard: 'SAVE_OR_UPDATE_CARD'
  }
}

module.exports = ActionTypes

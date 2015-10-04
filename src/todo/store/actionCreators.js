const ActionTypes = require('./actionTypes.js')
const ModalActionCreators = require('./action_creators/modalActionCreators.js')
const BoardActionCreators = require('./action_creators/boardActionCreators.js')

const actionCreators = {

  modal: ModalActionCreators,
  board: BoardActionCreators


}

module.exports = actionCreators;

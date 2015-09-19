const Redux = require('redux');
const ActionTypes = require('../actionTypes.js')

function boardReducer(state = 0, action){
  switch(action.type) {
    case ActionTypes.board.addToWorkingColumn: state += 1; break;
  }

  return state
}

module.exports = boardReducer

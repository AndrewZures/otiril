const Redux = require('redux');
const ActionTypes = require('./actionTypes.js')

function firstReducer(state = 0, action){
  switch(action.type) {
    case ActionTypes.Todo.increment: state += 1; break;
    case ActionTypes.Todo.decrement: state -= 1; break;
    case ActionTypes.Todo.increment2: state += 2; break;
    case ActionTypes.Todo.decrement2: state -= 2; break;
  }

  return state
}

module.exports = firstReducer

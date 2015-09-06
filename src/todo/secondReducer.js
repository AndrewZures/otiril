const Redux = require('redux');
const ActionTypes = require('./actionTypes.js')

function secondReducer(state = "", action){
  switch(action.type) {
    case ActionTypes.Todo.increment: state = "inc1"; break;
    case ActionTypes.Todo.decrement: state = "dec1"; break;
    case ActionTypes.Todo.increment2: state = "inc2"; break;
    case ActionTypes.Todo.decrement2: state = "dec2"; break;
  }

  return state
}

module.exports = secondReducer

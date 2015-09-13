const ActionTypes = require('./actionTypes.js')

function titleize(state = true, action){
  switch(action.type) {
    case ActionTypes.Todo.increment: state = false; break;
    case ActionTypes.Todo.decrement: state = false; break;
    case ActionTypes.Todo.increment2: state = true; break;
    case ActionTypes.Todo.decrement2: state = true; break;
  }

  return state
}

module.exports = titleize

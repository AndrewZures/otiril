const React = require('react')
const Store = require('./store.js')
const ActionTypes = require('./actionTypes.js')

class TodoApp extends React.Component {

  constructor(props){
    super(props);
    this.state = Store.getState()
    this.subscribeToThings()
  }

  render(){
    return(
      <div>
        Todo App
        <h2>{ this.state.title }</h2>
        <button onClick={ this.increment.bind(this) } >inc</button>
        <button onClick={ this.decrement.bind(this) } >dec</button>
        <button onClick={ this.secondIncrement.bind(this) } >2inc</button>
        <div className="count">{ this.state.count }</div>
      </div>
    )
  }

  increment() {
    Store.dispatch({ type: ActionTypes.Todo.increment })
  }

  secondIncrement() {
    Store.dispatch({ type: ActionTypes.Todo.increment2 })
  }

  decrement() {
    Store.dispatch({ type: ActionTypes.Todo.decrement })
  }

  subscribeToThings(){
    Store.subscribe(() => this.setState(Store.getState()))
  }

}

module.exports = TodoApp

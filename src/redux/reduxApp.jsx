const React = require('react')
const Store = require('./store.js')
const ActionTypes = require('./actionTypes.js')

class ReduxApp extends React.Component {

  constructor(props){
    super(props);
    this.state = Store.getState()
  }

  componentDidMount() {
    Store.subscribe(() => this.setState(Store.getState()))
    Store.subscribe(() => console.log(Store.getState()))
  }

  render(){
    return(
      <div>
        Basic Redux Stuff
        <h2>{ this.state.title.title }</h2>
        <h3>{ this.capitalize() }</h3>
        <button onClick={ this.increment.bind(this) } >inc</button>
        <button onClick={ this.decrement.bind(this) } >dec</button>
        <button onClick={ this.secondIncrement.bind(this) } >2inc</button>
        <div className="count">{ this.state.count }</div>
      </div>
    )
  }

  capitalize() {
    const title = this.state.title.title
    return this.state.title.capitalize ? `hi ${title}` : title
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

}
module.exports = ReduxApp

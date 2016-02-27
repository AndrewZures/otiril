import { Link } from 'react-router'
import Transition from './Transition'

class AppContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { data: ['hi', 'hello', 'har'] }
  }

  add(){
    this.setState({ data: _.concat(this.state.data, ['howdy']) })
  }

  remove() {
    this.setState({ data: _.slice(0, this.state.data.length-1, this.state.data) })
  }

  static contextTypes = {
    store: React.PropTypes.object
  }

  componentWillMount() {
    this.setState({ store: this.context.store })
  }

  render() {
    return(
      <div>
        <button onClick={this.add.bind(this)}>Add</button>
        <button onClick={this.remove.bind(this)}>Remove</button>
        <div className="example">
          <ul key={12345}>
            <Transition>
              {this.state.data.map((i, idx) => <li key={idx}>{i}</li>)}
            </Transition>
          </ul>
        </div>
      </div>
    )
  }
}

export default AppContainer

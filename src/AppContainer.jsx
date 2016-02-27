import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
    const items = this.state.data.map((i, idx) => <li key={idx}>{i}</li>)
    return(
      <div>
        <button onClick={this.add.bind(this)}>Add</button>
        <button onClick={this.remove.bind(this)}>Remove</button>
        <div className="example">
          <ul key={12345}>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300} >
                {items}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    )
  }
}

export default AppContainer

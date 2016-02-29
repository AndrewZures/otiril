import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Transition extends React.Component {

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300} >
        {this.props.children}
      </ReactCSSTransitionGroup>
    )
  }
}

export default Transition

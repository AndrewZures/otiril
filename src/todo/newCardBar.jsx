const React = require('react');
const Store = require('./store/store.js');
const ActionCreators = require('./store/actionCreators.js');

class NewCardBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentTitle: "" }
  }

  handleTitleChange(e) {
    this.setState({ currentTitle: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.state.currentTitle.length !== 0) {
      Store.dispatch(ActionCreators.addCard({ title: this.state.currentTitle}));
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this) }>
        <div>
          <input
            type="text"
            value={this.state.currentTitle}
            placeholder={this.props.defaultText.title}
            onChange={this.handleTitleChange.bind(this)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

module.exports = NewCardBar

const _ = require('ramda');
const React = require('react');

const ActionCreators = require('../../store/actionCreators.js');
const TitleBox = require('./titleBox.jsx')
const SummaryBox = require('./summaryBox.jsx')
const ModalButtons = require('./modalButtons.jsx')

class CardModal extends React.Component {

  render() {
    return (
      <div className="cardModal">
        <TitleBox {...this.props} />
        <SummaryBox {...this.props} />
        <ModalButtons {...this.props} />
      </div>
    );
  }

}

module.exports = CardModal

jest.dontMock('../src/jest/jestApp.jsx')

const React = require('react');
const ReactDom = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const CheckBoxWithLabel = require('../src/jest/jestApp.jsx');

describe('CheckBoxWithLabel', () => {

  it('changes the text after a click', () => {
    const checkBox = TestUtils.renderIntoDocument(
      <CheckBoxWithLabel labelOn="On" labelOff="Off" />
    );

    const checkBoxNode = ReactDom.findDOMNode(checkBox);

    expect(checkBoxNode.textContent).toEqual('Off')
  });

});

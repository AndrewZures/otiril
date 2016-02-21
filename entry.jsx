require("./css/style.css")

window.React = require('react')

const ReactDOM = require('react-dom');
const Router = require('./src/Router');

ReactDOM.render(
  <Router />,
  document.getElementById('app')
);

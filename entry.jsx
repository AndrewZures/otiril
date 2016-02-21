require("./css/style.css")

window.React = require('react')

import ReactDOM from 'react-dom'
import Router from './src/Router'

ReactDOM.render(
  <Router />,
  document.getElementById('app')
);

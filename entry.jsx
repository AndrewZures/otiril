require("./css/style.css")
const React = require('react')
const App   = require('./src/app.jsx')
const root  = window.document.querySelector('#app')

React.render(<App />, root);

require("./css/style.css")

const React = require('react')
const Router = require('react-router');

const AppRoutes = require('./src/routes.jsx');
const root  = window.document.querySelector('#app');

Router.run(AppRoutes, (Handler) => React.render(<Handler />, root));

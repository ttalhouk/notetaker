const React = require('react');
const Router = require('react-router').Router;
const ReactDOM = require('react-dom');
const routes = require('./config/routes');


ReactDOM.render(
  <Router>{routes}</Router>,
   document.getElementById('app')
 );

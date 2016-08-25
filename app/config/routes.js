const React = require('react');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

// Components
const Main = require('../components/Main');
const Home = require('../components/Home');


module.exports = (
  <Route path='/' component={Main}>
    <IndexRoute component={Home} />
  </Route>
)

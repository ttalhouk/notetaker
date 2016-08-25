const React = require('react');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;


// Components
const Main = require('../components/Main');
const Home = require('../components/Home');
const Profile = require('../components/Profile');

module.exports = (
  <Route path='/' component={Main}>
    <Route path='profile/:username' component={Profile} />
    <IndexRoute component={Home} />
  </Route>
)

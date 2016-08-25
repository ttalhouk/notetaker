const React = require('react');
const ReactRouter = require('react-router');
const UserProfile = require('./GitHub/UserProfile');
const Repos = require('./GitHub/Repos');
const Notes = require('./Notes/Notes');
const ReactFireMixin = require('reactfire');
const Firebase = require('firebase');
const ENV = require('../../globals/env')

var config = {
  apiKey: ENV.FIREBASE_KEY,
  authDomain: ENV.FIREBASE_DOMAIN,
  databaseURL: ENV.FIREBASE_URL,
  storageBucket: ENV.FIREBASE_BUCKET,
};
Firebase.initializeApp(config);

const Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      notes: ["Note 1", "Note 2", "Note 3"],
      bio: {
        name: 'default name'
      },
      repos: ["Repo1", "Repo2", "Repo3"]
    }
  },
  componentWillMount: function() {
    console.log(ENV);
    this.ref = Firebase.database().ref('/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef,'notes');
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  render: function(){
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;

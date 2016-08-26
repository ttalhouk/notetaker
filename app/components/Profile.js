const React = require('react');
const ReactRouter = require('react-router');
const UserProfile = require('./GitHub/UserProfile');
const Repos = require('./GitHub/Repos');
const Notes = require('./Notes/Notes');
const ReactFireMixin = require('reactfire');
const Firebase = require('firebase');
const ENV = require('../../globals/env');
const helpers = require('../utils/helpers');

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
        name: ''
      },
      repos: []
    }
  },
  componentDidMount: function() {
    this.ref = Firebase.database().ref('/');
    this.init(this.props.params.username);
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  componentWillReceiveProps: function(nextProps){
    this.unbind('notes');
    this.init(nextProps.params.username)
  },
  init: function(username) {
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef,'notes');

    helpers.getGitHubInfo(username)
      .then(function(data){
        this.setState({
          bio: data.bio,
          repos: data.repos
        });
      }.bind(this));
  },
  handleNewNote: function(newNote) {
    // update firebase
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },

  render: function(){
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            addNewNote={this.handleNewNote} username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;

const React = require('react');
const ReactRouter = require('react-router');
const UserProfile = require('./GitHub/UserProfile');
const Repos = require('./GitHub/Repos');
const Notes = require('./Notes/Notes');


const Profile = React.createClass({
  getInitialState: function(){
    return {
      notes: ["Note 1", "Note 2", "Note 3"],
      bio: {
        name: 'default name'
      },
      repos: ["Repo1", "Repo2", "Repo3"]
    }
  },
  render: function(){
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;

const React = require('react');


const UserProfile = React.createClass({
  propTypes:{
    bio: React.PropTypes.object.isRequired,
    username: React.PropTypes.string.isRequired
  },
  render: function(){
    console.log(this.props);
    return (
      <div>
        <h2>User Profile: {this.props.username}</h2>
        <p>Bio: {this.props.bio.name} </p>
      </div>
    )
  }
});

module.exports = UserProfile;

const React = require('react');

const Repos = React.createClass({
  propTypes:{
    repos: React.PropTypes.array.isRequired,
    username: React.PropTypes.string.isRequired
  },
  render: function(){
    console.log(this.props);
    return (
      <div>
        <p>Repos</p>
        Repos: {this.props.repos}
      </div>
    )
  }
});

module.exports = Repos;

const React = require('react');


const Repos = React.createClass({
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

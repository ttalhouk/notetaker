const React = require('react');


const Notes = React.createClass({
  render: function(){
    console.log(this.props);
    return (
      <div>
        <p>Notes</p>
        <p>
          {this.props.notes}
        </p>
      </div>
    )
  }
});

module.exports = Notes;

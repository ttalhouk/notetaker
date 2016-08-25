const React = require('react');
const NotesList = require('./NotesList');

const Notes = React.createClass({
  render: function(){
    console.log(this.props);
    console.log('notes: '+ this.props.notes);
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
});

module.exports = Notes;
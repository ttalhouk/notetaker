const React = require('react');
const NotesList = require('./NotesList');
const AddNote = require('./AddNote');

const Notes = React.createClass({
  propTypes:{
    notes: React.PropTypes.array.isRequired,
    username: React.PropTypes.string.isRequired,
    addNewNote:React.PropTypes.func.isRequired
  },
  render: function(){
    console.log('notes: '+ this.props.notes);
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNote
          username={this.props.username}
          addNewNote={this.props.addNewNote}/>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
});

module.exports = Notes;

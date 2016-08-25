const React = require('react');

const AddNote = React.createClass({
  propTypes:{
    username: React.PropTypes.string.isRequired,
    addNewNote:React.PropTypes.func.isRequired
  },
  setRef: function(ref){
    this.note = ref;
  },
  handleSubmit: function() {
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNewNote(newNote);
  },
  render: function(){
    return(
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef}></input>
        <span className="input-group-button">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    )
  }
});

module.exports = AddNote;

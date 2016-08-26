const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory

const SearchGitHub = React.createClass({
  // mixins: [ReactRouter.History],
  setRef: function(ref){
    this.usernameRef = ref;
  },
  handleSearch: function() {
    var username = this.usernameRef.value;
    this.usernameRef.value = '';
    hashHistory.push('/profile/' + username)
    // this.history.pushState(null, 'profile/' + username)
  },
  render: function(){
    return(
      <div className="col-sm-12">
        <form onSubmit={this.handleSearch}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" placeholder="Search by GitHub Username" ref={this.setRef}></input>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search GitHub</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchGitHub;

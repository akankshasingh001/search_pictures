import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm); // passed props from child to parent
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Images</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

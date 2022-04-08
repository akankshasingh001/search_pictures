import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async searchTerm => {
    const response = await unsplash.get('/search/photos', {
      params: { query: searchTerm }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

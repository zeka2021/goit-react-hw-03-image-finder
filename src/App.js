import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import './App.css';


class App extends Component {
  state = {
  query: '',
  }
  handleFormSubmit = value => {
    this.setState({ query: value });
  };
  render() {
      return (
        <div className="App">
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery/>
    </div>
   );
  }

}

export default App;

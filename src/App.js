import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import './App.css';


class App extends Component {
  state = {
    query: '',
    images: [],
  }
  handleFormSubmit = value => {
    this.setState({ query: value });
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.images.length > 1 && (
          <>
            <ImageGallery
              images={this.state.images}
              onModalClick={this.modalToggle}
            />
            
          </>
        )}
      </div>
    );
  }

}

export default App;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { React, Component } from 'react';
import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    pictureName: '',
  };

  handlePictureName = name => {
    this.setState({ pictureName: name });
  };

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <SearchBar onSubmit={this.handlePictureName} />
        <ImageGallery pictureName={this.state.pictureName} />
      </div>
    );
  }
}

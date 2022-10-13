import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';
import { useState } from 'react';

export function App() {
  const [pictureName, setPictureName] = useState('');
  const handlePictureName = name => {
    setPictureName(name);
  };
  return (
    <div className="App">
      <ToastContainer />
      <SearchBar onSubmit={handlePictureName} />
      <ImageGallery pictureName={pictureName} />
    </div>
  );
}

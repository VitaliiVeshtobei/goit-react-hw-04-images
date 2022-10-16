import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';
import { useState } from 'react';

export function App() {
  const [dataAllPictures, setDataAllPictures] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const allPictures = data => {
    setDataAllPictures(data);
  };
  const dataQuery = query => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <ToastContainer />
      <SearchBar onSubmit={allPictures} dataQuery={dataQuery} />
      <ImageGallery
        dataAllPictures={dataAllPictures}
        searchQuery={searchQuery}
      />
    </div>
  );
}

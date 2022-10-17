import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from '../Searchbar/SearchBar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { useState } from 'react';
import css from './App.module.css';

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
    <div className={css.App}>
      <ToastContainer />
      <SearchBar onSubmit={allPictures} dataQuery={dataQuery} />
      <ImageGallery
        dataAllPictures={dataAllPictures}
        searchQuery={searchQuery}
      />
    </div>
  );
}

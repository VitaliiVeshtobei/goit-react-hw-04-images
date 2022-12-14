import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
// import './styles.css';
import { FcSearch } from 'react-icons/fc';
import { getApi } from '../../utils/serviceApi';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
const {
  Searchbar,
  SearchForm,
  SearchForm_button,
  SearchForm_button_label,
  SearchForm_input,
} = css;

export function SearchBar({ onSubmit, dataQuery }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [dataPictures, setDataPictures] = useState(null);

  const handleChangeSearchQuery = evt => {
    setSearchQuery(evt.currentTarget.value);
  };
  const handleSubmit = async evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Введите название!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const resp = await getApi(1, searchQuery);

    setDataPictures(resp.hits);
    dataQuery(searchQuery);

    setSearchQuery('');
    evt.target.reset();
  };
  useEffect(() => {
    onSubmit(dataPictures);
  }, [dataPictures, onSubmit]);

  return (
    <>
      <header className={Searchbar}>
        <form className={SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={SearchForm_button}>
            <FcSearch className={SearchForm_button_label} />
          </button>

          <input
            className={SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChangeSearchQuery}
          />
        </form>
      </header>
    </>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  dataQuery: PropTypes.func,
};

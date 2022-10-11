import { toast } from 'react-toastify';
import { React, Component } from 'react';
import './styles.css';
import { FcSearch } from 'react-icons/fc';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };
  handleChangeSearchQuery = evt => {
    this.setState({ searchQuery: evt.currentTarget.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
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
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
    evt.target.reset();
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <FcSearch className="SearchForm-button-label" />
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChangeSearchQuery}
            />
          </form>
        </header>
      </>
    );
  }
}

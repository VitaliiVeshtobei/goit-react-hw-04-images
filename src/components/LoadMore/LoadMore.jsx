import PropTypes from 'prop-types';
import css from './LoadMore.module.css';

export const LoadMore = ({ onClickLoadMore }) => {
  return (
    <button className={css.Button} type="button" onClick={onClickLoadMore}>
      Load More
    </button>
  );
};

LoadMore.propTypes = {
  onClickLoadMore: PropTypes.func,
};

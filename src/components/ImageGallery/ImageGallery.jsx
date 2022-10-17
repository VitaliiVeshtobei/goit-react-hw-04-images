import { toast } from 'react-toastify';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { LoadMore } from '../LoadMore/LoadMore';
import { Loader } from '../Loader';
import React, { useState, useEffect } from 'react';
import { getApi } from 'utils/serviceApi';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export function ImageGallery({ dataAllPictures, searchQuery }) {
  const [dataGallery, setDataGallery] = useState(null);
  const [page, setPage] = useState(1);
  const [visibleLoadMore, setVisibleLoadMore] = useState(false);
  const [visibleLoader, setVisibleLoader] = useState(false);

  useEffect(() => {
    if (dataAllPictures === null) {
      return;
    }

    if (dataAllPictures.length === 0) {
      toast.error('No such pictures!');

      return;
    }
    if (dataAllPictures.length > 11) {
      setDataGallery(dataAllPictures);
      setVisibleLoadMore(true);
    } else {
      setDataGallery(dataAllPictures);
      setVisibleLoadMore(false);
    }
  }, [dataAllPictures]);

  const loadMoreClick = () => {
    setVisibleLoader(true);
    setPage(page + 1);

    getApi(page + 1, searchQuery).then(res => {
      setVisibleLoader(false);

      if (res.hits.length === 0) {
        toast.error('No such pictures!');
        setVisibleLoadMore(false);
        return;
      }
      if (res.hits.length > 11) {
        setDataGallery([...dataGallery, ...res.hits]);
        return;
      }
      setDataGallery([...dataGallery, ...res.hits]);
      setVisibleLoadMore(false);
    });
  };
  return (
    <>
      <ul className={css.ImageGallery}>
        {dataGallery &&
          dataGallery.map(picture => {
            return <ImageGalleryItem data={picture} key={picture.id} />;
          })}
      </ul>
      <Loader visible={visibleLoader} />
      {visibleLoadMore && <LoadMore onClickLoadMore={loadMoreClick} />}
    </>
  );
}

ImageGallery.propTypes = {
  dataAllPictures: PropTypes.array,
  searchQuery: PropTypes.string,
};

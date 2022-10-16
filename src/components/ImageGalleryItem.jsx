import React from 'react';
import { Modal } from './Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={openModal}
        className="ImageGalleryItem-image"
        src={data.webformatURL}
        alt=""
      />
      {isModalOpen && (
        <Modal
          largeImage={data.largeImageURL}
          altTags={data.tags}
          closeModal={closeModal}
        />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  data: PropTypes.object,
};

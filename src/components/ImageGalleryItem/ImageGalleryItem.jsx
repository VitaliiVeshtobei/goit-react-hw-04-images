import React from 'react';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
const { ImageGalleryItems, ImageGalleryItem_image } = css;

export function ImageGalleryItem({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={ImageGalleryItems}>
      <img
        onClick={openModal}
        className={ImageGalleryItem_image}
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

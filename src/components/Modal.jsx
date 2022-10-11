import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export const Modal = ({ largeImage, altTags, closeModal, keydown }) => {
  return ReactDOM.createPortal(
    <div
      className="Overlay"
      onClick={closeModal}
      tabIndex={0}
      onKeyDown={keydown}
    >
      <div className="Modal">
        <img src={largeImage} alt={altTags} />
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string,
  altTags: PropTypes.string,
  closeModal: PropTypes.func,
};

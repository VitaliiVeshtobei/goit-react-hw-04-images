import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export function Modal({ closeModal, largeImage, altTags }) {
  const keydown = evt => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', keydown);
    return () => {
      window.removeEventListener('keydown', keydown);
    };
  });

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
}

Modal.propTypes = {
  largeImage: PropTypes.string,
  altTags: PropTypes.string,
  closeModal: PropTypes.func,
};

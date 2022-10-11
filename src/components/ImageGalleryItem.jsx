import React from 'react';
import { Modal } from './Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  keydown = evt => {
    console.log(evt.key);
  };

  render() {
    const { data } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.openModal}
          className="ImageGalleryItem-image"
          src={data.webformatURL}
          alt=""
        />
        {this.state.isModalOpen && (
          <Modal
            largeImage={data.largeImageURL}
            altTags={data.tags}
            closeModal={this.closeModal}
            keydown={this.keydown}
          />
        )}
      </li>
    );
  }
}

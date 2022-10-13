import axios from 'axios';
import PropTypes from 'prop-types';

export const getApi = async (nextStatePage, nextName) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: '29558697-85a489dc53885da2ee650bf34',
    q: `${nextName}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${nextStatePage}`,
    per_page: '12',
  };
  try {
    const resolve = await axios(BASE_URL, { params });
    return resolve.data;
  } catch (erorr) {
    console.log(erorr);
  }
};

getApi.propTypes = {
  nextStatePage: PropTypes.number,
  nextName: PropTypes.string,
};

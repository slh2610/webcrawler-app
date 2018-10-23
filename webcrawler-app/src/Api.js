import axios from 'axios';

export const sendURL = () => {
  axios
    .post('localhost:9090', 'https://broken-links-api.herokuapp.com/')
    .then(console.log('sent url'));
};

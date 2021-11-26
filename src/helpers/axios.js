import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.43.78/HomeProject/',
});

export default instance;

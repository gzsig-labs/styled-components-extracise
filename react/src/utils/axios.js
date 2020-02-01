import axios from 'axios';

const beersAPI = axios.create({
  baseURL: 'http://localhost:8000/beers'
});

export default beersAPI;

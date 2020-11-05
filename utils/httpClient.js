import axios from 'axios';

const client = axios.create({
  baseURL: "http://localhost:10000",
  headers: {
    Accept: 'application/json'
  },
})

export default client;
import axios from 'axios';


export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID NX6Bgo_utS3VXDcea98ry5zBF225ymNKXFqPAdqbTJE",
  },
});
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID kN5Og_bmF_9zpYYqfgvjuzDiexikQ78mq0lWtb7ZQk4",
  },
});

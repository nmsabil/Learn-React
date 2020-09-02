import axios from "axios";

const KEY = "AIzaSyBd0iabzLfPl4_mn9L61ckybc5duWfMg_k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

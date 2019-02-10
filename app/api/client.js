import axios from "axios";

const client = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0"
});

export { client };

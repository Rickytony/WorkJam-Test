import axios from "axios";

const client = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0"
});

const getTopStories = () => {
  return client.get("/topstories.json");
};

const getStory = storyId => {
  return client.get(`/item/${storyId}.json`);
};

const getComment = commentId => {
  return client.get(`/item/${commentId}.json`);
};

export { getTopStories, getStory, getComment };

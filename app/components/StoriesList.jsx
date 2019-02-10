import React from "react";
import { client } from "../api/client.js";

class StoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: {}
    };
    this.getStories = this.getStories.bind(this);
  }

  componentDidMount() {
    client
      .get("/topstories.json")
      .then(response => {
        this.getStories(response.data.slice(0, 10));
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  getStories(storyIds) {
    storyIds.forEach(story => {
      client.get(`/item/${story}.json`).then(response => {
        this.setState(prevState => ({
          stories: {
            ...prevState.stories,
            [`${story}`]: response.data
          }
        }));
      });
    });
  }
  render() {
    return <div />;
  }
}

export { StoriesList };

import React from "react";
import { client } from "../api/client.js";
import { Story } from "./Story.jsx";

class StoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: []
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
        this.setState({
          stories: [...this.state.stories, response.data]
        });
      });
    });
  }

  render() {
    if (!this.state.stories) {
      return (
        <div className="container">
          <h1 className="col">Stories are loading...</h1>
        </div>
      );
    }

    return (
      <div>
        {this.state.stories.map(story => (
          <Story data={story} key={story.id} />
        ))}
      </div>
    );
  }
}

export { StoriesList };

import React from "react";
import { getStory, getTopStories } from "../api/client.js";
import { Story } from "./Story.jsx";

class StoriesList extends React.Component {
  constructor() {
    super();

    this.state = {
      stories: []
    };
    this.getStories = this.getStories.bind(this);
  }

  componentDidMount() {
    return getTopStories()
      .then(response => {
        this.getStories(response.data.slice(0, 10));
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  getStories(storyIds) {
    storyIds.forEach(story => {
      return getStory(story).then(response => {
        this.setState({
          stories: [...this.state.stories, response.data]
        });
      });
    });
  }

  render() {
    if (this.state.stories.length < 1) {
      return (
        <div className="container">
          <h2 className="col">Stories are loading...</h2>
        </div>
      );
    }

    return (
      <div className="container mt-4">
        {this.state.stories.map(story => (
          <Story data={story} key={story.id} />
        ))}
      </div>
    );
  }
}

export { StoriesList };

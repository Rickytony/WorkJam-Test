import React from "react";
import PropTypes from "prop-types";
import { getComment } from "../api/client.js";
import { CommentList } from "./CommentList.jsx";

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      showComments: false
    };

    this.getComments = this.getComments.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
  }

  getComments(commentIds) {
    commentIds.forEach(comment => {
      return getComment(comment)
        .then(response => {
          this.setState({
            comments: [...this.state.comments, response.story]
          });
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  }

  toggleComments(e) {
    e.preventDefault();
    this.setState(prevState => ({
      showComments: !prevState.showComments
    }));
  }

  componentDidMount() {
    if (!this.props.story.kids) return;
    this.getComments(this.props.story.kids.slice(0, 20));
  }

  render() {
    const { story } = this.props;
    return (
      <div>
        <a href={story.url} target="_blank">
          <h5 className="col">{story.title}</h5>
        </a>
        <h6 className="col">by {story.by}</h6>
        <CommentList
          comments={this.state.comments}
          showComments={this.state.showComments}
          handleClick={this.toggleComments}
        />
      </div>
    );
  }
}

Story.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired
  })
};

export { Story };

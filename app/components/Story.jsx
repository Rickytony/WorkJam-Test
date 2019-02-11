import React from "react";
import PropTypes from "prop-types";
import { getComment } from "../api/client.js";
import { CommentList } from "./CommentList.jsx";

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };

    this.getComments = this.getComments.bind(this);
  }

  getComments(commentIds) {
    commentIds.forEach(comment => {
      return getComment(comment).then(response => {
        this.setState({
          comments: [...this.state.comments, response.data]
        });
      });
    });
  }

  componentDidMount() {
    this.getComments(this.props.data.kids.slice(0, 10));
  }

  render() {
    const { data } = this.props;
    return (
      <div className="story-container">
        <div className="col">{data.title}</div>
        <div className="col">by {data.by}</div>
        <CommentList data={this.state.comments} />
      </div>
    );
  }
}

Story.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired
  })
};

export { Story };

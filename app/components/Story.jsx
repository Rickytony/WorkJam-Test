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
        <h5 className="col">{data.title}</h5>
        <h6 className="col">by {data.by}</h6>
        <CommentList comments={this.state.comments} />
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

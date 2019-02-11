import React from "react";
import PropTypes from "prop-types";
import { Comment } from "./Comment.jsx";

const CommentList = ({ comments, handleClick, showComments }) => {
  if (comments.length < 1)
    return (
      <div className="col-6 mt-2 mb-3">
        <h6>No comments yet.</h6>
      </div>
    );
  return (
    <div className="col-sm-12 col-md-6 mt-2 mb-4">
      <button
        type="button"
        onClick={e => handleClick(e)}
        className="btn btn-secondary mt-1"
      >
        Comments ({comments.length})
      </button>

      {showComments &&
        comments &&
        comments.map(comment => <Comment comment={comment} key={comment.id} />)}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  showComments: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export { CommentList };

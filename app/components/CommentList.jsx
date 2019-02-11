import React from "react";
import { Comment } from "./Comment.jsx";

const CommentList = ({ comments }) => {
  return (
    <div className="col-6">
      <h6>Comments:</h6>
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export { CommentList };

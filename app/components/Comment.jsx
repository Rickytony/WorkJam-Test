import React from "react";
import ReactHtmlParser from "react-html-parser";

const Comment = ({ comment }) => {
  return (
    <div className="comment-container">
      <p>{comment.by}</p>
      <p>{ReactHtmlParser(comment.text)}</p>
    </div>
  );
};

export { Comment };

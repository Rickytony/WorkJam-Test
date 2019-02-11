import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

const Comment = ({ comment }) => {
  return (
    <div className="mt-2">
      <p className="mb-0">{comment.by}:</p>
      <div>{ReactHtmlParser(comment.text)}</div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    by: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export { Comment };

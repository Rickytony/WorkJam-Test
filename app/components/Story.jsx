import React from "react";
import PropTypes from "prop-types";

const Story = ({ data }) => {
  return (
    <div className="container">
      <div className="col-6">{data.title}</div>
      <div className="col-6">by {data.by}</div>
    </div>
  );
};

Story.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired
  })
};

export { Story };

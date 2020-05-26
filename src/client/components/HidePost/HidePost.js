import React from "react";
import PropTypes from "prop-types";

const HidePost = ({ hidePost, objectId }) => {
  return (
    <a
      className="post__item--link"
      onClick={(e) => {
        e.preventDefault();
        hidePost(objectId);
      }}
    >
      <b>hide</b>
    </a>
  );
};

HidePost.propTypes = {
  hidePost: PropTypes.func.isRequired,
  objectId: PropTypes.string.isRequired,
};

export default HidePost;

import React from "react";
import PropTypes from "prop-types";

const UnVote = ({ votePost, objectId }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        votePost({
          objectId,
          voted: false,
        });
      }}
      className="un-vote-link secondary-color"
    >
      unvote
    </a>
  );
};

UnVote.propTypes = {
  objectId: PropTypes.string.isRequired,
  votePost: PropTypes.func.isRequired,
};

export default UnVote;

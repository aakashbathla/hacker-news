import React from "react";
import PropTypes from "prop-types";

const UpVote = ({ votePost, objectId }) => {
  return (
    <a
      className="up-vote-link"
      onClick={(e) => {
        e.preventDefault();
        votePost({
          objectId,
          voted: true,
        });
      }}
    >
      <div className="up-vote-arrow" />
    </a>
  );
};

UpVote.propTypes = {
  objectId: PropTypes.string.isRequired,
  votePost: PropTypes.func.isRequired,
};

export default UpVote;

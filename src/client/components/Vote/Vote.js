import React from "react";
import PropTypes from "prop-types";

import UnVote from "./UnVote";
import UpVote from "./UpVote";

const Vote = ({ votePost, objectId, voted }) => {
  return voted ? (
    <UnVote votePost={votePost} objectId={objectId} />
  ) : (
    <UpVote votePost={votePost} objectId={objectId} />
  );
};

Vote.propTypes = {
  objectId: PropTypes.string.isRequired,
  votePost: PropTypes.func.isRequired,
  voted: PropTypes.bool,
};

Vote.defaultProps = {
  voted: false,
};

export default Vote;

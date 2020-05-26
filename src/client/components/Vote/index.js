import { connect } from "react-redux";

import { votePost } from "./actions";

import Vote from "./Vote";

export const mapDispatchToProps = (dispatch) => {
  return {
    votePost: (data) => {
      dispatch(votePost(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(Vote);

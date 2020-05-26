import { connect } from "react-redux";

import { hidePost } from "./actions";

import HidePost from "./HidePost";

export const mapDispatchToProps = (dispatch) => {
  return {
    hidePost: (postId) => {
      dispatch(hidePost(postId));
    },
  };
};

export default connect(null, mapDispatchToProps)(HidePost);

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectPostListData } from "./selectors";
import { fetchPostListData } from "./actions";

import PostList from "./PostList/index";

export const mapStateToProps = createStructuredSelector({
  postListData: selectPostListData,
});

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostListData: () => {
      dispatch(fetchPostListData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

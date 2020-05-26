import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectTotalPageData, selectCurrentPageData } from "../Post/selectors";
import { fetchPostListData } from "../Post/actions";

import LoadMore from "./LoadMore";

export const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentPageData,
  totalPages: selectTotalPageData,
});

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostListData: (params) => {
      dispatch(fetchPostListData(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore);

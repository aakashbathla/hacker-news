import { createSelector } from "reselect";

const getPostListDataState = (state) => {
  return state.postList;
};

export const selectPostListData = createSelector(
  getPostListDataState,
  (postListDataState) => postListDataState.data
);

export const selectTotalPageData = createSelector(
  getPostListDataState,
  (postListDataState) => postListDataState.data.nbPages
);

export const selectCurrentPageData = createSelector(
  getPostListDataState,
  (postListDataState) => postListDataState.data.page
);

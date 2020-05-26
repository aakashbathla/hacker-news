import {
  FETCH_POST_LIST_DATA,
  FETCH_POST_LIST_DATA_SUCCESS,
  FETCH_POST_LIST_DATA_ERROR,
} from "./constants";

export const fetchPostListData = (params) => ({
  type: FETCH_POST_LIST_DATA,
  params,
});

export const fetchPostListDataSuccess = (data) => ({
  type: FETCH_POST_LIST_DATA_SUCCESS,
  data,
});

export const fetchPostListDataError = (error) => ({
  type: FETCH_POST_LIST_DATA_ERROR,
  error,
});

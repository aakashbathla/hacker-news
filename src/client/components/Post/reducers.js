import {
  FETCH_POST_LIST_DATA,
  FETCH_POST_LIST_DATA_SUCCESS,
  FETCH_POST_LIST_DATA_ERROR,
} from "./constants";

// import { VOTE_FEED } from "../../atoms/Vote/constants";

import postListInitialState from "../../commons/initialState/postList.state";
import { HIDE_POST } from "../HidePost/constants";

import { removePost } from "../Utils/utils";
import { VOTE_POST } from "../Vote/constants";

const initialState = postListInitialState;

const postListReducer = (state = initialState, { type, data, error }) => {
  switch (type) {
    case FETCH_POST_LIST_DATA:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_POST_LIST_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data,
      };

    case FETCH_POST_LIST_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
      };

    case HIDE_POST:
      return removePost(state, data);

    case VOTE_POST:
      return {
        ...state,
        data: { ...state.data },
      };

    default:
      return state;
  }
};

export default postListReducer;

import { combineReducers } from "redux";

import postListReducer from "./components/Post/reducers";

export default () =>
  combineReducers({
    postList: postListReducer,
  });

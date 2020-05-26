import { all } from "redux-saga/effects";

import postListSaga from "../client/components/Post/sagas";
import hidePostSaga from "../client/components/HidePost/sagas";
// import voteSaga from "./containers/atoms/Vote/sagas";

export default function* rootSaga() {
  //   yield all([feedListSaga(), , voteSaga()]);
  yield all([postListSaga(), hidePostSaga()]);
}

import { all } from "redux-saga/effects";

import postListSaga from "../client/components/Post/sagas";
import hidePostSaga from "../client/components/HidePost/sagas";
import voteSaga from "../client/components/Vote/sagas";

export default function* rootSaga() {
  yield all([postListSaga(), hidePostSaga(), voteSaga()]);
}

/* eslint-disable require-yield */
import { takeLatest } from "redux-saga/effects";

import { HIDE_POST, HIDE_POST_KEY } from "./constants";
import { LocalStorageUtil } from "../../utils/localStorage";

export function* saveHidePostSaga(action) {
  const { data: objectId } = action;

  const storage = new LocalStorageUtil();

  storage.saveItemInArray(HIDE_POST_KEY, objectId);

  // Here, an API request can be made to hide feed
}

export default function* hidePostSaga() {
  yield takeLatest(HIDE_POST, saveHidePostSaga);
}

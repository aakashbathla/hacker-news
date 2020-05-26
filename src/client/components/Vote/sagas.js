/* eslint-disable require-yield */
import { takeLatest } from "redux-saga/effects";

import { VOTE_POST, VOTE_POST_KEY } from "./constants";
import { LocalStorageUtil } from "../../utils/localStorage";

export function* saveUpVotePostSaga(action) {
  const {
    data: { objectId, voted },
  } = action;
  const storage = new LocalStorageUtil();

  if (voted) {
    storage.saveItemInArray(VOTE_POST_KEY, objectId);
  } else {
    storage.removeItemFromArray(VOTE_POST_KEY, objectId);
  }
}

export default function* upVotePostSaga() {
  yield takeLatest(VOTE_POST, saveUpVotePostSaga);
}

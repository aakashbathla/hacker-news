import { call, put, takeLatest } from "redux-saga/effects";
import history from "../../utils/history";

import { fetchPostListDataSuccess, fetchPostListDataError } from "./actions";

import { FETCH_POST_LIST_DATA } from "./constants";

import { FRONT_PAGE_TAG } from "../../commons/constants";
import apis from "../../commons/constants/api.services";

import ServiceUtil from "../../commons/utils/ServiceUtil";
import { buildUrl } from "../../commons/utils/url";

const updateQueryParams = (params) => {
  if (history && Object.keys(params).indexOf("page") > -1) {
    const queryParamsUrl = buildUrl({
      pathName: "/",
      query: {
        ...params,
      },
    });

    history.push(queryParamsUrl);
  }
};

export function* loadPostListSaga(action) {
  try {
    const { params = {} } = action;

    const url = buildUrl({
      pathName: apis.search,
      query: {
        tags: FRONT_PAGE_TAG,
        ...params,
      },
    });

    const listingData = yield call(ServiceUtil.fetch, url);

    yield put(fetchPostListDataSuccess(listingData));

    updateQueryParams(params);
  } catch (err) {
    yield put(fetchPostListDataError(err));
  }
}

export default function* postListSaga() {
  console.log("2");
  yield takeLatest(FETCH_POST_LIST_DATA, loadPostListSaga);
}

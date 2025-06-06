import { takeLatest, put, call } from "redux-saga/effects";
import searchTypes from "./SearchActionTypes";
import { getsearchListResponse, postsearchResponse } from "./SearchActions";
import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../../utils/axios";
export function* onGetsearchList({ payload }) {
  try {
    const { filter, quickFilter = "", keyword = "", count = "" } = payload;

    const sort = filter.sortBy.split("-");

    const url = `search?page=${
      filter.page
    }&filter=${keyword}&role=${quickFilter}&sort_by=${
      sort[0] ? sort[0] : ""
    }&sort=${sort[1] ? sort[1] : ""}&count=${count}`;

    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getsearchListResponse(response));
  } catch (error) {}
}

export function* onPostsearch({ payload }) {
  try {
    yield put(postsearchResponse(payload));
  } catch (error) {}
}

export function* SearchWatcherSaga() {
  yield takeLatest(searchTypes.GET_SEARCH_LIST_REQUEST, onGetsearchList);
  yield takeLatest(searchTypes.POST_SEARCH_REQUEST, onPostsearch);
}

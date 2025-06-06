import { takeLatest, put, call } from "redux-saga/effects";
import albumsTypes from "./AlbumsActionTypes";
import {
  deletealbumsResponse,
  getalbumsByIdResponse,
  getalbumsListResponse,
  postalbumsResponse,
  putalbumsResponse,
} from "./AlbumsActions";
import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../../utils/axios";
export function* onGetalbumsList({ payload }) {
  try {
    const { filter, quickFilter = "", keyword = "", count = "" } = payload;

    const sort = filter.sortBy.split("-");

    const url = `albums?page=${
      filter.page
    }&filter=${keyword}&role=${quickFilter}&sort_by=${
      sort[0] ? sort[0] : ""
    }&sort=${sort[1] ? sort[1] : ""}&count=${count}`;

    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getalbumsListResponse(response));
  } catch (error) {}
}

export function* onGetByIdalbums({ id }) {
  try {
    const url = `albums/${id}`;
    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getalbumsByIdResponse(response));
  } catch (error) {}
}

export function* onPostalbums({ payload }) {
  try {
    const url = `albums`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = yield call(() =>
      axiosPost(url, payload, config).then((res) => res.data)
    );
    yield put(postalbumsResponse(response));
  } catch (error) {}
}

export function* onPutalbums({ payload, id }) {
  try {
    const url = `albums/${id}`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = yield call(() =>
      axiosPut(url, payload, config).then((res) => res.data)
    );
    yield put(putalbumsResponse(response));
  } catch (error) {}
}

export function* onDeletealbums({ id }) {
  try {
    const url = `albums/${id}`;

    const response = yield call(() => axiosDelete(url).then((res) => res.data));
    yield put(deletealbumsResponse(response));
  } catch (error) {}
}

export function* AlbumsWatcherSaga() {
  yield takeLatest(albumsTypes.GET_ALBUMS_LIST_REQUEST, onGetalbumsList);
  yield takeLatest(albumsTypes.GET_ALBUMS_BY_ID_REQUEST, onGetByIdalbums);
  yield takeLatest(albumsTypes.POST_ALBUMS_REQUEST, onPostalbums);
  yield takeLatest(albumsTypes.PUT_ALBUMS_REQUEST, onPutalbums);
  yield takeLatest(albumsTypes.DELETE_ALBUMS_REQUEST, onDeletealbums);
}

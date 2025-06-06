import { takeLatest, put, call } from "redux-saga/effects";
import photosTypes from "./PhotosActionTypes";
import {
  deletephotosResponse,
  getphotosByIdResponse,
  getphotosListResponse,
  postphotosResponse,
  putphotosResponse,
} from "./PhotosActions";
import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../../utils/axios";
export function* onGetphotosList({ payload }) {
  try {
    const {
      filter,
      quickFilter = "",
      keyword = "",
      count = "",
      is_deleted = false,
    } = payload;

    const sort = filter.sortBy.split("-");

    const url = `photos?page=${
      filter.page
    }&filter=${keyword}&role=${quickFilter}&sort_by=${
      sort[0] ? sort[0] : ""
    }&sort=${sort[1] ? sort[1] : ""}&count=${count}&is_deleted=${is_deleted}`;

    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getphotosListResponse(response));
  } catch (error) {}
}

export function* onGetByIdphotos({ id }) {
  try {
    const url = `photos/${id}`;
    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getphotosByIdResponse(response));
  } catch (error) {}
}

export function* onPostphotos({ payload }) {
  try {
    const url = `photos`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = yield call(() =>
      axiosPost(url, payload, config).then((res) => res.data)
    );
    yield put(postphotosResponse(response));
  } catch (error) {}
}

export function* onPutphotos({ payload, id }) {
  try {
    const url = `photos/${id}`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = yield call(() =>
      axiosPut(url, payload, config).then((res) => res.data)
    );
    yield put(putphotosResponse(response));
  } catch (error) {}
}

export function* onDeletephotos({ id }) {
  try {
    const url = `photos/${id}`;

    const response = yield call(() => axiosDelete(url).then((res) => res.data));
    yield put(deletephotosResponse(response));
  } catch (error) {}
}

export function* PhotosWatcherSaga() {
  yield takeLatest(photosTypes.GET_PHOTOS_LIST_REQUEST, onGetphotosList);
  yield takeLatest(photosTypes.GET_PHOTOS_BY_ID_REQUEST, onGetByIdphotos);
  yield takeLatest(photosTypes.POST_PHOTOS_REQUEST, onPostphotos);
  yield takeLatest(photosTypes.PUT_PHOTOS_REQUEST, onPutphotos);
  yield takeLatest(photosTypes.DELETE_PHOTOS_REQUEST, onDeletephotos);
}

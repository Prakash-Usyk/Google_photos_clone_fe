import { takeLatest, put, call } from "redux-saga/effects";
import photosAlbumMappingAlbumMapTypes from "./PhotosAlbumMappingTypes";
import {
  deletephotosAlbumMappingResponse,
  getphotosAlbumMappingByIdResponse,
  getphotosAlbumMappingListResponse,
  postphotosAlbumMappingResponse,
  putphotosAlbumMappingResponse,
} from "./PhotosAlbumMappingActions";
import { axiosDelete, axiosGet, axiosPost, axiosPut } from "../../utils/axios";
export function* onGetphotosAlbumMappingList({ payload }) {
  try {
    const { filter, quickFilter = "", keyword = "", count = "" } = payload;

    const sort = filter.sortBy.split("-");

    const url = `album-photo-map?page=${
      filter.page
    }&filter=${keyword}&role=${quickFilter}&sort_by=${
      sort[0] ? sort[0] : ""
    }&sort=${sort[1] ? sort[1] : ""}&count=${count}`;

    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getphotosAlbumMappingListResponse(response));
  } catch (error) {}
}

export function* onGetByIdphotosAlbumMapping({ id }) {
  try {
    const url = `album-photo-map/${id}`;
    const response = yield call(() => axiosGet(url).then((res) => res.data));
    yield put(getphotosAlbumMappingByIdResponse(response));
  } catch (error) {}
}

export function* onPostphotosAlbumMapping({ payload }) {
  try {
    const url = `album-photo-map`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = yield call(() =>
      axiosPost(url, payload, config).then((res) => res.data)
    );
    yield put(postphotosAlbumMappingResponse(response));
  } catch (error) {}
}

export function* onPutphotosAlbumMapping({ payload, id }) {
  try {
    const url = `album-photo-map/${id}`;
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = yield call(() =>
      axiosPut(url, payload, config).then((res) => res.data)
    );
    yield put(putphotosAlbumMappingResponse(response));
  } catch (error) {}
}

export function* onDeletephotosAlbumMapping({ id }) {
  try {
    const url = `album-photo-map/${id}`;

    const response = yield call(() => axiosDelete(url).then((res) => res.data));
    yield put(deletephotosAlbumMappingResponse(response));
  } catch (error) {}
}

export function* PhotosAlbumMappingWatcherSaga() {
  yield takeLatest(
    photosAlbumMappingAlbumMapTypes.GET_PHOTOSALBUM_MAPPING_LIST_REQUEST,
    onGetphotosAlbumMappingList
  );
  yield takeLatest(
    photosAlbumMappingAlbumMapTypes.GET_PHOTOSALBUM_MAPPING_BY_ID_REQUEST,
    onGetByIdphotosAlbumMapping
  );
  yield takeLatest(
    photosAlbumMappingAlbumMapTypes.POST_PHOTOSALBUM_MAPPING_REQUEST,
    onPostphotosAlbumMapping
  );
  yield takeLatest(
    photosAlbumMappingAlbumMapTypes.PUT_PHOTOSALBUM_MAPPING_REQUEST,
    onPutphotosAlbumMapping
  );
  yield takeLatest(
    photosAlbumMappingAlbumMapTypes.DELETE_PHOTOSALBUM_MAPPING_REQUEST,
    onDeletephotosAlbumMapping
  );
}

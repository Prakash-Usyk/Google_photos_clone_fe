import { all } from "redux-saga/effects";
import { PhotosWatcherSaga } from "./Photos/PhotosSaga";

export default function* RootSaga() {
  yield all([PhotosWatcherSaga()]);
}

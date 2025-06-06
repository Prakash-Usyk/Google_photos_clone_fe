import { all } from "redux-saga/effects";
import { PhotosWatcherSaga } from "./Photos/PhotosSaga";
import { AlbumsWatcherSaga } from "./Albums/AlbumsSaga";
import { PhotosAlbumMappingWatcherSaga } from "./PhotosAlbumMapping/PhotosAlbumMappingSaga";

export default function* RootSaga() {
  yield all([
    PhotosWatcherSaga(),
    AlbumsWatcherSaga(),
    PhotosAlbumMappingWatcherSaga(),
  ]);
}

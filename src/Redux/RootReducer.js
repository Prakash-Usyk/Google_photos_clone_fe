import { combineReducers } from "@reduxjs/toolkit";
import PhotosReducer from "./Photos/PhotosReducer";
import AlbumsReducer from "./Albums/AlbumsReducer";
import PhotosAlbumMappingReducer from "./PhotosAlbumMapping/PhotosAlbumMappingReducer";

const rootReducer = combineReducers({
  photos: PhotosReducer,
  albums: AlbumsReducer,
  photosAlbum: PhotosAlbumMappingReducer,
});

export default rootReducer;

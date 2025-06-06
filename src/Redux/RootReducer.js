import { combineReducers } from "@reduxjs/toolkit";
import PhotosReducer from "./Photos/PhotosReducer";
import AlbumsReducer from "./Albums/AlbumsReducer";
import PhotosAlbumMappingReducer from "./PhotosAlbumMapping/PhotosAlbumMappingReducer";
import SearchReducer from "./SearchComp/SearchReducer";

const rootReducer = combineReducers({
  photos: PhotosReducer,
  albums: AlbumsReducer,
  photosAlbum: PhotosAlbumMappingReducer,
  search: SearchReducer,
});

export default rootReducer;

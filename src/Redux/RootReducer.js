import { combineReducers } from "@reduxjs/toolkit";
import PhotosReducer from "./Photos/PhotosReducer";
import AlbumsReducer from "./Albums/AlbumsReducer";

const rootReducer = combineReducers({
  photos: PhotosReducer,
  albums: AlbumsReducer,
});

export default rootReducer;

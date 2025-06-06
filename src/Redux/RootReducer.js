import { combineReducers } from "@reduxjs/toolkit";
import PhotosReducer from "./Photos/PhotosReducer";

const rootReducer = combineReducers({
  photos: PhotosReducer,
});

export default rootReducer;

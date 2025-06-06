import photosTypes from "./PhotosActionTypes";

//----------------photos list GET--------------------
export const getphotosListRequest = (payload) => ({
  type: photosTypes.GET_PHOTOS_LIST_REQUEST,
  payload: payload,
});

export const getphotosListResponse = (payload) => ({
  type: photosTypes.GET_PHOTOS_LIST_RESPONSE,
  payload: payload,
});

export const getphotosByIdRequest = (id) => ({
  type: photosTypes.GET_PHOTOS_BY_ID_REQUEST,
  id: id,
});

export const getphotosByIdResponse = (payload) => ({
  type: photosTypes.GET_PHOTOS_BY_ID_RESPONSE,
  payload: payload,
});

export const getphotosByIdResponseClear = () => ({
  type: photosTypes.GET_PHOTOS_BY_ID_RESPONSE_CLEAR,
});
//----------------photos POST--------------------------
export const postphotosRequest = (payload) => ({
  type: photosTypes.POST_PHOTOS_REQUEST,
  payload: payload,
});

export const postphotosResponse = (payload) => ({
  type: photosTypes.POST_PHOTOS_RESPONSE,
  payload: payload,
});

export const postphotosResponseClear = () => ({
  type: photosTypes.POST_PHOTOS_RESPONSE_CLEAR,
});

//----------------photos PUT----------------------------
export const putphotosRequest = (payload, id) => ({
  type: photosTypes.PUT_PHOTOS_REQUEST,
  payload: payload,
  id: id,
});

export const putphotosResponse = (payload) => ({
  type: photosTypes.PUT_PHOTOS_RESPONSE,
  payload: payload,
});

export const putphotosResponseClear = () => ({
  type: photosTypes.PUT_PHOTOS_RESPONSE_CLEAR,
});

//--------------photos DELETE----------------------------
export const deletephotosRequest = (id) => ({
  type: photosTypes.DELETE_PHOTOS_REQUEST,
  id: id,
});

export const deletephotosResponse = (payload) => ({
  type: photosTypes.DELETE_PHOTOS_RESPONSE,
  payload: payload,
});

export const deletephotosResponseClear = () => ({
  type: photosTypes.DELETE_PHOTOS_RESPONSE_CLEAR,
});

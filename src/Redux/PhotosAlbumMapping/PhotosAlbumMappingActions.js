import photosAlbumMappingTypes from "./PhotosAlbumMappingTypes";

//----------------photosAlbumMapping list GET--------------------
export const getphotosAlbumMappingListRequest = (payload) => ({
  type: photosAlbumMappingTypes.GET_PHOTOSALBUM_MAPPING_LIST_REQUEST,
  payload: payload,
});

export const getphotosAlbumMappingListResponse = (payload) => ({
  type: photosAlbumMappingTypes.GET_PHOTOSALBUM_MAPPING_LIST_RESPONSE,
  payload: payload,
});

export const getphotosAlbumMappingByIdRequest = (id) => ({
  type: photosAlbumMappingTypes.GET_PHOTOSALBUM_MAPPING_BY_ID_REQUEST,
  id: id,
});

export const getphotosAlbumMappingByIdResponse = (payload) => ({
  type: photosAlbumMappingTypes.GET_PHOTOSALBUM_MAPPING_BY_ID_RESPONSE,
  payload: payload,
});

export const getphotosAlbumMappingByIdResponseClear = () => ({
  type: photosAlbumMappingTypes.GET_PHOTOSALBUM_MAPPING_BY_ID_RESPONSE_CLEAR,
});
//----------------photosAlbumMapping POST--------------------------
export const postphotosAlbumMappingRequest = (payload) => ({
  type: photosAlbumMappingTypes.POST_PHOTOSALBUM_MAPPING_REQUEST,
  payload: payload,
});

export const postphotosAlbumMappingResponse = (payload) => ({
  type: photosAlbumMappingTypes.POST_PHOTOSALBUM_MAPPING_RESPONSE,
  payload: payload,
});

export const postphotosAlbumMappingResponseClear = () => ({
  type: photosAlbumMappingTypes.POST_PHOTOSALBUM_MAPPING_RESPONSE_CLEAR,
});

//----------------photosAlbumMapping PUT----------------------------
export const putphotosAlbumMappingRequest = (payload, id) => ({
  type: photosAlbumMappingTypes.PUT_PHOTOSALBUM_MAPPING_REQUEST,
  payload: payload,
  id: id,
});

export const putphotosAlbumMappingResponse = (payload) => ({
  type: photosAlbumMappingTypes.PUT_PHOTOSALBUM_MAPPING_RESPONSE,
  payload: payload,
});

export const putphotosAlbumMappingResponseClear = () => ({
  type: photosAlbumMappingTypes.PUT_PHOTOSALBUM_MAPPING_RESPONSE_CLEAR,
});

//--------------photosAlbumMapping DELETE----------------------------
export const deletephotosAlbumMappingRequest = (id) => ({
  type: photosAlbumMappingTypes.DELETE_PHOTOSALBUM_MAPPING_REQUEST,
  id: id,
});

export const deletephotosAlbumMappingResponse = (payload) => ({
  type: photosAlbumMappingTypes.DELETE_PHOTOSALBUM_MAPPING_RESPONSE,
  payload: payload,
});

export const deletephotosAlbumMappingResponseClear = () => ({
  type: photosAlbumMappingTypes.DELETE_PHOTOSALBUM_MAPPING_RESPONSE_CLEAR,
});

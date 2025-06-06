import albumsTypes from "./AlbumsActionTypes";

//----------------albums list GET--------------------
export const getalbumsListRequest = (payload) => ({
  type: albumsTypes.GET_ALBUMS_LIST_REQUEST,
  payload: payload,
});

export const getalbumsListResponse = (payload) => ({
  type: albumsTypes.GET_ALBUMS_LIST_RESPONSE,
  payload: payload,
});

export const getalbumsByIdRequest = (id) => ({
  type: albumsTypes.GET_ALBUMS_BY_ID_REQUEST,
  id: id,
});

export const getalbumsByIdResponse = (payload) => ({
  type: albumsTypes.GET_ALBUMS_BY_ID_RESPONSE,
  payload: payload,
});

export const getalbumsByIdResponseClear = () => ({
  type: albumsTypes.GET_ALBUMS_BY_ID_RESPONSE_CLEAR,
});
//----------------albums POST--------------------------
export const postalbumsRequest = (payload) => ({
  type: albumsTypes.POST_ALBUMS_REQUEST,
  payload: payload,
});

export const postalbumsResponse = (payload) => ({
  type: albumsTypes.POST_ALBUMS_RESPONSE,
  payload: payload,
});

export const postalbumsResponseClear = () => ({
  type: albumsTypes.POST_ALBUMS_RESPONSE_CLEAR,
});

//----------------albums PUT----------------------------
export const putalbumsRequest = (payload, id) => ({
  type: albumsTypes.PUT_ALBUMS_REQUEST,
  payload: payload,
  id: id,
});

export const putalbumsResponse = (payload) => ({
  type: albumsTypes.PUT_ALBUMS_RESPONSE,
  payload: payload,
});

export const putalbumsResponseClear = () => ({
  type: albumsTypes.PUT_ALBUMS_RESPONSE_CLEAR,
});

//--------------albums DELETE----------------------------
export const deletealbumsRequest = (id) => ({
  type: albumsTypes.DELETE_ALBUMS_REQUEST,
  id: id,
});

export const deletealbumsResponse = (payload) => ({
  type: albumsTypes.DELETE_ALBUMS_RESPONSE,
  payload: payload,
});

export const deletealbumsResponseClear = () => ({
  type: albumsTypes.DELETE_ALBUMS_RESPONSE_CLEAR,
});

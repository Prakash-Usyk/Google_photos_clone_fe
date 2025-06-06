import albumsTypes from "./AlbumsActionTypes";

const initialState = {
  getalbumsLoading: false,
  getalbumsResponse: null,
  getalbumsByidLoading: false,
  getalbumsByidResponse: null,
  postalbumsLoading: false,
  postalbumsResponse: null,
  putalbumsLoading: false,
  putalbumsResponse: null,
  deletealbumsLoading: false,
  deletealbumsResponse: null,

  putUserLoading: false,
  putUserResponse: null,
};

const AlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case albumsTypes.GET_ALBUMS_LIST_REQUEST:
      return {
        ...state,
        getalbumsLoading: true,
      };
    case albumsTypes.GET_ALBUMS_LIST_RESPONSE:
      return {
        ...state,
        getalbumsLoading: false,
        getalbumsResponse: action.payload,
      };
    case albumsTypes.GET_ALBUMS_BY_ID_REQUEST:
      return {
        ...state,
        getalbumsByidLoading: true,
      };
    case albumsTypes.GET_ALBUMS_BY_ID_RESPONSE:
      return {
        ...state,
        getalbumsByidLoading: false,
        getalbumsByidResponse: action.payload,
      };
    case albumsTypes.GET_ALBUMS_BY_ID_RESPONSE_CLEAR:
      return {
        ...state,
        getalbumsByidResponse: null,
      };
    case albumsTypes.POST_ALBUMS_REQUEST:
      return {
        ...state,
        postalbumsLoading: true,
      };
    case albumsTypes.POST_ALBUMS_RESPONSE:
      return {
        ...state,
        postalbumsLoading: false,
        postalbumsResponse: action.payload,
      };
    case albumsTypes.POST_ALBUMS_RESPONSE_CLEAR:
      return {
        ...state,
        postalbumsResponse: null,
      };
    case albumsTypes.PUT_ALBUMS_REQUEST:
      return {
        ...state,
        putalbumsLoading: true,
      };
    case albumsTypes.PUT_ALBUMS_RESPONSE:
      return {
        ...state,
        putalbumsLoading: false,
        putalbumsResponse: action.payload,
      };
    case albumsTypes.PUT_ALBUMS_RESPONSE_CLEAR:
      return {
        ...state,
        putalbumsResponse: null,
      };
    case albumsTypes.DELETE_ALBUMS_REQUEST:
      return {
        ...state,
        deletealbumsLoading: true,
      };
    case albumsTypes.DELETE_ALBUMS_RESPONSE:
      return {
        ...state,
        deletealbumsLoading: false,
        deletealbumsResponse: action.payload,
      };
    case albumsTypes.DELETE_ALBUMS_RESPONSE_CLEAR:
      return {
        ...state,
        deletealbumsResponse: null,
      };

    default:
      return state;
  }
};

export default AlbumsReducer;

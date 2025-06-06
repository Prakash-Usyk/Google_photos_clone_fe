import photosTypes from "./PhotosActionTypes";

const initialState = {
  getphotosLoading: false,
  getphotosResponse: null,
  getphotosByidLoading: false,
  getphotosByidResponse: null,
  postphotosLoading: false,
  postphotosResponse: null,
  putphotosLoading: false,
  putphotosResponse: null,
  deletephotosLoading: false,
  deletephotosResponse: null,

  putUserLoading: false,
  putUserResponse: null,
};

const PhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case photosTypes.GET_PHOTOS_LIST_REQUEST:
      return {
        ...state,
        getphotosLoading: true,
      };
    case photosTypes.GET_PHOTOS_LIST_RESPONSE:
      return {
        ...state,
        getphotosLoading: false,
        getphotosResponse: action.payload,
      };
    case photosTypes.GET_PHOTOS_BY_ID_REQUEST:
      return {
        ...state,
        getphotosByidLoading: true,
      };
    case photosTypes.GET_PHOTOS_BY_ID_RESPONSE:
      return {
        ...state,
        getphotosByidLoading: false,
        getphotosByidResponse: action.payload,
      };
    case photosTypes.GET_PHOTOS_BY_ID_RESPONSE_CLEAR:
      return {
        ...state,
        getphotosByidResponse: null,
      };
    case photosTypes.POST_PHOTOS_REQUEST:
      return {
        ...state,
        postphotosLoading: true,
      };
    case photosTypes.POST_PHOTOS_RESPONSE:
      return {
        ...state,
        postphotosLoading: false,
        postphotosResponse: action.payload,
      };
    case photosTypes.POST_PHOTOS_RESPONSE_CLEAR:
      return {
        ...state,
        postphotosResponse: null,
      };
    case photosTypes.PUT_PHOTOS_REQUEST:
      return {
        ...state,
        putphotosLoading: true,
      };
    case photosTypes.PUT_PHOTOS_RESPONSE:
      return {
        ...state,
        putphotosLoading: false,
        putphotosResponse: action.payload,
      };
    case photosTypes.PUT_PHOTOS_RESPONSE_CLEAR:
      return {
        ...state,
        putphotosResponse: null,
      };
    case photosTypes.DELETE_PHOTOS_REQUEST:
      return {
        ...state,
        deletephotosLoading: true,
      };
    case photosTypes.DELETE_PHOTOS_RESPONSE:
      return {
        ...state,
        deletephotosLoading: false,
        deletephotosResponse: action.payload,
      };
    case photosTypes.DELETE_PHOTOS_RESPONSE_CLEAR:
      return {
        ...state,
        deletephotosResponse: null,
      };

    default:
      return state;
  }
};

export default PhotosReducer;

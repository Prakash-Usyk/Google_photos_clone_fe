import photosAlbumMapTypes from "./PhotosAlbumMappingTypes";

const initialState = {
  getphotosAlbumMapLoading: false,
  getphotosAlbumMapResponse: null,
  getphotosAlbumMapByidLoading: false,
  getphotosAlbumMapByidResponse: null,
  postphotosAlbumMapLoading: false,
  postphotosAlbumMapResponse: null,
  putphotosAlbumMapLoading: false,
  putphotosAlbumMapResponse: null,
  deletephotosAlbumMapLoading: false,
  deletephotosAlbumMapResponse: null,

  putUserLoading: false,
  putUserResponse: null,
};

const PhotosAlbumMappingReducer = (state = initialState, action) => {
  switch (action.type) {
    case photosAlbumMapTypes.GET_PHOTOSALBUM_MAPPING_LIST_REQUEST:
      return {
        ...state,
        getphotosAlbumMapLoading: true,
      };
    case photosAlbumMapTypes.GET_PHOTOSALBUM_MAPPING_LIST_RESPONSE:
      return {
        ...state,
        getphotosAlbumMapLoading: false,
        getphotosAlbumMapResponse: action.payload,
      };
    case photosAlbumMapTypes.GET_PHOTOSALBUM_MAPPING_BY_ID_REQUEST:
      return {
        ...state,
        getphotosAlbumMapByidLoading: true,
      };
    case photosAlbumMapTypes.GET_PHOTOSALBUM_MAPPING_BY_ID_RESPONSE:
      return {
        ...state,
        getphotosAlbumMapByidLoading: false,
        getphotosAlbumMapByidResponse: action.payload,
      };
    case photosAlbumMapTypes.GET_PHOTOSALBUM_MAPPING_BY_ID_RESPONSE_CLEAR:
      return {
        ...state,
        getphotosAlbumMapByidResponse: null,
      };
    case photosAlbumMapTypes.POST_PHOTOSALBUM_MAPPING_REQUEST:
      return {
        ...state,
        postphotosAlbumMapLoading: true,
      };
    case photosAlbumMapTypes.POST_PHOTOSALBUM_MAPPING_RESPONSE:
      return {
        ...state,
        postphotosAlbumMapLoading: false,
        postphotosAlbumMapResponse: action.payload,
      };
    case photosAlbumMapTypes.POST_PHOTOSALBUM_MAPPING_RESPONSE_CLEAR:
      return {
        ...state,
        postphotosAlbumMapResponse: null,
      };
    case photosAlbumMapTypes.PUT_PHOTOSALBUM_MAPPING_REQUEST:
      return {
        ...state,
        putphotosAlbumMapLoading: true,
      };
    case photosAlbumMapTypes.PUT_PHOTOSALBUM_MAPPING_RESPONSE:
      return {
        ...state,
        putphotosAlbumMapLoading: false,
        putphotosAlbumMapResponse: action.payload,
      };
    case photosAlbumMapTypes.PUT_PHOTOSALBUM_MAPPING_RESPONSE_CLEAR:
      return {
        ...state,
        putphotosAlbumMapResponse: null,
      };
    case photosAlbumMapTypes.DELETE_PHOTOSALBUM_MAPPING_REQUEST:
      return {
        ...state,
        deletephotosAlbumMapLoading: true,
      };
    case photosAlbumMapTypes.DELETE_PHOTOSALBUM_MAPPING_RESPONSE:
      return {
        ...state,
        deletephotosAlbumMapLoading: false,
        deletephotosAlbumMapResponse: action.payload,
      };
    case photosAlbumMapTypes.DELETE_PHOTOSALBUM_MAPPING_RESPONSE_CLEAR:
      return {
        ...state,
        deletephotosAlbumMapResponse: null,
      };

    default:
      return state;
  }
};

export default PhotosAlbumMappingReducer;

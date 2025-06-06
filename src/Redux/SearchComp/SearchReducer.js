import searchTypes from "./SearchActionTypes";

const initialState = {
  getsearchLoading: false,
  getsearchResponse: null,

  postsearchLoading: false,
  postsearchResponse: null,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.GET_SEARCH_LIST_REQUEST:
      return {
        ...state,
        getsearchLoading: true,
      };
    case searchTypes.GET_SEARCH_LIST_RESPONSE:
      return {
        ...state,
        getsearchLoading: false,
        getsearchResponse: action.payload,
      };

    case searchTypes.POST_SEARCH_REQUEST:
      return {
        ...state,
        postsearchLoading: true,
      };
    case searchTypes.POST_SEARCH_RESPONSE:
      return {
        ...state,
        postsearchLoading: false,
        postsearchResponse: action.payload,
      };
    case searchTypes.POST_SEARCH_RESPONSE_CLEAR:
      return {
        ...state,
        postsearchResponse: null,
      };

    default:
      return state;
  }
};

export default SearchReducer;

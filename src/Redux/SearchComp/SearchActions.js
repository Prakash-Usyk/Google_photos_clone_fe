import searchTypes from "./SearchActionTypes";

//----------------search list GET--------------------
export const getsearchListRequest = (payload) => ({
  type: searchTypes.GET_SEARCH_LIST_REQUEST,
  payload: payload,
});

export const getsearchListResponse = (payload) => ({
  type: searchTypes.GET_SEARCH_LIST_RESPONSE,
  payload: payload,
});

//----------------search POST--------------------------
export const postsearchRequest = (payload) => ({
  type: searchTypes.POST_SEARCH_REQUEST,
  payload: payload,
});

export const postsearchResponse = (payload) => ({
  type: searchTypes.POST_SEARCH_RESPONSE,
  payload: payload,
});

export const postsearchResponseClear = () => ({
  type: searchTypes.POST_SEARCH_RESPONSE_CLEAR,
});

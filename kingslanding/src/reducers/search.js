import { SEARCH_LAUNCH, UPDATE_SEARCH_RESULT } from "../actions/constants";

const initialState = {
  searchString: "",
  searchResult: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_LAUNCH:
      // console.log("SEARCH_LAUNCH");
      return {
        ...state,
        searchString: payload.searchString,
      };
    case UPDATE_SEARCH_RESULT:
      return {
        ...state,
        searchResult: payload.searchResult,
      };
    default:
      console.log("default");
      return state;
  }
}

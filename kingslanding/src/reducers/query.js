import { SEARCH_LAUNCH } from "../actions/constants";

const initialState = {
  searchString: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_LAUNCH:
      return {
        ...state,
        searchString: payload.searchString,
      };
    default:
      return state;
  }
}

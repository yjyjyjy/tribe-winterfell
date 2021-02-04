import { SEARCH_LAUNCH } from "../actions/constants";

const initialState = {
  queryString: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_LAUNCH:
      console.log("SEARCH_LAUNCH");
      return {
        ...state,
        queryString: payload.queryString,
      };
    default:
      console.log("default");
      return state;
  }
}

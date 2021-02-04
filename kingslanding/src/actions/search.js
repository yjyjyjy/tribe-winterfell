import axios from "axios";
import { SEARCH_LAUNCH, UPDATE_SEARCH_RESULT } from "./constants";

export const searchQuery = (searchFormData) => async (dispatch) => {
  // const { searchString } = searchFormData;
  try {
    dispatch({ type: SEARCH_LAUNCH, payload: searchFormData });
    const response = await axios.post("/api/search", searchFormData);
    if (response.status === 200 && response.data.length > 0) {
      const searchResult = response.data;
      dispatch({ type: UPDATE_SEARCH_RESULT, payload: { searchResult } });
    } else if (response.status === 200) {
      console.log("no result returned 🚧🚧🚧 NEED TO IMPROVE UX HERE");
    }
  } catch (err) {
    // TODO: ERROR HANDLEING 🚧🚧🚧
  }
};

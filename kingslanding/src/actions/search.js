import axios from "axios";
import { SEARCH_LAUNCH } from "./constants";

export const searchQuery = (searchFormData) => async (dispatch) => {
  // const { searchString } = searchFormData;
  try {
    dispatch({ type: SEARCH_LAUNCH, payload: searchFormData });
    const result = await axios.post("/api/search", searchFormData);
    console.log(result);
  } catch (err) {}
};

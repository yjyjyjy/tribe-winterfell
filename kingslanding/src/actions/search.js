import axios from "axios";
import { SEARCH_LAUNCH } from "./constants";

export const searchQuery = (searchFormData) => async (dispatch) => {
  // const { queryString } = searchFormData;
  // console.log(queryString);
  try {
    console.log("SEARCHING HERE:");

    dispatch({ type: SEARCH_LAUNCH, payload: searchFormData });
    const result = await axios.post("/api/query", searchFormData);
    console.log(result);
  } catch (err) {}
};

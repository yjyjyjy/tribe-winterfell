import axios from "axios";

export const searchQuery = async (searchFormData) => {
  // const { queryString } = searchFormData;
  // console.log(queryString);
  try {
    console.log("SEARCHING HERE:");
    console.log(searchFormData);
    const result = await axios.post("/api/query", searchFormData);
    console.log(result);
  } catch (err) {}
};

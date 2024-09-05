// import axios from "../../utils/axios";
// axios isn't installed yet
import { loadExample } from "../reducers/exampleSlice";
export { removeExample } from "../reducers/exampleSlice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    let allTheDetails = {
      detail: detail.data,
    };
    dispatch(loadTv(allTheDetails));
  } catch (error) {
    console.log("Error: ", error);
  }
};

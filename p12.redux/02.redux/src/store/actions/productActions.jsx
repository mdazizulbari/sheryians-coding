import axios from "axios";
import { getproducts } from "../reducers/productReducer";

export const asyncgetproducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
      // this is now a sincronous data
    );
    dispatch(getproducts(response.data));
    // taking the date to productReducer
  } catch (error) {
    console.log(error);
  }
};

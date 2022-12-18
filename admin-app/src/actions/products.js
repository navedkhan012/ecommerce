import * as actions from "../constants/index";
import axios from "axios";

export const createProduct = (form) => async (dispatch) => {
  dispatch({ type: actions.ADD_PRODUCT_REQUEST });

  try {
    const token = localStorage.getItem("token");
    const res = await axios.post("/api/product", form, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: actions.ADD_PRODUCT_SUCCESS,
      payload: {
        products: res.data.category,
      },
    });
  } catch (error) {
    dispatch({
      type: actions.ADD_PRODUCT_FAILS,
      payload: {
        error: error,
      },
    });
  }
};

export const getProduct = () => async (dispatch) => {
  dispatch({ type: actions.GET_PRODUCT_REQUEST });

  try {
    const res = await axios.get("/api/product/get");

    const {products} = res.data
    dispatch({
      type: actions.GET_PRODUCT_SUCCESS,
      payload: {
        products: products,
      },
    });
  } catch (error) {
    dispatch({
      type: actions.GET_PRODUCT_FAILS,
      payload: {
        error: error,
      },
    });
  }
};

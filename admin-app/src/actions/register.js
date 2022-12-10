import * as actions from "../constants/index";
import axios from "axios";

export const register = (registerData) => async (dispatch) => {
  dispatch({
    type: actions.REGISTER_REQUEST,
  });
  try {
    const res = await axios.post("/api/signup", registerData);
     const { user } = res.data;
    dispatch({
      type: actions.REGISTER_SUCCESS,
      payload: { user },
    });

  } catch (error) {
      console.log(error.message)
      dispatch({
        type: actions.REGISTER_FAILS,
        payload: { 
          error: error.message 
        },
      });
  }

};
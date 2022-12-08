import * as actions from "../constants/index";
import axios from "axios";

export const login = (logindata) => async (dispatch) => {
  dispatch({
    type: actions.LOGIN_REQUEST,
  });
  const res = await axios.post("/api/signin", logindata);
  const { token, user } = res.data;

  console.log("token", token, user);
  if (token) {
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
    localStorage.setItem("token",token);
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    dispatch({
      type: actions.LOGIN_FAILS,
      payload: { error: res.data.error },
    });
  }
};




export const isUserLoggedIn = (data) => async(dispatch) => {
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  if(token){
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: {
        token,
        user,
      },
    });
  }else{
    dispatch({
      type: actions.LOGIN_FAILS,
      payload: {
        authenticate:false,
        message: "user need auth"
      },
    });
  }
}

export const signoutuser = () => async (dispatch) => {
  dispatch({
    type: actions.LOGOUT_REQUEST
  })
  const token = localStorage.getItem('token')   
  console.log('token>>>>>>', token)
  try {
    const res = await axios(`/api/signout`, {
      method: 'POST',
      headers: {
        authorization: token
      },
    }) 
  localStorage.clear();
    dispatch({
      type: actions.LOGOUT_SUCCESS,
      payload: {
        message: res.data
      }
    })
  } catch (error) {
    dispatch({
      type: actions.LOGOUT_FAILS,
      payload: {
        payload: { error: error },
      }
    })
  }
  
}
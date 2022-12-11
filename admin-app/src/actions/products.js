import * as actions from "../constants/index";
import axios from "axios";

export const createProduct = (form) => async(dispatch) =>{

  dispatch({ type: actions.ADD_PRODUCT_REQUEST })

  try {
    const token = localStorage.getItem('token')  
    const res = await axios.post('/api/product', form, {
      method: 'POST',
      headers: {
        authorization: token
      },
    })
    console.log('resresres>>>>>>>', res);
  // dispatch({
  //   type: actions.ADD_PRODUCT_SUCCESS,
  //   payload:{ 
  //     products: res.data.category
  //   }
  // })
  } catch (error) {
    dispatch({
      type: actions.ADD_PRODUCT_FAILS,
      payload:{ 
        error: error
      }
    })
  }

}
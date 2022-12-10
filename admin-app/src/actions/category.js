import * as actions from "../constants/index";
import axios from "axios";

export const getCategories = () => async(dispatch) => {
  dispatch({
    type: actions.CATEGORY_REQUEST
  })

  try {
    const res = await axios.get('http://localhost:2000/api/category/get')

  dispatch({
    type: actions.CATEGORY_SUCCESS,
    payload:{ 
      categories: res.data
    }
  })
  } catch (error) {
    dispatch({
      type: actions.CATEGORY_FAILS,
      payload:{ 
        error: error
      }
    })
  }
}


export const addCategory = (form) => async(dispatch) => {
  dispatch({
    type: actions.ADD_CATEGORY_REQUEST
  })
  const token = localStorage.getItem('token')  
  const res = await axios.post('/api/category', form, {
    method: 'POST',
    headers: {
      authorization: token
    },
  })
  console.log('token', token)
  try {
    console.log('res.data post', res);
    dispatch({
      type: actions.ADD_CATEGORY_SUCCESS,
      payload:{ 
        category: res.data.category
      }
    })
    console.log('res.data post end');
  } catch (error) {
    dispatch({
      type: actions.ADD_CATEGORY_FAILS,
      payload:{ 
        category: res.data.category
      }
    })
  }
}
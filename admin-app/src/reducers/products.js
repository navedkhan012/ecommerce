import * as actions from "../constants/index";

const initState = {
  firstName: '', 
    lastName: '', 
    email: '', 
    password: '',
    loading: false,
    error: ''
};


export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actions.REGISTER_SUCCESS:
      return {
        user: action.payload.user,
        loading: false
      }
    case actions.REGISTER_FAILS:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    default:
      return state
  }

}

export const getProductReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actions.GET_PRODUCT_SUCCESS:
      return {
        products: action.payload.products,
        loading: false
      }
    case actions.GET_PRODUCT_FAILS:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    default:
      return state
  }

}




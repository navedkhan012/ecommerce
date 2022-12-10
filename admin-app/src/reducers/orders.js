import * as actions from "../constants/index";

const initState = {
  firstName: '', 
    lastName: '', 
    email: '', 
    password: '',
    loading: false,
    error: ''
};


export const ordersReducer = (state = initState, action) => {
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


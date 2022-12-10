import * as actions from "../constants/index";

const initState = {
  categories:[],
  loading:false
}


export const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actions.CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
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


import * as actions from "../constants/index";

const initState = {
  categories:[],
  loading:false
}


export const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actions.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
        loading: false
      }

    case actions.ADD_CATEGORY_FAILS:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
  
    default:
      return state
  }
}


import { BAGUETEST_CATEGORY_LIST_FAIL, BAGUETEST_CATEGORY_LIST_REQUEST, BAGUETEST_CATEGORY_LIST_SUCCESS, BAGUETEST_CREATE_FAIL, BAGUETEST_CREATE_REQUEST, BAGUETEST_CREATE_RESET, BAGUETEST_CREATE_SUCCESS, BAGUETEST_DELETE_FAIL, BAGUETEST_DELETE_REQUEST, BAGUETEST_DELETE_RESET, BAGUETEST_DELETE_SUCCESS, BAGUETEST_DETAILS_FAIL, BAGUETEST_DETAILS_REQUEST, BAGUETEST_DETAILS_SUCCESS, BAGUETEST_LISTE_FAIL, BAGUETEST_LISTE_REQUEST, BAGUETEST_LISTE_SUCCESS, BAGUETEST_REVIEW_CREATE_FAIL, BAGUETEST_REVIEW_CREATE_REQUEST, BAGUETEST_REVIEW_CREATE_RESET, BAGUETEST_REVIEW_CREATE_SUCCESS, BAGUETEST_UPDATE_FAIL, BAGUETEST_UPDATE_REQUEST, BAGUETEST_UPDATE_RESET, BAGUETEST_UPDATE_SUCCESS } from "../constants/baguetestconstants";

export const baguetestListReducer = (state ={loading:true ,baguestest:[]} 
  ,action 
  )=>{
    switch(action.type){
        case BAGUETEST_LISTE_REQUEST:
            return{loading: true};
        case BAGUETEST_LISTE_SUCCESS:
            return{loading: false,baguestest:action.payload};
        case BAGUETEST_LISTE_FAIL:
            return{loading:false,error:action.payload };  
            default:
                return state;
    }
};
export const baguetestDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case BAGUETEST_DETAILS_REQUEST:
        return { loading: true };
      case BAGUETEST_DETAILS_SUCCESS:
        return { loading: false, baguetest: action.payload };
      case BAGUETEST_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const baguetestCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case BAGUETEST_CREATE_REQUEST:
        return { loading: true };
      case BAGUETEST_CREATE_SUCCESS:
        return { loading: false, success: true, baguetest: action.payload };
      case BAGUETEST_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case BAGUETEST_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const baguetestUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case BAGUETEST_UPDATE_REQUEST:
        return { loading: true };
      case BAGUETEST_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case BAGUETEST_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case BAGUETEST_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const baguetestDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case BAGUETEST_DELETE_REQUEST:
        return { loading: true };
      case BAGUETEST_DELETE_SUCCESS:
        return { loading: false, success: true };
      case BAGUETEST_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case BAGUETEST_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const baguetestCategorieListReducer = (
    state = { loading: true, baguestest: [] },
    action
    ) => {
      switch (action.type) {
        case BAGUETEST_CATEGORY_LIST_REQUEST:
          return { loading: true };
        case BAGUETEST_CATEGORY_LIST_SUCCESS:
          return { loading: false, categories: action.payload };
        case BAGUETEST_CATEGORY_LIST_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    
    };
    export const baguetestReviewCreateReducer = (state = {}, action) => {
      switch (action.type) {
        case BAGUETEST_REVIEW_CREATE_REQUEST:
          return { loading: true };
        case BAGUETEST_REVIEW_CREATE_SUCCESS:
          return { loading: false, success: true, review: action.payload };
        case BAGUETEST_REVIEW_CREATE_FAIL:
          return { loading: false, error: action.payload };
        case BAGUETEST_REVIEW_CREATE_RESET:
          return {};
        default:
          return state;
      }
    };
import { DIAMANTS_SHAPE_LIST_FAIL, DIAMANTS_SHAPE_LIST_REQUEST, DIAMANTS_SHAPE_LIST_SUCCESS, DIAMANT_CREATE_FAIL, DIAMANT_CREATE_REQUEST, DIAMANT_CREATE_RESET, DIAMANT_CREATE_SUCCESS, DIAMANT_DELETE_FAIL, DIAMANT_DELETE_REQUEST, DIAMANT_DELETE_RESET, DIAMANT_DELETE_SUCCESS, DIAMANT_DETAILS_FAIL, DIAMANT_DETAILS_REQUEST, DIAMANT_DETAILS_SUCCESS, DIAMANT_LISTE_FAIL, DIAMANT_LISTE_REQUEST, DIAMANT_LISTE_SUCCESS, DIAMANT_UPDATE_FAIL, DIAMANT_UPDATE_REQUEST, DIAMANT_UPDATE_RESET, DIAMANT_UPDATE_SUCCESS } from "../constants/diamantconstants ";


export const diamantListReducer = (state ={loading:true ,diamants:[]} 
  ,action 
  )=>{
    switch(action.type){
        case DIAMANT_LISTE_REQUEST:
            return{loading: true};
        case DIAMANT_LISTE_SUCCESS:
            return{loading: false,diamants:action.payload};
        case DIAMANT_LISTE_FAIL:
            return{loading:false,error:action.payload };  
            default:
                return state;
    }
};
export const diamantDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case DIAMANT_DETAILS_REQUEST:
        return { loading: true };
      case DIAMANT_DETAILS_SUCCESS:
        return { loading: false, diamant: action.payload };
      case DIAMANT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const diamantCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case DIAMANT_CREATE_REQUEST:
        return { loading: true };
      case DIAMANT_CREATE_SUCCESS:
        return { loading: false, success: true, diamant: action.payload };
      case DIAMANT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case DIAMANT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const diamantUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case DIAMANT_UPDATE_REQUEST:
        return { loading: true };
      case DIAMANT_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case DIAMANT_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case DIAMANT_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const diamantDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DIAMANT_DELETE_REQUEST:
        return { loading: true };
      case DIAMANT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case DIAMANT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case DIAMANT_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const DiamantShapeListReducer = (
    state = { loading: true, diamants: [] },
    action
  ) => {
    switch (action.type) {
      case DIAMANTS_SHAPE_LIST_REQUEST:
        return { loading: true };
      case  DIAMANTS_SHAPE_LIST_SUCCESS:
        return { loading: false, shapes: action.payload };
      case  DIAMANTS_SHAPE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
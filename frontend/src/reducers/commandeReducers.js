import { COMMANDE_CREATE_FAIL, COMMANDE_CREATE_REQUEST, COMMANDE_CREATE_RESET, COMMANDE_CREATE_SUCCESS, COMMANDE_DELETE_FAIL, COMMANDE_DELETE_REQUEST, COMMANDE_DELETE_RESET, COMMANDE_DELETE_SUCCESS, COMMANDE_DELIVER_FAIL, COMMANDE_DELIVER_REQUEST, COMMANDE_DELIVER_RESET, COMMANDE_DELIVER_SUCCESS, COMMANDE_DETAILS_FAIL, COMMANDE_DETAILS_REQUEST, COMMANDE_DETAILS_SUCCESS, COMMANDE_LIST_FAIL, COMMANDE_LIST_REQUEST, COMMANDE_LIST_SUCCESS, COMMANDE_MINE_LIST_FAIL, COMMANDE_MINE_LIST_REQUEST, COMMANDE_MINE_LIST_SUCCESS } from "../constants/commandeconstants";
import { ORDER_SUMMARY_FAIL, ORDER_SUMMARY_REQUEST, ORDER_SUMMARY_SUCCESS } from "../constants/orderconstants";

  export const commandeCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case COMMANDE_CREATE_REQUEST:
        return { loading: true };
      case COMMANDE_CREATE_SUCCESS:
        return { loading: false, success: true, commande: action.payload };
      case COMMANDE_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case COMMANDE_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const commandeDetailsReducer = (
    state = { loading: true, commande: {} },
    action
  ) => {
    switch (action.type) {
      case  COMMANDE_DETAILS_REQUEST:
        return { loading: true };
      case  COMMANDE_DETAILS_SUCCESS:
        return { loading: false, commande: action.payload };
      case  COMMANDE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const commandeMineListReducer = (state = { commandes: [] }, action) => {
    switch (action.type) {
      case COMMANDE_MINE_LIST_REQUEST:
        return { loading: true };
      case COMMANDE_MINE_LIST_SUCCESS:
        return { loading: false, commandes: action.payload };
      case COMMANDE_MINE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const commandeListReducer = (state = { commandes: [] }, action) => {
    switch (action.type) {
      case COMMANDE_LIST_REQUEST:
        return { loading: true };
      case COMMANDE_LIST_SUCCESS:
        return { loading: false, commandes: action.payload };
      case COMMANDE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const commandeDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case COMMANDE_DELETE_REQUEST:
        return { loading: true };
      case COMMANDE_DELETE_SUCCESS:
        return { loading: false, success: true };
      case COMMANDE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case COMMANDE_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const commandeDeliverReducer = (state = {}, action) => {
    switch (action.type) {
      case COMMANDE_DELIVER_REQUEST:
        return { loading: true };
      case COMMANDE_DELIVER_SUCCESS     :
  return { loading: false, success: true };
      case COMMANDE_DELIVER_FAIL:
        return { loading: false, error: action.payload };
      case COMMANDE_DELIVER_RESET:
        return {};
      default:
        return state;
    }
  };
  export const commandeSummaryReducer = (
    state = { loading: true, summary: {} },
    action
  ) => {
    switch (action.type) {
      case ORDER_SUMMARY_REQUEST:
        return { loading: true };
      case ORDER_SUMMARY_SUCCESS:
        return { loading: false, summary: action.payload };
      case ORDER_SUMMARY_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
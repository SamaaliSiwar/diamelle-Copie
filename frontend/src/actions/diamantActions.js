import  axios from 'axios';
import { DIAMANT_CREATE_FAIL, DIAMANT_CREATE_REQUEST, DIAMANT_CREATE_SUCCESS, DIAMANT_DELETE_FAIL, DIAMANT_DELETE_REQUEST, DIAMANT_DELETE_SUCCESS, DIAMANT_DETAILS_FAIL, DIAMANT_DETAILS_REQUEST, DIAMANT_DETAILS_SUCCESS, DIAMANT_LISTE_FAIL, DIAMANT_LISTE_REQUEST, DIAMANT_LISTE_SUCCESS, DIAMANT_UPDATE_FAIL, DIAMANT_UPDATE_REQUEST, DIAMANT_UPDATE_SUCCESS } from '../constants/diamantconstants ';


   export const ListeDiamants = ({  
    
     }) => async (
    dispatch
  ) => {
    dispatch({
      type: DIAMANT_LISTE_REQUEST,
    });
    try {
      const { data } = await axios.get(
        `/api/diamants`
      );
      dispatch({ type: DIAMANT_LISTE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DIAMANT_LISTE_FAIL, payload: error.message });
    }
  };
  
  export const detailsDiamant = (diamantId) => async (dispatch) => {
  dispatch({ type: DIAMANT_DETAILS_REQUEST, payload: diamantId });
  try {
    const { data } = await axios.get(`/api/diamants/${diamantId}`);
    dispatch({ type: DIAMANT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DIAMANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createDiamant = () => async (dispatch, getState) => {
  dispatch({ type: DIAMANT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.post(
      '/api/diamants',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: DIAMANT_CREATE_SUCCESS,
      payload: data.diamant,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DIAMANT_CREATE_FAIL, payload: message });
  }
};
export const updatedDiamant = (diamant) => async (dispatch, getState) => {
  dispatch({ type: DIAMANT_UPDATE_REQUEST, payload: diamant });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.put(`/api/diamants/${diamant._id}`, diamant, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: DIAMANT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DIAMANT_UPDATE_FAIL, error: message });
  }
};
export const deleteDiamant = (diamantId) => async (dispatch, getState) => {
  dispatch({ type: DIAMANT_DELETE_REQUEST, payload: diamantId});
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await axios.delete(`/api/diamants/${diamantId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: DIAMANT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DIAMANT_DELETE_FAIL, payload: message });
  }
};

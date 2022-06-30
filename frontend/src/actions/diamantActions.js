import  axios from 'axios';
import { DIAMANTS_SHAPE_LIST_FAIL, DIAMANTS_SHAPE_LIST_REQUEST, DIAMANTS_SHAPE_LIST_SUCCESS, DIAMANT_CREATE_FAIL, DIAMANT_CREATE_REQUEST, DIAMANT_CREATE_SUCCESS, DIAMANT_DELETE_FAIL, DIAMANT_DELETE_REQUEST, DIAMANT_DELETE_SUCCESS, DIAMANT_DETAILS_FAIL, DIAMANT_DETAILS_REQUEST, DIAMANT_DETAILS_SUCCESS, DIAMANT_LISTE_FAIL, DIAMANT_LISTE_REQUEST, DIAMANT_LISTE_SUCCESS, DIAMANT_UPDATE_FAIL, DIAMANT_UPDATE_REQUEST, DIAMANT_UPDATE_SUCCESS } from '../constants/diamantconstants ';


export const ListeDiamants = ({  
  pageNumber = '',
  shape = '',
  cut = '',
  couleur = '',
  clarity = '',
  order = '',
  min='',
  max='',

}) => async (
dispatch
) => {
dispatch({
 type: DIAMANT_LISTE_REQUEST,
});
try {
 const { data } = await axios.get(
   `/api/diamants?pageNumber=${pageNumber}&shape=${shape}&min=${min}&max=${max}&cut=${cut}&couleur=${couleur}&clarity=${clarity}&order=${order}`
 );
 dispatch({ type: DIAMANT_LISTE_SUCCESS, payload: data });
} catch (error) {
 dispatch({ type: DIAMANT_LISTE_FAIL, payload: error.message });
}
};
  
export const listDiamantShape = () => async (dispatch) => {
  dispatch({
    type: DIAMANTS_SHAPE_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get(`/api/diamants/shapes`);
    dispatch({ type: DIAMANTS_SHAPE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DIAMANTS_SHAPE_LIST_FAIL, payload: error.message });
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

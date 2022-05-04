import  axios from 'axios';
import { BAGUETEST_CATEGORY_LIST_FAIL, BAGUETEST_CATEGORY_LIST_REQUEST, BAGUETEST_CATEGORY_LIST_SUCCESS, BAGUETEST_CREATE_FAIL, BAGUETEST_CREATE_REQUEST, BAGUETEST_CREATE_SUCCESS, BAGUETEST_DELETE_FAIL, BAGUETEST_DELETE_REQUEST, BAGUETEST_DELETE_SUCCESS, BAGUETEST_DETAILS_FAIL,
   BAGUETEST_DETAILS_REQUEST, BAGUETEST_DETAILS_SUCCESS, 
   BAGUETEST_LISTE_FAIL, BAGUETEST_LISTE_REQUEST, 
   BAGUETEST_LISTE_SUCCESS, 
   BAGUETEST_REVIEW_CREATE_FAIL, 
   BAGUETEST_REVIEW_CREATE_REQUEST, 
   BAGUETEST_REVIEW_CREATE_SUCCESS, 
   BAGUETEST_UPDATE_FAIL,
   BAGUETEST_UPDATE_REQUEST,
   BAGUETEST_UPDATE_SUCCESS} from "../constants/baguetestconstants";

   export const ListeBaguestest = ({  
     name = '',
     categorie = '',
     order = '',
      
     }) => async (
    dispatch
  ) => {
    dispatch({
      type: BAGUETEST_LISTE_REQUEST,
    });
    try {
      const { data } = await axios.get(
        `/api/baguestest?categorie=${categorie}&name=${name}&order=${order}`
      );
      dispatch({ type: BAGUETEST_LISTE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: BAGUETEST_LISTE_FAIL, payload: error.message });
    }
  };
  export const listBaguestestCategories = () => async (dispatch) => {
    dispatch({
      type: BAGUETEST_CATEGORY_LIST_REQUEST,
    });
    try {
      const { data } = await axios.get(`/api/baguestest/categories`);
      dispatch({ type: BAGUETEST_CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: BAGUETEST_CATEGORY_LIST_FAIL, payload: error.message });
    }
  };
  export const detailsBaguetest = (baguetestId) => async (dispatch) => {
  dispatch({ type: BAGUETEST_DETAILS_REQUEST, payload: baguetestId });
  try {
    const { data } = await axios.get(`/api/baguestest/${baguetestId}`);
    dispatch({ type: BAGUETEST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BAGUETEST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createBaguetest = () => async (dispatch, getState) => {
  dispatch({ type: BAGUETEST_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.post(
      '/api/baguestest',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: BAGUETEST_CREATE_SUCCESS,
      payload: data.baguetest,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BAGUETEST_CREATE_FAIL, payload: message });
  }
};
export const updatedBaguetest = (baguetest) => async (dispatch, getState) => {
  dispatch({ type: BAGUETEST_UPDATE_REQUEST, payload: baguetest });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.put(`/api/baguestest/${baguetest._id}`, baguetest, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: BAGUETEST_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BAGUETEST_UPDATE_FAIL, error: message });
  }
};
export const deleteBaguetest = (baguetestId) => async (dispatch, getState) => {
  dispatch({ type: BAGUETEST_DELETE_REQUEST, payload: baguetestId});
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    await axios.delete(`/api/baguestest/${baguetestId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: BAGUETEST_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BAGUETEST_DELETE_FAIL, payload: message });
  }
};
export const createReview = (baguetestId, review) => async (
  dispatch,
  getState
) => {
  dispatch({ type: BAGUETEST_REVIEW_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await axios.post(
      `/api/baguestest/${baguetestId}/reviews`,
      review,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: BAGUETEST_REVIEW_CREATE_SUCCESS,
      payload: data.review,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BAGUETEST_REVIEW_CREATE_FAIL, payload: message });
  }
};
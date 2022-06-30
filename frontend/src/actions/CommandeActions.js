import Axios from 'axios';
import { COMMANDE_CREATE_FAIL, COMMANDE_CREATE_REQUEST, COMMANDE_CREATE_SUCCESS, COMMANDE_DELETE_FAIL, COMMANDE_DELETE_REQUEST, COMMANDE_DELETE_SUCCESS, COMMANDE_DELIVER_FAIL, COMMANDE_DELIVER_REQUEST, COMMANDE_DELIVER_SUCCESS, COMMANDE_DETAILS_FAIL, COMMANDE_DETAILS_REQUEST, COMMANDE_DETAILS_SUCCESS, COMMANDE_LIST_FAIL, COMMANDE_LIST_REQUEST, COMMANDE_LIST_SUCCESS, COMMANDE_MINE_LIST_REQUEST, COMMANDE_MINE_LIST_SUCCESS, COMMANDE_PAY_FAIL, COMMANDE_PAY_REQUEST, COMMANDE_PAY_SUCCESS } from '../constants/commandeconstants';
import { ORDER_CREATE_FAIL, ORDER_MINE_LIST_FAIL, ORDER_SUMMARY_REQUEST, ORDER_SUMMARY_SUCCESS } from '../constants/orderconstants';
import { RECOMMANDATION__EMPTY } from '../constants/recommandationconstants';


export const createdCommande = (commande) => async (dispatch, getState) => {
  dispatch({ type: COMMANDE_CREATE_REQUEST, payload: commande});
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.post('/api/commandes', commande, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: COMMANDE_CREATE_SUCCESS, payload: data.commande });
    dispatch({ type: RECOMMANDATION__EMPTY });
    localStorage.removeItem('recommandationItems');
  } catch (error) {
    dispatch({
      type: COMMANDE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const detailsCommande = (commandeId) => async (dispatch, getState) => {
  dispatch({ type: COMMANDE_DETAILS_REQUEST, payload: commandeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get(`/api/commandes/${commandeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: COMMANDE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMANDE_DETAILS_FAIL, payload: message });
  }
};
export const listCommandeMine = () => async (dispatch, getState) => {
  dispatch({ type: COMMANDE_MINE_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get('/api/commandes/mine', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: COMMANDE_MINE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
  }
};
export const listCommandes = () => async (dispatch, getState) => {
  dispatch({ type: COMMANDE_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get('/api/commandes', {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    console.log(data);
    dispatch({ type: COMMANDE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMANDE_LIST_FAIL, payload: message });
  }
};
export const deleteCommande = (commandeId) => async (dispatch, getState) => {
  dispatch({ type: COMMANDE_DELETE_REQUEST, payload: commandeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/commandes/${commandeId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: COMMANDE_DELETE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMANDE_DELETE_FAIL, payload: message });
  }
};
export const payCommande = (commande, paymentResult) => async (
  dispatch,
  getState
) => {
  dispatch({ type: COMMANDE_PAY_REQUEST, payload: { commande, paymentResult } });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.put(`/api/commandes/${commande._id}/pay`, paymentResult, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: COMMANDE_PAY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMANDE_PAY_FAIL, payload: message });
  }
};
export const deliverCommande = (commandeId) => async (dispatch, getState) => {
  dispatch({ type: COMMANDE_DELIVER_REQUEST, payload: commandeId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.put(
      `/api/commandes/${commandeId}/deliver`,
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({ type: COMMANDE_DELIVER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COMMANDE_DELIVER_FAIL, payload: message });
  }
};
export const summaryCommande = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_SUMMARY_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.get('/api/commandes/summary', {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ORDER_SUMMARY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
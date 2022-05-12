import Axios from 'axios';
import { RECOMMANDATION_ADD_ITEM, RECOMMANDATION_REMOVE_ITEM, RECOMMANDATION__ADD_ITEM_FAIL, RECOMMANDATION__SAVE_PAYMENT_METHOD, RECOMMANDATION__SAVE_SHIPPING_ADDRESS } from '../constants/recommandationconstants';

export const addToRecommandation = (diamantId,or,support,supportprice,taille) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/diamants/${diamantId}`);
  const {
    recommandation: { recommandationItems },
  } = getState();
  if (recommandationItems.length = 0 ) {
    dispatch({
      type: RECOMMANDATION__ADD_ITEM_FAIL,
      payload: `Can't Add To Recommandation`,
    });
  } else {
    dispatch({
      type: RECOMMANDATION_ADD_ITEM,
      payload: {
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        diamant: data._id,
        carat:data.masse,
        cut:data.cut,
        shape:data.shape,
        clarity:data.clarity,
        couleur:data.couleur,
        supportprice,
        or,
        support,
        taille,
      },
    });
    localStorage.setItem(
      'recommandationItems',
      JSON.stringify(getState().recommandation.recommandationItems)
    );
  }
};

//updatelocalstroage
export const removeFromrecommandation = (diamantId) => (dispatch, getState) => {
  dispatch({ type: RECOMMANDATION_REMOVE_ITEM, payload: diamantId });
  
  localStorage.setItem('recommandationItems', JSON.stringify(getState().recommandation.recommandationItems));
};
export const saveLaivraisonAddress = (data) => (dispatch) => {
  dispatch({ type: RECOMMANDATION__SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('laivraisonAddress', JSON.stringify(data));
};
export const savePaymentRecommandation = (data) => (dispatch) => {
  dispatch({ type: RECOMMANDATION__SAVE_PAYMENT_METHOD, payload: data });
};
 
import { ORDER_SUMMARY_FAIL, ORDER_SUMMARY_REQUEST, ORDER_SUMMARY_SUCCESS } from "../constants/orderconstants";
import { RECOMMANDATION_ADD_ITEM, RECOMMANDATION_REMOVE_ITEM, RECOMMANDATION__EMPTY, RECOMMANDATION__SAVE_PAYMENT_METHOD, RECOMMANDATION__SAVE_SHIPPING_ADDRESS } from "../constants/recommandationconstants";


  export const recommandationReducer = (state = { recommandationItems: [] }, action) => {
    switch (action.type) {
      case RECOMMANDATION_ADD_ITEM:
        const item = action.payload;
        const existItem = state.recommandationItems.find((x) => x.recommandation === item.diamant);
        if (existItem) {
          return {
            ...state,
            error: '',
            recommandationItems: state.recommandationItems.map((x) =>
              x.diamant === existItem.diamant ? item : x
            ),
          };
        } else {
          return { ...state, error: '', recommandationItems: [...state.recommandationItems, item] };
        }
      case RECOMMANDATION_REMOVE_ITEM:
        return {
          ...state,
          error: '',
          recommandationItems: state.recommandationItems.filter((x) => x.diamant !== action.payload),
        };
      case RECOMMANDATION__SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
      case RECOMMANDATION__SAVE_PAYMENT_METHOD:
        return { ...state, paymentMethod: action.payload };
      case RECOMMANDATION__EMPTY:
        return{...state,recommandationItems:[] };
    default:
      return state;
  }
};

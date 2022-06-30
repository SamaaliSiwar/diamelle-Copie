import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {baguetestListReducer,  baguetestDetailsReducer, baguetestCreateReducer, baguetestUpdateReducer, baguetestDeleteReducer, baguetestCategorieListReducer, baguetestReviewCreateReducer} from './reducers/baguetestReducers';
import {  cartReducer } from "./reducers/cartReducers";
import { diamantCreateReducer, diamantDeleteReducer, diamantDetailsReducer, diamantListReducer, DiamantShapeListReducer, diamantUpdateReducer } from "./reducers/diamantReducers";
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderSummaryReducer } from "./reducers/orderReducers";
import { commandeCreateReducer, commandeDeleteReducer, commandeDeliverReducer, commandeDetailsReducer, commandeListReducer, commandeMineListReducer, commandeSummaryReducer } from "./reducers/commandeReducers";
import { recommandationReducer } from "./reducers/recommandationReducers";
import { userDeleteReducer, userDetailsReducer, userForgotPasswordReducer, userListReducer, userRegisterReducer, userResetPasswordReducer, userSigninReducer, userUpdatePasswordReducer, userUpdateProfileReducer, userUpdateReducer } from "./reducers/userReducers";

const initialState = {
    userSignin:{
        //il faut le initialiser a null sinon il vas étre afficher coonnecter meme si !userInfo
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
   user:{
    userId: localStorage.getItem('userId')
    ? JSON.parse(localStorage.getItem('userId'))
    : null,
   }
    ,
    cart: {
        cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
          shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
      paymentMethod: 'CartePostal',

      },
      recommandation: {
        recommandationItems: localStorage.getItem('recommandationItems')
          ? JSON.parse(localStorage.getItem('recommandationItems'))
          : [],
          laivraisonAddress: localStorage.getItem('laivraisonAddress')
      ? JSON.parse(localStorage.getItem('laivraisonAddress'))
      : {},
      paymentRecommandation: 'CartePostal',

      },
  };
const Reducer = combineReducers({
    baguetestList:baguetestListReducer,
    baguetestDetails:baguetestDetailsReducer,
    diamantList:diamantListReducer,

    diamantDetails:diamantDetailsReducer,
    
    cart:cartReducer,
    recommandation:recommandationReducer,

    userSignin:userSigninReducer,

    userRegister: userRegisterReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword: userResetPasswordReducer,
    userUpdatePassword: userUpdatePasswordReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    commandeCreate: commandeCreateReducer,
    commandeDetails: commandeDetailsReducer,
    orderMineList: orderMineListReducer,
    commandeMineList: commandeMineListReducer,

    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    baguetestCreate: baguetestCreateReducer,
    baguetestUpdate: baguetestUpdateReducer,
    baguetestDelete: baguetestDeleteReducer,
    diamantCreate: diamantCreateReducer,
    diamantUpdate: diamantUpdateReducer,
    diamantDelete: diamantDeleteReducer,
    orderList: orderListReducer,
    commandeList: commandeListReducer,

    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    orderSummary: orderSummaryReducer,
    commandeDelete: commandeDeleteReducer,
    commandeDeliver: commandeDeliverReducer,
    commandeSummary: commandeSummaryReducer,

    userList: userListReducer,
    userDelete: userDeleteReducer,
    baguetestCategorieList: baguetestCategorieListReducer,
    baguetestReviewCreate: baguetestReviewCreateReducer,
    diamantShapeList:DiamantShapeListReducer,


});

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    Reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));
export default store;
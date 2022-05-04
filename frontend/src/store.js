import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {baguetestListReducer,  baguetestDetailsReducer, baguetestCreateReducer, baguetestUpdateReducer, baguetestDeleteReducer, baguetestCategorieListReducer, baguetestReviewCreateReducer} from './reducers/baguetestReducers';
import {  cartReducer } from "./reducers/cartReducers";
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer } from "./reducers/orderReducers";
import { userDeleteReducer, userDetailsReducer, userListReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer, userUpdateReducer } from "./reducers/userReducers";

const initialState = {
    userSignin:{
        //il faut le initialiser a null sinon il vas étre afficher coonnecter meme si !userInfo
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    
    cart: {
        cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
          shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
      paymentMethod: 'CartePostal',

      },
  };
const Reducer = combineReducers({
    baguetestList:baguetestListReducer,
    baguetestDetails:baguetestDetailsReducer,
    cart:cartReducer,
    userSignin:userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    baguetestCreate: baguetestCreateReducer,
    baguetestUpdate: baguetestUpdateReducer,
    baguetestDelete: baguetestDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    baguetestCategorieList: baguetestCategorieListReducer,
    baguetestReviewCreate: baguetestReviewCreateReducer,









});

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    Reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));
export default store;
import React, { useEffect } from 'react';
import{BrowserRouter,  Route, Routes, useNavigate} from 'react-router-dom';
import AdminRoute from './componnent/AdminRoute';
import Navbar from './componnent/Navbar';
import PrivateRoute from './componnent/PrivateRoute';
import AboutScreen from './screens/AboutScreen';
import BaguetestScreen from './screens/BaguetestScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProfileScreen from './screens/ProfilScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import BaguetestListScreen from './screens/BaguetestListScreen';
import BaguetestEditScreen from './screens/BaguetestEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SearchScreen from './screens/SearchScreen';
import SupportScreen from './screens/SupportScreen';
import { useSelector } from 'react-redux';
import ChatBox from './componnent/ChatBox';
import alanBtn from '@alan-ai/alan-sdk-web';
import Support from './screens/SupportScreen';

function App () {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
 
  return(
    <BrowserRouter>
    <div class="grid-container">
     
      
    <header >
    <Navbar></Navbar>
               </header>

    
        <main>
        <Routes>
        <Route path="/cart" element={<CartScreen/>}></Route>
  <Route path="/cart/:id" element={<CartScreen/>}></Route>
        <Route path="/" element={ <HomeScreen/> } exact></Route>
        <Route path="/about" element={<AboutScreen/>}></Route>
        <Route path="/baguetest/:id" element={<BaguetestScreen/>} exact></Route>
        <Route
            path="/baguetest/:id/edit"
            element={<BaguetestEditScreen/>}
            exact
          ></Route>
       <Route path='/signin' element={<SigninScreen/>} exact></Route> 
       <Route path='/register' element={<RegisterScreen/>}></Route> 
       <Route path="/shipping" 
       element={
       <PrivateRoute>

       <ShippingAddressScreen/>
       </PrivateRoute>}

       />
       <Route path="/payment" element={
         <PrivateRoute>
       <PaymentMethodScreen/>
       </PrivateRoute>}

       />
       <Route path="/placeorder" element={
         <PrivateRoute>
       <PlaceOrderScreen/></PrivateRoute>}

       />
       <Route path="/order/:id" element={
         <PrivateRoute>
       <OrderScreen/>
       </PrivateRoute>}/>
       <Route path="/orderhistory" element={
         <PrivateRoute>
       <OrderHistoryScreen/>
       </PrivateRoute>}/>
        
        <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfileScreen />
                </PrivateRoute>
              }
            />
             <Route
              path="/baguetestlist"
              element={
                <AdminRoute>
              <BaguetestListScreen/>
                </AdminRoute>
              }
            />
            <Route
              path="/orderlist"
              element={
                <AdminRoute>
              <OrderListScreen/>
                </AdminRoute>
              }
            />
              <Route
              path="/userlist"
              element={
                <AdminRoute>
          <UserListScreen/>
                </AdminRoute>
              }
            />
              <Route
              path="/user/:id/edit"
              element={
                <AdminRoute>
          <UserEditScreen/>
                </AdminRoute>
              }
            />
                <Route path="/search/name" element={<SearchScreen />} exact></Route>
             <Route
            path="/search/name/:name"
            element={<SearchScreen/>}
            exact
          ></Route>
          <Route
            path="/search/categorie/:categorie"
            element={<SearchScreen/>}
            exact
          ></Route>
          <Route
            path="/search/categorie/:categorie/name/:name"
            element={<SearchScreen/>}
            exact
          ></Route>
          <Route
            path="/search/categorie/:categorie/name/:name/order/:order"
            element={<SearchScreen/>}
            exact
          ></Route>

           
            <Route
              path="/support"
              element={
                <AdminRoute>
          <SupportScreen/>
                </AdminRoute>
              }
            />
             </Routes>
     
        </main>
        <Support />
        <footer className="row center">
          
          <div>All right reserved</div>{' '}
        </footer>
      
      </div>
      </BrowserRouter>
      );
   }
export default App;
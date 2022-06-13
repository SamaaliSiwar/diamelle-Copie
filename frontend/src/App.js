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

import Support from './screens/SupportScreen';
import DiamantScreen from './screens/DiamantScreen';
import RecommandationScreen from './screens/RecommandationScreen';
import LaivraisonAddressScreen from './screens/LaivraisonAddressScreen';
import PaymentRecommandationScreen from './screens/PaymentRecommandationScreen';
import PlaceRecommandationScreen from './screens/PlaceCommandeScreen';
import CommandeScreen from './screens/CommandeScreen';
import AlldiamantScreen from './screens/AlldiamantScreen';
import CommandeListScreen from './screens/CommandeListScreen';
import CommandeHistoryScreen from './screens/CommandeHistoryScreen';
import DiamantEditScreen from './screens/DiamantEditScreen';
import DiamantListScreen from './screens/DiamantListScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import SendEmailScreen from './screens/SendEmailScreen';
import Footer from './componnent/Footer';
import { black } from 'color-name';

function App () {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
 
  return(
    <BrowserRouter>
    <div class="grid-container">
     
   
        <main>
        <Routes>
        <Route path="/cart" element={<CartScreen/>}></Route>
  <Route path="/cart/:id" element={<CartScreen/>}></Route>
  <Route path="/recommandation" element={<RecommandationScreen/>}></Route>
  <Route path="/recommandation/:id" element={<RecommandationScreen/>}></Route>
        <Route path="/" element={ <HomeScreen/> } exact></Route>
        <Route path="/diamants" element={ <AlldiamantScreen/> } exact></Route>

        <Route path="/about" element={<AboutScreen/>}></Route>
        <Route path="/baguetest/:id" element={<BaguetestScreen/>} exact></Route>
        <Route path="/diamant/:id" element={<DiamantScreen/>} exact></Route>

        <Route
            path="/baguetest/:id/edit"
            element={<BaguetestEditScreen/>}
            exact
          ></Route>
            <Route
            path="/diamant/:id/edit"
            element={<DiamantEditScreen/>}
            exact
          ></Route>
          <Route
            path="/sendemail"
            element={<SendEmailScreen/>}
            exact
          ></Route>
            <Route
            path="/forgot/:userId/:resetString"
            element={<ResetPasswordScreen/>}
            exact
          ></Route>
                 <Route path='/signin' element={<SigninScreen/>} exact ></Route> 

       <Route path='/register' element={<RegisterScreen/>}></Route> 
       <Route path="/shipping" 
       element={
       <PrivateRoute>

       <ShippingAddressScreen/>
       </PrivateRoute>}

       />
       <Route path="/laivraison" 
       element={
       <PrivateRoute>

       <LaivraisonAddressScreen/>
       </PrivateRoute>}

       />
       <Route path="/payment" element={
         <PrivateRoute>
       <PaymentMethodScreen/>
       </PrivateRoute>}
       />
       <Route path="/paymentrecommandation" element={
         <PrivateRoute>
       <PaymentRecommandationScreen/>
       </PrivateRoute>}

       />
       <Route path="/placeorder" element={
         <PrivateRoute>
       <PlaceOrderScreen/></PrivateRoute>}

       />
        <Route path="/placerecommandation" element={
         <PrivateRoute>
       <PlaceRecommandationScreen/></PrivateRoute>}

       />
       <Route path="/order/:id" element={
         <PrivateRoute>
       <OrderScreen/>
       </PrivateRoute>}/>
       <Route path="/commande/:id" element={
         <PrivateRoute>
       <CommandeScreen/>
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
            <Route path='/forgot' element={<ForgotPasswordScreen/>}></Route>

            <Route
              path="/recommandationhistory"
              element={
                <PrivateRoute>
                  <CommandeHistoryScreen />
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
              path="/diamantlist"
              element={
                <AdminRoute>
              <DiamantListScreen/>
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
            path="/seachdiamant/shape/:shape"
            element={<AlldiamantScreen/>}
            exact
          ></Route>
            <Route
            path="/searchdiamant/shape/:shape/order/:order"
            element={<AlldiamantScreen/>}
            exact
          ></Route>
           <Route
              path="/searchdiamant/shape/:shape/min/:min/max/:max/order/:order/pageNumber/:pageNumber"
              element={<AlldiamantScreen />}
              exact
            ></Route>
          <Route
            path="/diamants"
            element={<AlldiamantScreen/>}
            exact
          ></Route>
          <Route
            path="/seachdiamant/shape/:shape/order/:order"
            element={<AlldiamantScreen/>}
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
            <Route
              path="/recommandationliste"
              element={
                <AdminRoute>
          <CommandeListScreen/>
                </AdminRoute>
              }
            />
             </Routes>
             <Support />
        </main>
       
        <Footer className="row center" style="background-color: black;">
          
          <div>All right reserved</div>{' '}
        </Footer>
      
      </div>
      </BrowserRouter>
      );
   }
export default App;
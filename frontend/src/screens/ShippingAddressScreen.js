import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../componnent/CheckoutSteps';
import NavBar from '../componnent/Navbar';

export default function ShippingAddressScreen(props) {
    const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;
  
  
  const [fullName, setFullName] = useState(shippingAddress.fullName  || '');
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [phoneNumber, setphoneNumber] = useState(shippingAddress.phoneNumber);
  if (!userInfo) {
    navigate('/signin');
  }
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode,phoneNumber })
    );
    navigate('/payment');
  };
  return (
    <div className="aboutmain">
     <header className='head' >
       <NavBar/>
               </header>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
      <div class="section-title-2 text-center mb-60">
              <h2 className="ob dorey espaci">Address de laivraison</h2>
        </div>
        
        <div>
          <label htmlFor="fullName">Nom et Prénon</label>
          <input
            type="text"
            id="fullName"
            placeholder="Entrer Votre nom et votre prénon"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Entrer votre address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Cité</label>
          <input
            type="text"
            id="city"
            placeholder="Entrer le nom de votre cité"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Code Postal</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Entrer votre code postale"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="numtel">Tel:</label>
          <input
            type="text"
            id="numtel"
            placeholder="Entrer votre numéro de téléphone"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primari" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
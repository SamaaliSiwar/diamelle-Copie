import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveLaivraisonAddress } from '../actions/recommandationActions';
import NavBar from '../componnent/Navbar';
import RecommandationSteps from '../componnent/RecommandationSteps';

export default function LaivraisonAddressScreen(props) {
    const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const recommandation= useSelector((state) => state.recommandation);

  const { laivraisonAddress } = recommandation;
  
  
  const [fullName, setFullName] = useState(laivraisonAddress.fullName  || '');
  const [address, setAddress] = useState(laivraisonAddress.address);
  const [city, setCity] = useState(laivraisonAddress.city);
  const [postalCode, setPostalCode] = useState(laivraisonAddress.postalCode);
  const [country, setCountry] = useState(laivraisonAddress.country);
  if (!userInfo) {
    navigate('/signin');
  }
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveLaivraisonAddress({ fullName, address, city, postalCode, country })
    );
    navigate('/paymentrecommandation');
  };
  return (
    <div className="aboutmain">
      <header className='head' >
      <NavBar/>
              </header>
      <RecommandationSteps step1 step2></RecommandationSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
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
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
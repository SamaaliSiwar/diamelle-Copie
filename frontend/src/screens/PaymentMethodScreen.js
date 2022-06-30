import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../componnent/CheckoutSteps";
import NavBar from "../componnent/Navbar";
export default function PaymentMethodScreen(props){
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const [paymentMethod, setPaymentMethod] = useState('CartePostal');
    const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
    
  };
  const navigate=useNavigate();
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  if (!userInfo) {
    navigate('/signin');
  }
 
 
    if (!shippingAddress.address) {
    navigate('/shipping');
    }
    return(
      
        <div className="aboutmain">
          <header className='head' >
      <NavBar/>
              </header>
        <CheckoutSteps step1 step2 step3>
        </CheckoutSteps>
        <form className="form" onSubmit={submitHandler}>
        <div>
             <h1>Methode de payement</h1>
             <div>
                 <div >
                     <input style={{position: "inherit",
    visibility:"initial",
    display:"inline-flex",
    flexwrap:"nowrap"}}  className="paiment" type="radio" id="cartepostal" value="cartpostal" name="payementMethod"
                     required checked onChage={(e) =>setPaymentMethod(e.target.value)}
                     ></input>
                     <label htmlFor="cartpostal">pmayement a la livraison</label>
                 </div>
             </div>
             <div>
                 <div >
                     <input style={{position: "inherit",
    visibility:"initial",
    display:"inline-flex",
    flexwrap:"nowrap"}} className="paiment" type="radio" id="cartebancaire" value="cartbancaire" name="payementMethod"
                     required checked onChage={(e) =>setPaymentMethod(e.target.value)}
                     ></input>
                     <label htmlFor="cartbancaire">Carte Bancaire</label>
                 </div>
             </div>
            </div>
            <div>
          <label />
          <button className="primari" type="submit">
            Continue
          </button>
        </div>
        
        </form>
        </div>
    )
}
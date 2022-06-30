import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentRecommandation } from "../actions/recommandationActions";
import NavBar from "../componnent/Navbar";
import RecommandationSteps from "../componnent/RecommandationSteps";
import "../styles/Paiment.css";

export default function PaymentRecommandationScreen(props){
    const recommandation = useSelector((state) => state.recommandation);
    const { laivraisonAddress } = recommandation;
    const [paymentRecommandation, setPaymentRecommandation] = useState('CartePostal');
    const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentRecommandation(paymentRecommandation));
    navigate('/placerecommandation');
    
  };
  const navigate=useNavigate();
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  if (!userInfo) {
    navigate('/signin');
  }
 
 
    if (!laivraisonAddress.address) {
    navigate('/laivraison');
    }
    return(
      
        <div className="aboutmain">
          <header className='head' >
      <NavBar/>
              </header>
        <RecommandationSteps step1 step2 step3>
        </RecommandationSteps>
        <div className="formu">
        <form className="form" onSubmit={submitHandler}>
            <div>
             <h1>Methode de payement</h1>
             <div>
                 <div >
                     <input  style={{position: "inherit",
    visibility:"initial",
    display:"inline-flex",
    flexwrap:"nowrap"}} className="paiment" type="radio" id="cartepostal" value="cartpostal" name="payementMethod"
                     required checked onChage={(e) =>setPaymentRecommandation(e.target.value)}
                     ></input>
                     <label htmlFor="cartpostal">paiement a la livraison</label>
                 </div>
             </div>
             <div>
                 <div >
                     <input style={{position: "inherit",
    visibility:"initial",
    display:"inline-flex",
    flexwrap:"nowrap"}} className="paiment" type="radio" id="cartebancaire" value="cartbancaire" name="payementMethod"
                     required checked onChage={(e) =>setPaymentRecommandation(e.target.value)}
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
        </div>
    )
}
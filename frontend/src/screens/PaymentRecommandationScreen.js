import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentRecommandation } from "../actions/recommandationActions";
import RecommandationSteps from "../componnent/RecommandationSteps";
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
      
        <div>
        <RecommandationSteps step1 step2 step3>
        </RecommandationSteps>
        <form className="form" onSubmit={submitHandler}>
            <div>
             <h1>Methode de payement</h1>
             <div>
                 <div >
                     <input type="radio" id="cartepostal" value="cartpostal" name="payementMethod"
                     required checked onChage={(e) =>setPaymentRecommandation(e.target.value)}
                     ></input>
                     <label htmlFor="cartpostal">mayement a la livraison</label>
                 </div>
             </div>
             <div>
                 <div >
                     <input type="radio" id="cartebancaire" value="cartbancaire" name="payementMethod"
                     required checked onChage={(e) =>setPaymentRecommandation(e.target.value)}
                     ></input>
                     <label htmlFor="cartbancaire">Carte Bancaire</label>
                 </div>
             </div>
            </div>
            <div>
          <label />
          <button className="primary" type="submit">
            Continue
          </button>
        </div>
        
        </form>
        </div>
    )
}
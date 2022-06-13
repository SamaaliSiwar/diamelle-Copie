import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, Navigate, useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import { detailsDiamant } from "../actions/diamantActions";
import Zoom from "react-img-zoom";
import NavBar from "../componnent/Navbar";
import "../styles/productpage.css";
export default function DiamantScreen(props)
{ 
  const supportimage={
    if(support="classique")
    {
      supportimage="../images/diamants/Design-1.png";
    }
  }
    const params=useParams();
    const Navigate =useNavigate();
  const {id:diamantId}=params;
    const diamantDetails = useSelector(state => state.diamantDetails);
    const { loading, error, diamant } = diamantDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [or, setOr] = useState("blanc");
    const [support, setSupport] = useState("classique");
    const [supportprice, setSupportprice] = useState("0");

 

    const [taille, setTaille] = useState("52");

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(detailsDiamant(diamantId));
      },[dispatch,diamantId]);
      const addToRecommandationHandle = () => {
        Navigate (`/recommandation/${diamantId}?&or=${or}&support=${support}&taille=${taille}&supportprice=${supportprice}`);
        };
        
    return(
        <div className="aboutmain">
        <header>
          <NavBar/>
        </header>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
           
            <div className="prow top">
              <div className="pcol-2">
            
              <Zoom
               zoomScale={3}
              width={500}
               height={500}
                  src={diamant.image}
                    img={diamant.image}
                  />
                     </div>
      
              <div className="pcol-1">
              
                
                  <p className="discrip"><h2>
                   {diamant.carat} - carat- Diamant:</h2>avec une piere {diamant.shape}<br/>
                    {diamant.cut} cut ||{diamant.clarity} clarity ||{diamant.carat} ct || {diamant.color} couleur<br/>
                    A : {diamant.price}dt</p>
                    <br/>
                    <h2>Crée vos unique bijoux avec diamelle</h2>
                    
                  <br/>
                
                 
                  
                  <div>
                                  <form >
                                  <strong>Selectionner le support</strong>
                                  <div class="radio-group">
                             <input type="radio" id="option-one" name="selector" value="Classique"  onChange={e=>setSupport(e.target.value)} onClick={e=>setSupportprice(1500) }/>
                             
                           <label for="option-one" >
                           <img class="tqb-answer-image" src="../images/diamants/classique-removebg-preview.png"/></label>
                         
                           <input type="radio" id="option-two" name="selector" value="Desing" onChange={e=>setSupport(e.target.value) } onClick={e=>setSupportprice(1800) }/>
                                <label for="option-two">
                                <img class="tqb-answer-image" src="../images/diamants/Design-1.png"/></label>
                                  <input type="radio" id="option-three" name="selector" value="halo" onChange={e=>setSupport(e.target.value)}  onClick={e=>setSupportprice(1950) }/>
                                       <label for="option-three"><img class="tqb-answer-image"  src="../images/diamants/halo.png"/></label>
                                       <input type="radio" id="option-four" name="selector" value="Trilogie" onChange={e=>setSupport(e.target.value)} onClick={e=>setSupportprice(2000) }/>
                                       <label for="option-four"><img  class="tqb-answer-image" src="../images/diamants/Trilogie.png"/></label>
                                       <input type="radio" id="option-five" name="selector" value="Vintage" onChange={e=>setSupport(e.target.value)} onClick={e=>setSupportprice(2100) }/>
                                       <label for="option-five"><img  class="tqb-answer-image" src="../images/diamants/Vintage.png"/></label>
                                       
                                          </div>
                                          </form>
                                          </div>
              
                                 
                                        
                                 
      
                      
                      <div>
                                  <form>
                                  <strong>sellectionner le Taille</strong>
                                  <p> la taille de bague est la valeur de la circonférence de l'intérieur de votre bague, exprimée en millimètres.

C'est également la valeur de votre tour de doigt.Donc si votre tour de doigt st de 52 (5,2 centimètres), sa taille de bague est de 52.</p>
                              
                             <input type="text" id="op-on" name="selector"  onChange={e=>setTaille(e.target.value)}/>
                    </form>
                   </div>
                   
              
              <div>
              <form>
              <strong>Selectionner l'or</strong><br/>
              <div class="radio-group " id="radiogroup2">
         <input type="radio" id="one" name="selector" value="orBlanc" onChange={e=>setOr(e.target.value)}/>
       <label for="one">
       <img className="icone" src="../images/ORBLANC.jpg"/> </label>
       <input type="radio" id="two" name="selector" value="orJaune" onChange={e=>setOr(e.target.value)}/>
            <label for="two">
            <img className="icone" src="../images/ORJAUNE.jpg"/></label>
              <input type="radio" id="three" name="selector" value="orRose" onChange={e=>setOr(e.target.value)} />
                   <label for="three"><img className="icone or" src="../images/ORROSE.jpg"/></label><br/>
                   
                      </div><br/>
                      </form><br/>
                     
                    
             </div>

  


                  
                
                 
              </div>
             

              <div className="pcol-1">
                <div className="pcard pcard-body">
                  <ul>
                    <li>
                      <div className="prow">
                        <div className="discrip">Prix :  </div>
                        <div ><p className="price"> {diamant.price+supportprice}dt</p></div>
                      </div>
                    </li><br/>
                    <li>
                      <div className="prow">
                        <div><p>Status: </p></div>
                        <div>
                          {diamant.countInStock > 0 ? (
                            <span className="success"><p className="success">  In Stock</p></span>
                          ) : (
                            <span className="danger"><p className="success">  Unavailable</p></span>
                          )}
                        </div>
                      </div>
                    </li><br/>
                  
                    
                    {diamant.countInStock > 0 && (
                      
                      <>
                     
                      <li> <button
                         
                          className="primary block" onClick={addToRecommandationHandle}
                        >Recommander</button>
                  </li>
                     
                      </>

                     )}
                    
                   
                    </ul>
                    </div>
                    </div><br/>

                </div>
                
            </div>
           

            
             )}
             </div>
        
    );
}
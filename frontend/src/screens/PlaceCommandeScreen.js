import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createdCommande } from "../actions/CommandeActions";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import RecommandationSteps from "../componnent/RecommandationSteps";
import { COMMANDE_CREATE_RESET } from "../constants/commandeconstants";
export default function PlaceRecommandationScreen(props)
{
  const recommandation=useSelector((state)=>state.recommandation);
  recommandation.itemsPrice =
   recommandation.recommandationItems.reduce((a, c) => a + (c.price+c.supportprice), 0);
 recommandation.totalPrice = recommandation.itemsPrice;
 const navigate=useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
const dispatch= useDispatch();
  const { userInfo } = userSignin;
  if (!userInfo) {
    navigate('/signin');
  }  
  
    const commandeCreate = useSelector((state) => state.commandeCreate);
  const { loading, success, error, commande } = commandeCreate;
  useEffect(() => {
      if (success) {
        navigate(`/commande/${commande._id}`);
        dispatch({ type: COMMANDE_CREATE_RESET});
      }
    
  }, [dispatch, commande, navigate, success]);
    const placeCommnadeHandler =() =>{
      dispatch(createdCommande({...recommandation, commandeItems: recommandation.recommandationItems}));

    };
        return(
        <div>
<RecommandationSteps step1 step2 step3 step4></RecommandationSteps>     
       <div className="row top">
       <div className="col-2">
          <ul>
              <li>
                  <div className="card card-body">
                      <h2>shipping</h2>
                      <strong>Name:</strong> {recommandation.laivraisonAddress.fullName} <br />
                  <strong>Address: </strong> {recommandation.laivraisonAddress.address},
                  {recommandation.laivraisonAddress.city}, {recommandation.laivraisonAddress.postalCode}
                  ,{recommandation.laivraisonAddress.country}
                  </div>
              </li>
              <li>
                  <div className="card card-body">
                      <h2>Payment</h2>
                      <p>
                      <strong>Method:</strong> {recommandation.paymentMethod}
                  </p>
                  </div>
              </li>
              <li>
                  <div className="card card-body">
                      <h2>Order</h2>
                      <ul>
                  {recommandation.recommandationItems.map((item) => (
                    <li key={item.diamant}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/diamant/${item.diamant}`}>
                           <h5 className="name">diamant {item.shape}</h5>
                          </Link>
                        </div>
                       
                        <div>
                        <h1>Piere Caractéristique</h1>
                        <div><strong>Discription</strong></div><br/>
                        <div><h5>diamant:{item.shape}</h5></div><br/>
                        <div><h5>carat:{item.carat}</h5></div><br/>
                        <div><h5>cut:{item.cut}</h5></div><br/>
                        <div><h5>couleur:{item.couleur}</h5></div><br/>
                        <div><h5>Prix de piere:{item.price}</h5></div><br/>
                             <h1>Support Caractéristique</h1>
                        <div><h5>Or : {item.or}</h5></div><br/>
                        <div><h5>type de support : {item.support}</h5></div><br/>
                        <div><h5>prix de support : {item.supportprice}</h5></div><br/>
                        <div><h5>taille : {item.taille}</h5></div><br/>
                        <div><h5> Prix Totale: 
                        {item.totalPrice }dt</h5>
                        </div>
                        </div>


                      </div>
                    </li>
                  ))}
                </ul>
                  </div>
              </li>
          </ul>
       </div>
       <div className="col-1">
       <div className="card card-body">
       <ul>
          <li>
             <h2>Order Summary</h2> 
          </li> 
       
          
          
          <li>
              <div className="row">
                  <div><strong>Order Total: </strong></div>
                  <div><strong>  
                   {recommandation.totalPrice}dt</strong></div>
              </div>
          </li>
          <li>
                <button
                  type="button"
                  onClick={ placeCommnadeHandler}
                  className="primary block"
                  disabled={recommandation.recommandationItems.length === 0}
                >
                  Place Order
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
       </ul>

       </div>

       </div>

       </div>   
        
        
        </div>
    )
}
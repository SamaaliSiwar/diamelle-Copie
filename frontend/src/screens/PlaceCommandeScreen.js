import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createdCommande } from "../actions/CommandeActions";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import NavBar from "../componnent/Navbar";
import RecommandationSteps from "../componnent/RecommandationSteps";
import { COMMANDE_CREATE_RESET } from "../constants/commandeconstants";
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import "../styles/order.css";

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
        <div className="aboutmain">
          <header className='head' >
      <NavBar/>
              </header>
<RecommandationSteps step1 step2 step3 step4></RecommandationSteps>     

        <div className='contbody'>
                  
                  <hr style={{ color:'black'}}>
                    </hr>
              
        
              <div class="section-title-2 text-center mb-60"><h2 className="ob dorey espaci">recommandation</h2></div>
          
               
          <hr style={{ color:'black'}}>
                    </hr>
              
    
          <Row style={{marginLeft:'10px' }}>
            <Col span={8}>
    
              <h3></h3>
              <table>
                <tr>
                  <th>Nom et Prénon:</th>
                  <td>{recommandation.laivraisonAddress.fullName}</td>
                </tr>
                <tr>
                <th>Adresse:</th>
                <td>{recommandation.laivraisonAddress.address},
                      {recommandation.laivraisonAddress.city}</td>
                </tr>
                <tr>
                  <th>Code Postale:</th>
                  <td> {recommandation.laivraisonAddress.postalCode}</td>
                </tr>
                <tr>
                  <th>Tel:</th>
                  <td>{recommandation.laivraisonAddress.numtel}</td>
                </tr>
              </table>
             
            </Col>
            <Col span={8} offset={8}>
              <table>
              <tr>
                  <th>Référence recommandation:</th>
                  <td style={{ color:'black'}}>{recommandation._id}</td>
                </tr>

               
                <tr>
                  <th>Paiement:</th>
                  <td>{recommandation.paymentMethod}<br/>
                  {recommandation.isPaid ? (
                      <MessageBox variant="success">
                        Payer le  {recommandation.paidAt}
                      </MessageBox>
                    ) : (
                      <MessageBox variant="danger">N'est pas payer</MessageBox>
                    )}
                  </td>
                </tr>
              </table>
            </Col>
          </Row>
    
         
          <table className="table">
              <thead>
                <tr>
                  <th>Référence</th>
                  <th>Format</th>
                  <th>Quantité</th>
                  <th>Détails</th>
                  <th>prix</th>
    
                </tr>
              </thead>
              <tbody>
                {recommandation.recommandationItems.map((item) => (
                  <tr key={item.diamant}>
                    <td style={{ color:'black'}}>{item._id}</td>
                    <td style={{ color:'black'}}>{item.shape}</td>
                    <td style={{ color:'black'}}>{item.carat}</td>
                    <td style={{ color:'black'}}>{item.clarity}</td>
                    <td style={{ color:'black'}}>{item.cut}</td>


                    <td> <div><strong>Discription</strong></div><br/>
                            <div><h5>Or : {item.or}</h5></div><br/>
                           
                            <div><h5>Support : {item.support}</h5></div><br/>
                            <div><h5>Taille : {item.supporttaille}</h5></div><br/>

                            </td>
                  
                      <div><strong>Prix Totale: </strong></div>
                     
                  <div><strong style={{ color:'black'}}>  
                   {recommandation.totalPrice}dt</strong></div><br/>
                   <div><strong> 
                      <button
                  type="button"
                  onClick={ placeCommnadeHandler}
                  className="primari block"
                  disabled={recommandation.recommandationItems.length === 0}
                >
                  Place Order
                </button>
                </strong>
                </div> 

                
                </tr>
                ))}
              </tbody>
            </table>
         
            <Col style={{display:'left'}}>
              <table>
                <tr>
                  <th>Bienvenue chez:</th>
                  <td>
                  Joaillerie Diamelle by jarraya</td>
                </tr>
                <tr>
                  <th>Adresse:</th>
                  <td>
                  42 complexe carre du lac، la marsa، tunis، les berges du lac 2045</td>
                </tr>
                <tr>
                  <th>Contact:</th>
                  <td>
                  70 294 666</td>
                </tr>
              </table>
            </Col>
    
         
          </div>
        </div>
 )
}
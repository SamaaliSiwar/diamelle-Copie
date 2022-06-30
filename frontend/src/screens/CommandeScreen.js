import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsCommande} from '../actions/CommandeActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';
import "../styles/order.css";
import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';

export default function CommandeScreen(props) {
    const params = useParams();
    const { id: commandeId } = params;
  const commandeDetails = useSelector((state) => state.commandeDetails);
  const { commande, loading, error } = commandeDetails;
 
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsCommande(commandeId));
  }, [dispatch, commandeId]);
  const diamantDetails = useSelector(state => state.diamantDetails);
    const { diamant } = diamantDetails;
 
  
    return loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div className="aboutmain">
        <header className='head' >
        <NavBar/>
                </header>
                <div className='contbody'>
                    
                <hr style={{ color:'black'}}>
                  </hr>
            
      
            <div class="section-title-2 text-center mb-60">
            <h2 className="ob dorey espaci">Recommandation</h2></div>
        
             
        <hr style={{ color:'black'}}>
                  </hr>
            
  
        <Row style={{marginLeft:'10px' }}>
          <Col span={8}>
  
            <h3></h3>
            <table>
              <tr>
                <th>Nom et Prénon:</th>
                <td>{commande.laivraisonAddress.fullName}</td>
              </tr>
              <tr>
              <th>Adresse:</th>
              <td>{commande.laivraisonAddress.address},
                    {commande.laivraisonAddress.city}</td>
              </tr>
              <tr>
                <th>Code Postale:</th>
                <td> {commande.laivraisonAddress.postalCode}</td>
              </tr>
              <tr>
                <th>Tel:</th>
                <td>{commande.laivraisonAddress.numtel}</td>
              </tr>
            </table>
           
          </Col>
          <Col span={8} offset={8}>
            <table>
            <tr>
                <th>Référence Commande:</th>
                <td>{commande._id}</td>
              </tr>
              <tr>
                <th>Délivrer :</th>
                <td>{commande.isDelivered ? (
                    <MessageBox variant="success">
                      délivrer à {commande.deliveredAt}
                    </MessageBox>
                  ) : (
                    <MessageBox variant="danger">N'est pas délivrer</MessageBox>
                  )}</td>
              </tr>
             
              <tr>
                <th>Paiement:</th>
                <td>{commande.paymentMethod}<br/>
                {commande.isPaid ? (
                    <MessageBox variant="success">
                      Payer le  {commande.paidAt}
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
                <th>Nom</th>
                <th>Quantité</th>
                <th>Détails</th>
                <th>prix</th>
  
              </tr>
            </thead>
            <tbody>
              {commande.commandeItems.map((item) => (
                <tr key={item.diamant}>
                  <td>{item._id}</td>
                  <td>{item.shape}</td>
                  <td> <div><strong>Discription</strong></div><br/>
                          <div><h5>Or : {item.or}</h5></div><br/>
                   </td>
                    
                   
                
                </tr>
              ))}
              <td>
                    <div><strong>Prix Totale: </strong></div>
                   
                      <div><strong>
                      {commande.itemsPrice}dt</strong>
                      </div>
                  
              
                    </td>
                
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
    );
  }
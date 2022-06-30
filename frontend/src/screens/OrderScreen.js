import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';
import "../styles/order.css";
import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';

export default function OrderScreen(props) {
    const params = useParams();
    const { id: orderId } = params;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
 
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);
  const baguetestDetails = useSelector(state => state.baguetestDetails);
    const { baguetest } = baguetestDetails;
 
  
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
          
    
          <div class="section-title-2 text-center mb-60"><h2 className="ob dorey espaci">Order</h2></div>
      
           
      <hr style={{ color:'black'}}>
                </hr>
          

      <Row style={{marginLeft:'10px' }}>
        <Col span={8}>

          <h3></h3>
          <table>
            <tr>
              <th>Nom et Prénon:</th>
              <td>{order.shippingAddress.fullName}</td>
            </tr>
            <tr>
            <th>Adresse:</th>
            <td>{order.shippingAddress.address},
                  {order.shippingAddress.city}</td>
            </tr>
            <tr>
              <th>Code Postale:</th>
              <td> {order.shippingAddress.postalCode}</td>
            </tr>
            <tr>
              <th>Tel:</th>
              <td>{order.shippingAddress.numtel}</td>
            </tr>
          </table>
         
        </Col>
        <Col span={8} offset={8}>
          <table>
          <tr>
              <th>Référence Commande:</th>
              <td>{order._id}</td>
            </tr>
            <tr>
              <th>Délivrer :</th>
              <td>{order.isDelivered ? (
                  <MessageBox variant="success">
                    délivrer à {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">N'est pas délivrer</MessageBox>
                )}</td>
            </tr>
           
            <tr>
              <th>Paiement:</th>
              <td>{order.paymentMethod}<br/>
              {order.isPaid ? (
                  <MessageBox variant="success">
                    Payer le  {order.paidAt}
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
            {order.orderItems.map((item) => (
              <tr key={item.baguetest}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td> <div><strong>Discription</strong></div><br/>
                        <div><h5>Or : {item.or}</h5></div><br/>
                        {item.choicecarat &&
                        <div><h5>Carat : {item.carat}</h5></div>}<br/></td>
                <td> {order.choicecarat?(
                  <div><strong>  
                  {order.totalPrice}dt</strong></div>
                  ):(
                    <div><strong>
                    {order.itemPrice}dt</strong>
                    </div>
                  )}</td>
                  
                 
              
              </tr>
            ))}
            <td>
                  <div><strong>Prix Totale: </strong></div>
                  {order.choicecarat?(
                  <div><strong>  
                  {order. itemsPrice}dt</strong></div>
                  ):(
                    <div><strong>
                    {order. itemsPrice}dt</strong>
                    </div>
                  )}
            
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
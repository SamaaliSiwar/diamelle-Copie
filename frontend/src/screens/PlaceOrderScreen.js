import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../componnent/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderconstants";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import "../styles/order.css";
import NavBar from "../componnent/Navbar";
export default function PlaceOrderScreen(props)
{
 const cart=useSelector((state)=>state.cart);
 cart.itemsPrice =
  cart.cartItems.reduce((a, c) => a + ((c.masse*127+c.carat*2100)*c.nbrpiere)*c.qty, 0
);
cart.itemPrice=
cart.cartItems.reduce((a, c) => a + (c.price)*c.qty, 0
);

cart.totalPrice = cart.itemsPrice;
const navigate=useNavigate();
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  if (!userInfo) {
    navigate('/signin');
  }  
    
    const dispatch=useDispatch();
    const placeOrderHandler =() =>{
      dispatch(createOrder({...cart, orderItems: cart.cartItems}));

    };
  
    const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  useEffect(() => {
      if (success) {
        navigate(`/order/${order._id}`);
        dispatch({ type: ORDER_CREATE_RESET });
      }
    
  }, [dispatch, order, navigate, success]);
  
        return(
          <div className="aboutmain">
          <header className='head' >
      <NavBar/>
              </header>
<CheckoutSteps step1 step2 step3 step4></CheckoutSteps>     

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
                  <td>{cart.shippingAddress.fullName}</td>
                </tr>
                <tr>
                <th>Adresse:</th>
                <td>{cart.shippingAddress.address},
                      {cart.shippingAddress.city}</td>
                </tr>
                <tr>
                  <th>Code Postale:</th>
                  <td> {cart.shippingAddress.postalCode}</td>
                </tr>

              </table>
             
            </Col>
            <Col span={8} offset={8}>
              <table>
              <tr>
                  <th>Référence recommandation:</th>
                  <td>{cart._id}</td>
                </tr>

               
                <tr>
                  <th>Paiement:</th>
                  <td>{cart.paymentMethod}<br/>
                 
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
                {cart.cartItems.map((item) => (
                  <tr key={item.baguetest}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.carat}</td>
                    <td>{item.or}</td>
                    <td>{item.taille}</td>


                    <td> <div><strong>Discription</strong></div><br/>
                            <div><h5>Or : {item.or}</h5></div><br/>
                           
                            <div><h5>Support : {item.carat}</h5></div><br/>
                            <div><h5>Taille : {item.or}</h5></div><br/>

                            </td>
                  
                      <div><strong>Prix Totale: </strong></div>
                      <div><strong>Order Total: </strong></div>
                  <div><strong>  
                   {cart.totalPrice}dt</strong></div><br/>
                   <div><strong> 
                      <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primari block"
                  disabled={cart.cartItems.length === 0}
                >
                  Valider la commande
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
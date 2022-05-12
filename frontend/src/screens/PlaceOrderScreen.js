import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../componnent/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderconstants";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
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
        <div>
<CheckoutSteps step1 step2 step3 step4></CheckoutSteps>     
       <div className="row top">
       <div className="col-2">
          <ul>
              <li>
                  <div className="card card-body">
                      <h2>shipping</h2>
                      <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                  </div>
              </li>
              <li>
                  <div className="card card-body">
                      <h2>Payment</h2>
                      <p>
                      <strong>Method:</strong> {cart.paymentMethod}
                  </p>
                  </div>
              </li>
              <li>
                  <div className="card card-body">
                      <h2>Order</h2>
                      <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.baguetest}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/baguetest/${item.baguetest}`}>
                           <h5 className="name"> {item.name}</h5>
                          </Link>
                        </div>
                       
                        <div>
                        <div><strong>Discription</strong></div><br/>
                        <div><h5>Or : {item.or}</h5></div><br/>
                        {item.choicecarat &&
                        <div><h5>Carat : {item.carat}</h5></div>
                         }
                         <br/>
                        <div><h5>Quantité : {item.qty}</h5></div><br/>
                        {item.choicecarat ?(
                        <div><h5> Prix Totale: 
                        {cart.totalPrice }dt</h5>
                        </div>
                        ):(
                          <div><h5> Prix Totale: 
                        {cart.itemPrice}dt</h5>
                        </div>
                        )}
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
                  {cart.choicecarat ?(
                  <div><strong>  
                   {cart.itemsPrice}dt</strong></div>
                   ):(
                    <div><strong>  
                   {cart.itemPrice}dt</strong></div>
                   )}
              </div>
          </li>
          <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
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
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
const {cartItems} =cart;
cart.itemsPrice =
  cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0
);
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
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                        {item.price}dt
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
                   {cart.itemsPrice}dt</strong></div>
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
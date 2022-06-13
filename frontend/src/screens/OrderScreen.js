import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsOrder } from '../actions/orderActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';

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
      <h1>Order {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Delivered</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Paid</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
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
                            <h5 className='name'>{item.name}</h5>
                          </Link>
                        </div>

                        <div>
                        <div><strong>Discription</strong></div><br/>
                        <div><h5>Or : {item.or}</h5></div><br/>
                        {item.choicecarat &&
                        <div><h5>Carat : {item.carat}</h5></div>}<br/>
                        <div><h5>Quantité : {item.qty}</h5></div><br/>
                        
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
                  {order.choicecarat?(
                  <div><strong>  
                  {order.totalPrice}dt</strong></div>
                  ):(
                    <div><strong>
                    {order.itemPrice}</strong>
                    </div>
                  )}
              </div>
          </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';
import { ORDER_DELETE_RESET } from '../constants/orderconstants';

export default function OrderList(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders());
}, [dispatch, successDelete]);

  const deleteHandler = (order) => {
    // TODO: delete handler
    if (window.confirm('Are you sure to delete?')) {
        dispatch(deleteOrder(order._id));
      }
  };
  return (
    <div className="MuiContainer-root makeStyles-container-13 MuiContainer-maxWidthLg">
    <div class="section-title-2 text-center mb-60">
    <h2 className="ob dorey espaci">Commandes</h2></div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.shippingAddress.fullName}</td>
                <td>{order.createdAt}</td>
                <td>{order.totalPrice}</td>
                <td>{order.isPaid ? order.paidAt : 'No'}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt
                    : 'No'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      navigate(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
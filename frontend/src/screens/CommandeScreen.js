import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsCommande} from '../actions/CommandeActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';

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
    <div>
      <h1>Order {commande._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {commande.laivraisonAddress.fullName} <br />
                  <strong>Address: </strong> {commande.laivraisonAddress.address},
                  {commande.laivraisonAddress.city},{' '}
                  {commande.laivraisonAddress.postalCode},
                  {commande.laivraisonAddress.country}
                </p>
                {commande.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {commande.deliveredAt}
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
                  <strong>Method:</strong> {commande.paymentMethod}
                </p>
                {commande.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {commande.paidAt}
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
                  {commande.commandeItems.map((item) => (
                    <li key={item.diamant}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/diamant/${item.diamant}`}>
                            <h5 className='name'>{item.shape}</h5>
                          </Link>
                        </div>

                        <div>
                        <div><strong>Discription</strong></div><br/>
                        <div><h5>Or : {item.or}</h5></div><br/>
                        <div><h5>Carat : {item.carat}</h5></div><br/>
                        <div><h5>Quantité : {item.cut}</h5></div><br/>
                        
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
                  {commande.totalPrice}dt</strong></div>
              </div>
          </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
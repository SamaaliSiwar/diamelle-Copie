import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCommande, listCommandes } from '../actions/CommandeActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import "../styles/listeprod.css";
import { COMMANDE_DELETE_RESET } from '../constants/commandeconstants';


export default function CommandeList(props) {
  const commandeList = useSelector((state) => state.commandeList);
  const { loading, error, commandes } = commandeList;
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const commandeDelete = useSelector((state) => state.commandeDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = commandeDelete;
  useEffect(() => {
    dispatch({ type: COMMANDE_DELETE_RESET });
    dispatch(listCommandes());
}, [dispatch, successDelete]);

  const deleteHandler = (commande) => {
    // TODO: delete handler
    if (window.confirm('Are you sure to delete?')) {
        dispatch(deleteCommande(commande._id));
      }
  };
  return (
    <div className="MuiContainer-root makeStyles-container-13 MuiContainer-maxWidthLg">
    <div class="section-title-2 text-center mb-60">
    <h2 className="ob dorey espaci">Recommandations</h2>
    </div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}aucun </MessageBox>
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
            {commandes.map((commande) => (
              <tr key={commande._id}>
                <td>{commande._id}</td>
                <td>{commande.laivraisonAddress.fullName}</td>
                <td>{commande.createdAt}</td>
                <td>{commande.totalPrice}</td>
                <td>{commande.isPaid ? commande.paidAt : 'No'}</td>
                <td>
                  {commande.isDelivered
                    ? commande.deliveredAt
                    : 'No'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      navigate(`/commande/${commande._id}`);
                    }}
                  >
                    Details
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(commande)
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
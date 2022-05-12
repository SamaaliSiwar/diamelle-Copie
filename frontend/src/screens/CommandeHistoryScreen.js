import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listCommandeMine } from '../actions/CommandeActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
export default function CommandeHistoryScreen()
{
    const commandeMineList = useSelector((state) => state.commandeMineList);
    const { loading, error, commandes } = commandeMineList;
    const navigate=useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(listCommandeMine());
    }, [dispatch]);
    return(
      <div>
          <h1>Recommandation History</h1>
          {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
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
                <td>{commande.createdAt}</td>
                <td>{commande.totalPrice}dt</td>
                <td>{commande.isPaid ? commande.paidAt: 'No'}</td>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    

      </div>
    );
};
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, listUsers } from '../actions/userActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import { USER_DETAILS_RESET } from '../constants/userconstants';
import "../styles/listeprod.css";

export default function UserList() {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  const navigate = useNavigate();
  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
    dispatch({
      type: USER_DETAILS_RESET,
    });
}, [dispatch, successDelete]);
const deleteHandler = (user) => {
  if (window.confirm('Are you sure?')) {
    dispatch(deleteUser(user._id));
  }
};
  return (
    
      <div className="prow">
      <div class="section-title-2 text-center mb-60"><h2 className="ob dorey espaci">Utilisateurs</h2>
      <br/>
     <br/> 
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">User Deleted Successfully</MessageBox>
      )}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>EMAIL</th>
              <th> ADMIN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                <td>
                <button
                    type="button"
                    className="small"
                    onClick={() => navigate(`/user/${user._id}/edit`)}
                  >
                    Modifier
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(user)}
                  >
                    Supprimer
                  </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  
  );
}
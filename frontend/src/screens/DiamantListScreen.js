import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { createDiamant, deleteDiamant, ListeDiamants } from '../actions/diamantActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import { DIAMANT_CREATE_RESET, DIAMANT_DELETE_RESET } from '../constants/diamantconstants ';

export default function DiamantListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
    const diamantList = useSelector((state) => state.diamantList);
  const { loading, error, diamants,page, pages   } = diamantList;

  const diamantCreate = useSelector((state) => state.diamantCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    diamant: createdDiamant,
  } = diamantCreate;
  const diamantDelete = useSelector((state) => state.diamantDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = diamantDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: DIAMANT_CREATE_RESET });
      navigate(`/diamant/${createdDiamant._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: DIAMANT_DELETE_RESET });
    }
   
    dispatch(
      ListeDiamants({seller: sellerMode ? userInfo._id : '', pageNumber})
      
    );
  }, [
    createdDiamant,
    dispatch,
    navigate,
    successCreate,
  
    userInfo._id,
  ]);

  const deleteHandler = (diamant) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteDiamant(diamant._id));
    }
  };
  
  const createHandler = () => {
    dispatch(createDiamant());

  };
  return (
    <div>
      <div className="row">
        <h1>Products</h1>
      
        <button type="button" className="primary" onClick={createHandler}>
          Create Product
        </button>
        
      </div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>SHAPE</th>
                <th>PRICE</th>
                <th>CARAT</th>
                <th>CUT</th>
                <th>COULEUR</th>
                <th>CLARITY</th>

                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {diamants.map((diamant) => (
                <tr key={diamant._id}>
                  <td>{diamant._id}</td>
                  <td>{diamant.shape}</td>
                  <td>{diamant.price}</td>
                  <td>{diamant.carat}</td>
                  <td>{diamant.cut}</td>
                  <td>{diamant.couleur}</td>
                  <td>{diamant.clarity}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() => navigate(`/diamant/${diamant._id}/edit`)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(diamant)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
       
        </>
      )}
    </div>
  );
}
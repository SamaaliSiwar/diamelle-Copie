import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { createBaguetest, deleteBaguetest, ListeBaguestest } from '../actions/baguetestActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import { BAGUETEST_CREATE_RESET, BAGUETEST_DELETE_RESET } from '../constants/baguetestconstants';

export default function BaguetestListScreen(props) {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const baguetestList = useSelector((state) => state.baguetestList);
  const { loading, error, baguestest, page, pages } = baguetestList;

  const baguetestCreate = useSelector((state) => state.baguetestCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdBaguetest,
  } = baguetestCreate;
  const baguetestDelete = useSelector((state) => state.baguetestDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = baguetestDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: BAGUETEST_CREATE_RESET });
      navigate(`/baguetest/${createdBaguetest}/create`);
    }
    if (successDelete) {
      dispatch({ type: BAGUETEST_DELETE_RESET });
    }
   
    dispatch(
      ListeBaguestest({ seller: sellerMode ? userInfo._id : '', pageNumber })
    );
  }, [
    createdBaguetest,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
  
    userInfo._id,
    pageNumber,
  ]);

  const deleteHandler = (baguetest) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteBaguetest(baguetest._id));
    }
  };
  
  const createHandler = () => {
    dispatch(createBaguetest());

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
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {baguestest.map((baguetest) => (
                <tr key={baguetest._id}>
                  <td>{baguetest._id}</td>
                  <td>{baguetest.name}</td>
                  <td>{baguetest.price}</td>
                  <td>{baguetest.category}</td>
                  <td>{baguetest.brand}</td>
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() => navigate(`/baguetest/${baguetest._id}/edit`)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(baguetest)}
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
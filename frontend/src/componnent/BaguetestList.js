import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { createBaguetest, deleteBaguetest, ListeBaguestest } from '../actions/baguetestActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import styled from "styled-components";
import { BAGUETEST_CREATE_RESET, BAGUETEST_DELETE_RESET } from '../constants/baguetestconstants';
import "../styles/listeprod.css";

export default function BaguetestList(props) {
  const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }
  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;

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
    baguetest: createdBaguetest,
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
      navigate(`/baguetest/${createdBaguetest._id}/edit`);
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
      window.location.reload('/baguetestlist');

    }
  };
  
  const createHandler = () => {
    dispatch(createBaguetest());

  };
  return (
    <div className="MuiContainer-root makeStyles-container-13 MuiContainer-maxWidthLg">
      <div class="section-title-2 text-center mb-60">
      <h2 className="ob dorey espaci">Articles</h2>
      <br/>
     <br/> 
      
        <button type="button" className="small"
 onClick={createHandler}>
          Créer un produit
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
                <th>NOM</th>
                <th>PRIX</th>
                <th>CATEGORIE</th>
                <th>MARQUE</th>
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
                      Modifier
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(baguetest)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <div className="pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === page ? 'active' : ''}
                key={x + 1}
                to={`/baguetestlist/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
            </div>
          </table>
       
        </>
      )}
    </div>
   
  );
}
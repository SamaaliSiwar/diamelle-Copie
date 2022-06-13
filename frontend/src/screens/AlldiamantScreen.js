import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ListeDiamants } from '../actions/diamantActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';
import Rating from '../componnent/Rating';
import "../styles/listeprod.css";

export default function SearchScreen(props) {
  const navigate = useNavigate();
  const { 
    
  shape = 'all' ,
  order = 'newest',} = useParams();
  const dispatch = useDispatch();
  const diamantList = useSelector((state) => state.diamantList);
  const { loading, error, diamants } = diamantList;
  const diamantShapeList = useSelector((state) => state.diamantList);
  const {
    loading: loadingShapes,
    error: errorShapes,
    shapes,
  } =diamantShapeList;
  useEffect(() => {
    dispatch(ListeDiamants(
      { 
      shape: shape !== 'all' ? shape : '',
      order,}));

  }, [dispatch, order, shape]);
  const getFilterUrl = (filter) => {
    const filterShape = filter.shape || shape;
    const sortOrder = filter.order || order;
  
    return `/searchdiamant/shape/${filterShape}/order/${sortOrder}`;
  };
  return (
    <div className="aboutmain">
       
       <header className='head' >
       <NavBar/>
               </header>

    
      <div >
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>{diamants.length} Results</div>
          
        )}
          </div>
        <br/>

        
        <div className='choice-Price'>
         <strong> Afficher Selon</strong>{' '}<br/>
          <select
            value={order}
            onChange={(e) => {
              navigate(getFilterUrl({ order: e.target.value }));
            }}
          >
  
            <option value="lowest">Prix croissant</option>
            <option value="highest">Prix décroissant</option>
          </select>
        </div>
      
      
      <div >
        <div >
          <h3>Resultats</h3>
          {loadingShapes ? (
            <LoadingBox></LoadingBox>
          ) : errorShapes ? (
            <MessageBox variant="danger">{errorShapes}</MessageBox>
          ) : (
            <ul>
              {shapes && shapes.map((c) => (
                <li key={c}>
                  <Link
                    className={c === shape ? 'active' : ''}
                    to={getFilterUrl({ shape: c })}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div >
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {
                   diamants.length === 0 &&
                <MessageBox>No Product Found</MessageBox>
              }
              { diamants.length != 0 && 
              <div >
                {diamants.map((diamant) => (
                  <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 pt-lg-4 pt-4">
                        <div class="card">
                         <img class="card-img-top" src={diamant.image}/>
                            <div class="card-body">
                                <div class="text-muted description">{diamant.dicription}</div>
                              
                                <div class="d-flex align-items-center justify-content-between pt-3">
                                    <div class="d-flex flex-column">
                                        <div class="h6 font-weight-bold">{diamant.price}dt</div>
                                        <div class="text-muted rebate"></div>
                                    </div>
                                    <Link to={`/diamant/${diamant._id}`}>
                                    <div class="btn btn-primary">ajouter au panier</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            
              </div>
              }
              
            </>
          )}

        </div>
      </div>
    </div>
  );
}
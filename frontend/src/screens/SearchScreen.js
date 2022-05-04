import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ListeBaguestest } from '../actions/baguetestActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import Rating from '../componnent/Rating';

export default function SearchScreen(props) {
  const navigate = useNavigate();
  const { name = 'all'  ,
  categorie = 'all' ,
  order = 'newest',} = useParams();
  const dispatch = useDispatch();
  const baguetestList = useSelector((state) => state.baguetestList);
  const { loading, error, baguestest } = baguetestList;
  const baguetestCategorieList = useSelector((state) => state.baguetestCategorieList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = baguetestCategorieList;
  useEffect(() => {
    dispatch(ListeBaguestest(
      { name: name !== 'all' ? name : '' ,
      categorie: categorie !== 'all' ? categorie : '',
      order,}));

  }, [dispatch, name , order, categorie]);
  const getFilterUrl = (filter) => {
    const filterCategorie = filter.categorie || categorie;
    const filterName = filter.name || name;
    const sortOrder = filter.order || order;
  
    return `/search/categorie/${filterCategorie}/name/${filterName}/order/${sortOrder}`;
  };
  return (
    <div className='row top'>
      <div className="row">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>{baguestest.length} Results</div>
          
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
      
      
      <div className="row top">
        <div className="col-1">
          <h3>Resultats</h3>
          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <MessageBox variant="danger">{errorCategories}</MessageBox>
          ) : (
            <ul>
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    className={c === categorie ? 'active' : ''}
                    to={getFilterUrl({ categorie: c })}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {baguestest.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row center">
                {baguestest.map((baguetest) => (
                  <div key={baguetest._id} className="card">
      <Link to={`/baguetest/${baguetest._id}`}>
        <img className="medium" src={baguetest.image} alt={baguetest.name} />
      </Link>
      <div className="card-body">
        
          <h2>{baguetest.name}</h2>
        
        <Rating
          rating={baguetest.rating}
          numReviews={baguetest.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">{baguetest.price}dt</div>
         
        </div>
      </div>
    </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
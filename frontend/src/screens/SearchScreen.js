import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ListeBaguestest } from '../actions/baguetestActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';
import Rating from '../componnent/Rating';
import "../styles/listeprod.css";
import "../styles/listeprod.css";

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
      
      
      <div >
        <div >
          <h3>Resultats</h3>
          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <MessageBox variant="danger">{errorCategories}</MessageBox>
          ) : (
            <ul>
              {categories && categories.map((c) => (
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
        <div >
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {
                baguestest.length === 0 &&
                <MessageBox>No Product Found</MessageBox>
              }
              { baguestest.length != 0 && 
              <div >
                {baguestest.map((baguetest) => (
                  <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1 pt-lg-4 pt-4">
                        <div class="card">
                         <img class="card-img-top" src={baguetest.image}/>
                            <div class="card-body">
                                <h6 class="font-weight-bold pt-1">{baguetest.name}</h6>
                                <div class="text-muted description">{baguetest.dicription}</div>
                                <div class="d-flex align-items-center product"> 
                               <Rating rating={baguetest.rating}
          numReviews={baguetest.numReviews}
        ></Rating> </div>
                                <div class="d-flex align-items-center justify-content-between pt-3">
                                    <div class="d-flex flex-column">
                                        <div class="h6 font-weight-bold">{baguetest.price}dt</div>
                                        <div class="text-muted rebate"></div>
                                    </div>
                                    <Link to={`/baguetest/${baguetest._id}`}>
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
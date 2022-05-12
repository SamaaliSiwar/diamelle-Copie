import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation,  useNavigate,  useParams } from "react-router-dom";
import { addToRecommandation, removeFromrecommandation } from "../actions/recommandationActions";
import MessageBox from "../componnent/MessageBox";

export default function RecommandationScreen(props)
{

const navigate=useNavigate();
const params = useParams();
const diamantId = params.id;
const { search } = useLocation();
const recommandation = useSelector((state) => state.recommandation);
const { recommandationItems, error } = recommandation;
const orInUrl = new URLSearchParams(search).get('or');
  const or = orInUrl ? String(orInUrl) :1;
  const supportInUrl = new URLSearchParams(search).get('support');
  const support = supportInUrl ? String(supportInUrl) :1;
  const tailleInUrl = new URLSearchParams(search).get('taille');
  const taille = tailleInUrl ? Number(tailleInUrl) :1;
  const supportpriceInUrl = new URLSearchParams(search).get('supportprice');
  const supportprice = supportpriceInUrl ? Number(supportpriceInUrl) :1;
const dispatch = useDispatch();
  useEffect(() => {
    if (diamantId) {
      dispatch(addToRecommandation(diamantId , or ,support,supportprice,taille));
    }
  }, [dispatch, diamantId, or , support , supportprice, taille]);
const removeFromRecommandationHandler = (id) => {
  // delete action
  dispatch(removeFromrecommandation(id));
};



const checkoutHandler = () => {
  navigate('/signin?redirect=/laivraison');
};
    return(
        <div className="row top">
        <div className="col-2">
        <h1> recommandation</h1>
        {recommandationItems.length === 0 ? (
          <MessageBox>
            vous n'avez aucun recommandation <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {recommandationItems.map((item) => (<li key={item.diamant}>
               <div >
               <li><div>
                    <img
                      src={item.image}
                    
                      className="small"
                    ></img>
                  </div>
                  </li> 
                  <li>
                  <div className="min-30">
                    <Link to={`/diamant/${item.diamant}`} className="min">diamant:{item.shape}||carat{item.carat}||cut{item.cut}||couleur{item.couleur}||clarity{item.clarity}<br/>
                    avec un support{item.support} on {item.or}</Link>
                  </div>
                  </li>
                  <li>
                   <div>
                     {item.price}+{item.supportprice}
                   </div> 
                  </li>
                  <li>
                    { item.support == 'Classique' && 

                  <img src="../images/diamants/classique-removebg-preview.png"></img> 
        
                    }
                   
                  </li>
                  <li>
                  { item.support == 'Desing' && 

<img src="../images/diamants/Design-1.png"></img> 

  }
                  </li>
                 
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromRecommandationHandler(item.diamant)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
          <li>
            <div>items : 
        
        {recommandationItems.reduce((a, c) => a +((c.price+c.supportprice)) , 0)}dt</div>
          </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={recommandationItems.length === 0}
              >
                Processus de recommandation
              </button>
          
            </li>
            <li>
            
            </li>
          </ul>
        </div>
            </div>
        </div>
    );
}
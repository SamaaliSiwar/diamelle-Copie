import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation,  useNavigate,  useParams } from "react-router-dom";
import { addToCart, removeFromCart} from "../actions/cartActions";
import MessageBox from "../componnent/MessageBox";
import NavBar from "../componnent/Navbar";
import "../styles/card.css";


export default function CartScreen(props)
{

const navigate=useNavigate();
const params = useParams();
const baguetestId = params.id;
const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get('qty');
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const caratInUrl = new URLSearchParams(search).get('carat');
  const carat = caratInUrl ? Number(caratInUrl) : 1;
  const orInUrl = new URLSearchParams(search).get('or');
  const or = orInUrl ? String(orInUrl) :1;

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (baguetestId) {
      dispatch(addToCart(baguetestId, qty,carat,or));
    }
  }, [dispatch, baguetestId, qty,carat , or]);
const removeFromCartHandler = (id) => {
  // delete action
  dispatch(removeFromCart(id));
};



const checkoutHandler = () => {
  navigate('/signin?redirect=/shipping');
};
    return(
      <>
      <header className='head' >
      <NavBar/>
              </header>
              <div className="aboutmain">
              <div class="section-title-2 text-center mb-60">
              <h2 className="ob dorey espaci">Panier</h2></div>
        <div className="prow ptop">
        <div className="pcol-2">
       <div className="prow">
  
    
        <br/>
        {cartItems.length === 0 ? (
          <MessageBox>
            Panier est vide <Link to="/">Aller au shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (<li key={item.baguetest}>
                <div className="prow">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="psmall"
                    ></img>
                  </div>
                  <div className="pmin-30">
                    <Link to={`/baguetest/${item.baguetest}`} className="min">{item.name}</Link>
                  </div>
                  <div>
                  <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.baguetest, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  {item.choicecarat? (
                        <div ><p className="price" style={{color:'black'}}>
                        {item.price*qty}
                        </p></div>
                        ):(
                          <div style={{color:'black'}}> {(item.masse*127+ carat*item.nbrpiere*2200)*qty}dt</div>
                        )}
                  <div></div>

                  <div>
                    <button
                    style={{color:"white"}}
                      type="button"
                      onClick={() => removeFromCartHandler(item.baguetest)}
                    >
                      supprimer
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="pcol-1">
        <div className="pcard pcard-body pcard-body">
          <ul>
            <li className="pcard">
            {cartItems.choicecarat?(
              <h2>
              Totale 
              ({cartItems.reduce((a, c) => a + c.qty, 0)} Articles) : 
        
              {cartItems.reduce((a, c) => a +(c.price)*c.qty , 0)}dt
              </h2>
              ):(
                <h2>
                  Totale
                  ({cartItems.reduce((a, c) => a + c.qty, 0)} Article) : 
                  {cartItems.reduce((a, c) => a +((c.masse*127+ carat*c.nbrpiere*2200)*c.qty) , 0)}dt
                 
                
                </h2>
              )}
            </li><br/>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primari block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
          
            </li>
          </ul>
        </div>
            </div>
        </div>
        </div>
        </div>
        </>
    );

}
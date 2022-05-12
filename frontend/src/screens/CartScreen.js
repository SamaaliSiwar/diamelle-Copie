import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation,  useNavigate,  useParams } from "react-router-dom";
import { addToCart, removeFromCart} from "../actions/cartActions";
import MessageBox from "../componnent/MessageBox";

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
        <div className="row top">
        <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (<li key={item.baguetest}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
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
                  {item.choicecarat ?(
                  <div>{((item.masse*127+carat*2100)*item.nbrpiere)*qty}dt</div>
                  ):(
                    <div>{item.price}</div>
                  )}
                  <div></div>

                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.baguetest)}
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
            {cartItems.choicecarat?(
              <h2>
              Subtotal 
             
            
              ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : 
        
                {cartItems.reduce((a, c) => a +((c.masse*127+carat*2100*c.nbrpiere)*qty) , 0)}dt
              </h2>
              ):(
                <h2>
                  Subtotal
                  ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : 
                  {cartItems.reduce((a, c) => a +((c.price)*qty) , 0)}
                </h2>
              )}
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
          
            </li>
          </ul>
        </div>
            </div>
        </div>
    );
}
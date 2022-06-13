import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";
import { AiOutlineUser } from "react-icons/ai";
import "../styles/singin.css";

export default function Singin()
{
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler= () => {
    dispatch(signout());
  };
 
  return(
    
     <div className="grid-container">
     
    {userInfo ? (
      <div className="dropdown" >
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <div className="dropdown-content">
                 
                    <Link to="/profile">User Profile</Link><br/>
                  
                  
                    <Link to="/orderhistory">Order History</Link><br/>
                  
                    <Link to="/recommandationhistory">recommandations</Link><br/>
                 
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link><br/>
                    </div>
                
              </div>
            ) : (
              <Link to="/signin">
              <AiOutlineUser size="20" color="#C29958" > Sign In</AiOutlineUser>
              </Link>
             
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/baguetestlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/diamantlist">Diamants</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/recommandationliste">recommandation de diamant</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                  <li>
                    <Link to="/support">Support</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
    

    );
};
  
     
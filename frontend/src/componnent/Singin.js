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
     
    {userInfo && !userInfo.isAdmin  &&
      <div className="dropdown" >
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <div className="dropdown-content">
                 
                    <Link to="/profile">Profile</Link><br/>
                  
                  
                    <Link to="/orderhistory">Commandes Historiques</Link><br/>
                  
                    <Link to="/recommandationhistory">mes recommandations</Link><br/>
                 
                    <Link to="#signout" onClick={signoutHandler}>
                      Déconnecter
                    </Link><br/>
                    </div>
                
              </div>
   
             
             
            }
            {!userInfo &&
              <Link to="/signin">
              <AiOutlineUser size="20" color="#C29958" >Se Connecter</AiOutlineUser>
              </Link>
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <div className="dropdown-content">
                <Link to="/profile">Profile</Link><br/>
                  
=                    <Link to="/dashbord">Dashboard</Link><br/>
<Link to="/orderhistory">Commandes Historiques</Link><br/>
                  
                  <Link to="/recommandationhistory">mes recommandations</Link><br/>
               
                  <Link to="#signout" onClick={signoutHandler}>
                    Déconnecter
                  </Link><br/>
                    
                </div>
              </div>
            )}
          </div>
    

    );
};
  
     
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../styles/dash.css";
import Dashboard from '../componnent/Dashbord';
import { Link } from 'react-router-dom';
import { signout } from '../actions/userActions';
import NavBar from '../componnent/Navbar';

export default function DashboardScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler= () => {
    dispatch(signout());
  };
 

  return (
    <div className="aboutmain">
<header>
     
     <NavBar/>
</header>

    <Fragment>
    <Dashboard

    />
  </Fragment>
  </div>
  );
}
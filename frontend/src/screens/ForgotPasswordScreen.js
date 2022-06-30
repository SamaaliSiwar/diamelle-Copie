import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { forgotPassword, signin } from '../actions/userActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';
import { USER_FORGOTPASSWORD_SUCCESS } from '../constants/userconstants';
import "../styles/formulaire.css"


export default function ForgotPasswordScreen(props) {
  const [email, setEmail] = useState('');
const navigate = useNavigate();
  const userForgotPassword = useSelector((state) => state.userForgotPassword);
  const { userReset, loading, error } = userForgotPassword;
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const redicectUrl="http://localhost:3000/forgot";
    dispatch(forgotPassword(email,redicectUrl));
    if (USER_FORGOTPASSWORD_SUCCESS)
    {
      alert('mail envoyer à votre address')
    }
    else {
      alert('le mail utiliser est incorrect');
    }
  };
  
  
  return (
    <>
        <header className='head' >
      <NavBar/>
              </header>
  
    <div className="aboutmain">
    <div className='formu'>

      <form className="form" onSubmit={submitHandler} initialvalues={{
        email:email,
        redicectUrl:"http://localhost:3000/forgot "
      }}>
        
      
        <div class="section-title-2 text-center mb-60">
    <h2 className="ob dorey espaci">Reset Password</h2>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div>
          <label />
          <button style={{color:"white"}} type="submit">
            Chercher
          </button>
        </div>
        
      </form>
      </div>
    </div>
    </>
  );
}
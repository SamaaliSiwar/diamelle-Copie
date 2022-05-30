import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { forgotPassword, signin } from '../actions/userActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import { USER_FORGOTPASSWORD_SUCCESS } from '../constants/userconstants';

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
      navigate('/sendmail')
    }
    else {
      alert('le mail utiliser est incorrect');
    }
  };
  
  
  return (
    <div>
      <form className="form" onSubmit={submitHandler} initialvalues={{
        email:email,
        redicectUrl:"http://localhost:3000/forgot "
      }}>
        <div>
          <h1>Reset Password</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
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
          <button className="primary" type="submit">
            submit
          </button>
        </div>
        </div>
        
      </form>
    </div>
  );
}
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updatePassword } from "../actions/userActions";
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';

export default function ReserPasswordScreen()
{
  const {userId,resetString}=useParams();
  const [newPassword, setnewPassword] = useState('');
  const [ConfirmnewPassword, setConfirmnewPassword] = useState('');


  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updatePassword(userId,resetString , newPassword, ConfirmnewPassword));
  };
  return(
  <div>
{resetString && userId &&(
  <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Password Reset</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="newPassword">newPassword</label>
          <input
            type="password"
            id="newPassword"
            placeholder="Enter newPassword"
            required
            onChange={(e) => setnewPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="ConfirmnewPassword">ConfirmnewPassword</label>
          <input
            type="password"
            id="ConfirmnewPassword"
            placeholder="Enter ConfirmnewPassword"
            required
            onChange={(e) => setConfirmnewPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            submit
          </button>
        </div>
        <div>
          <label />
         
        </div>
      </form>
)}
  </div>)
}
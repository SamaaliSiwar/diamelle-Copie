import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import NavBar from "../componnent/Navbar";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userconstants";
export default function ProfileScreen()
{ 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
    const dispatch= useDispatch();
    useEffect(() => {
        if (!user) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo._id));
          } else {
            setName(user.name);
            setEmail(user.email);
          }
        }, [dispatch, userInfo._id, user]);
      const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        if (password !== confirmPassword) {
            alert('verifier votre mots de passe de confirmation!');
          } else {
            dispatch(updateUserProfile({ userId: user._id, name, email, password }));
          }
      };
    return(
        <div className="aboutmain">
          <header className='head' >
      <NavBar/>
              </header>
         <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Profile utilisateur</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
          {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Le Profile est ?? Jour
              </MessageBox>
            )}
            
            <div>
              <label htmlFor="name">Nom</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">confirmer Mot de passe</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Enter confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button className="primari" type="submit">
                Mettre A Jour
              </button>
            </div>
          </>
        )}
      </form>

        </div>
    )
}
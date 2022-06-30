import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';
import "../styles/formulaire.css";

export default function RegisterScreen(props) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div className="aboutmain">
     <header className='head' >
       <NavBar/>
               </header>
               <div className="formu">
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>S'inscrire</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Nom et Prénon</label>
          <input
            type="text"
            id="name"
            placeholder="Entrer votre nom et votre prénon"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Adresse Email</label>
          <input
            type="email"
            id="email"
            placeholder="Entrer votre adresse email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Mots de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrer un mots de passe"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Entrer confirme mots de passe</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Entrer confirme mots de passe"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primari" type="submit">
            S'inscrire
          </button>
        </div>
        <div>
          <label />
          <div>
            vous-avez déja un compte?{' '}
            <Link className='ob dorey espaci' to={`/signin?redirect=${redirect}`}>Connecter</Link>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}
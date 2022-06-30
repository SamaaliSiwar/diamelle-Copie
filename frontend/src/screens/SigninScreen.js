import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../componnent/LoadingBox';
import MessageBox from '../componnent/MessageBox';
import NavBar from '../componnent/Navbar';
import "../styles/formulaire.css";


export default function SigninScreen(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <>
      <header>
        <NavBar/>
      </header>
    
    <div className="aboutmain" >
    <div className="formu">
      <form className="form" onSubmit={submitHandler}>
     
    <div class="section-title-2 text-center mb-60">
    <h2 className="ob dorey espaci">Connecter</h2></div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="email">Adresse Email</label>
          <input
            type="email"
            id="email"
            placeholder="Entrer votre email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Mots de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Entrer Votre mots de passe"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primari" type="submit">
            Connecter
          </button>
        </div>
        <div>
          <label />
          <div>
            
            <Link className=' ob dorey espaci' to={`/forgot`}>Mot de passe oblier?</Link>
          </div>
          <div>
            Vous n'avez pas de compte?{' '}
            <Link to={`/register?redirect=${redirect}`}><button className='primari' >Créer un compte</button>
              
            </Link>
          </div>
        </div>
      </form>
      </div>
    </div>
    </>
  );
}
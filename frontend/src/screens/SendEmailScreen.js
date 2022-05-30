import React from 'react';
import { useSelector } from 'react-redux';


export default function SendEmailScreen(props) {
 
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
  return (
    <div>
    
        <div>
          <h1>Maile envoyer</h1>
        </div>
        
        <div>
         <p>
             un mail est envoyer a votre aadress
         </p>
        </div>
      
    </div>
  );
}
import React, { useState } from "react"
import { Link } from "react-router-dom";

export default function Diamant(props){
    const{diamant}=props;
  
    return(
        <>

  <tbody>

    <tr>
   
    <td className='shape'>{diamant.shape}</td>
      <td>{diamant.carat}</td>
      <td>{diamant.cut}</td>
      <td>{diamant.clarity}</td>
      <td>{diamant.couleur}</td>
      <td>{diamant.price}dt</td>
      <td>
      <Link to={`/diamant/${diamant._id}`}>Détails    
    </Link></td>
    </tr>
  </tbody>
    
              </>
              
       
    
)}
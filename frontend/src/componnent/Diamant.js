import React from "react"
import { Link } from "react-router-dom";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
export default function Diamant(props){
    const{diamant}=props;
    return(
        <>
        <div className="col-3">
       
       <div className="row center">
                
                  <div key={diamant._id} className="card">
      <Link to={`/diamant/${diamant._id}`}>
        <img className="medium" src={diamant.image}  />
      </Link>
      <div className="card-body">
        
       
        <h2>Diamant : {diamant.carat}ct - {diamant.shape}</h2>
        
        <div className="row">
          <div className="price">{diamant.price}dt</div>
         
        </div>
      </div>
    </div>
          
              </div>
              </div>
              </>
              
       
    
)}
import React from "react"
import { Link } from "react-router-dom";
export default function Baguetest(props){
    const{baguetest}=props;
    return(
      <>
       {baguetest.displayhome &&
      
<div key={baguetest._id}  class="col-md-3">
<div class="wsk-cp-product">
  <div class="wsk-cp-img"><img src={baguetest.image} alt="Product" class="img-responsive" /></div>
  <div class="wsk-cp-text">
    <div class="category">
    <span><Link to={`/baguetest/${baguetest._id}`} className="navlink">detail</Link></span>            </div>
    <div class="title-product">
      <h3>{baguetest.name}</h3>
      
    </div>
    
    
      <div class="wcf-left"><span class="price">{baguetest.price}dt</span></div> 
  </div>
  
</div>
</div>
       }

 </>
);
}
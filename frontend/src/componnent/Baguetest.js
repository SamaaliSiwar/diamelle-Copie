import React from "react"
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "../styles/product.css"
export default function Baguetest(props){
    const{baguetest}=props;
    return(
      <>
     
       
        <div class="container page-wrapper">
  <div class="page-inner">
    <div class="row">
      <div class="el-wrapper">
        <div key={baguetest._id} class="box-up">
          <img class="img" src={baguetest.image} alt={baguetest.name}/>
          <div class="img-info">
            <div class="info-inner">
            <h5
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              marginBottom: "20px",
            }}
          >
            <i>
            
              {baguetest.name}
            </i>
          </h5>
           
              <span class="p-company">{baguetest.categorie}</span>
            </div>
            <div class="a-size">Disponible en OR : <span class="size">Blanc , Jaune , Rose</span></div>
          </div>
        </div>
        

        <div class="box-down">
          <div class="h-bg">
            <div class="h-bg-inner"></div>
          </div>

          <Link class="cart" to="/#">
          <span style={{ color: "#c29958" }}>{baguetest.price}dt</span>             <span class="add-to-cart">
              <span class="txt">Détails</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
       


       

 </>
);
}
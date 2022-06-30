import React from "react"
import "../styles/product.css"
import "../index.css";
export default function Baguetest(props){
    const{baguetest}=props;
    return(
      <>
     
       
   {baguetest.displayhome &&
        <div key={baguetest._id} class="box-up">
        <div class="owl-item active" style={{width:"287.5px", marginRight:"20px"}}><div class="col3">
				<a href="">
        <img className="homeprod" src={baguetest.image}/>
					<p class="crealabel">{baguetest.name}</p>
          <p class="crealabel">{baguetest.shape}</p>

					<p class="caroutitre">{baguetest.price}dt</p>
         
				</a>
			</div></div>
</div>
   }
       


       

 </>
);
}
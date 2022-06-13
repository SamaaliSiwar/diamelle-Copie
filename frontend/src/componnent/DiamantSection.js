import React from "react"
import { Link } from "react-router-dom";
import"../styles/DiamantSection.css";
export default function DiamantSection()
{
    return(
        <div className="section">

		<div class="certiblocs" style={{ backgroundImage: "url(https://images.i-diamants.com/images/diamant-expert.jpg)", 
     width: 600,
    height: 508}}>
			<div class="col5a grid-child purple">
				<Link className="css-3dvux" to="/fr/certificat-du-diamant-gia-hrd-igi.html,00026">
					<h3 class="h3section">Diamants Certifiés</h3>
					<hr class="ligne"/>
					<p class="certitre">Par 3 organismes mondialement reconnus :</p>
					<p class="certitre">
                    <img src="https://www.i-diamants.com/images/logos_certifs.png" alt="les certifications des diamants"/></p>
				</Link>
			</div>
		</div>
       
		<div class="certiblocs" style={{backgroundImage: "url(https://images.i-diamants.com/images/diamant-expert2.jpg)", 
     width: 600,
    height: 508}}>
			<div class="col5a grid-child green " style={{width: 600,
    height: 508}}>
				<Link className="css-3dvux" to="/fr/la-main-de-lartisan.html,00070">
					<h3 class="h3section">Joaillerie Fabrication Française</h3>
					<hr class="ligne"/>
					<p class="certitre">Notre devise :</p>
					<p class="certidescr">Passion, Authenticité, Expertise</p>
				</Link>
			
			
			</div>
		</div>
      
     </div>
    )
}

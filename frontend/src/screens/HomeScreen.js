import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Baguetest from "../componnent/Baguetest";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import { ListeBaguestest } from "../actions/baguetestActions";
import "../index.css";
import "react-multi-carousel/lib/styles.css";
import ExploreDiamonds from "../componnent/ExploreDiamonds";
import "../styles/ExploreDiamonds.css";
import "../styles/Carsoleprod.css";
import Slider from "../componnent/Slider";

import "animate.css/animate.min.css";

import Service from "../componnent/Service";
import DiamantSection from "../componnent/DiamantSection";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-elastic-carousel";
import Creation from "../componnent/Creation";
import { ListeDiamants } from "../actions/diamantActions";
import { Link } from "react-router-dom";
import Swatch from "../componnent/swatch";
export default function HomeScreen() {
  const dispatch= useDispatch();
  const baguetestList = useSelector((state) => state.baguetestList);
  const { loading, error, baguestest } = baguetestList;
  const diamantList = useSelector((state) => state.diamantList);
  const {  diamants } = diamantList;
  useEffect(()=>
  {
  dispatch(ListeBaguestest({}));
  dispatch(ListeDiamants({}));
  },[dispatch]);

   
  const breakPoints = [
    { width: 200, itemsToShow: 2 },
    { width: 500, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 }
  ];
  
  
 
  return (
    <div >
    <header>
    <Slider/>
    </header>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        <hr class="ligne">
                </hr>
                <div class="section-title-2 text-center mb-60"><h2>Nos Services</h2></div>
              
                <div>
              <Service/>
              </div>
              <hr class="ligne">
                </hr>
                <Creation/>
                <hr class="ligne">
                </hr>
                <div class="section-title-2 text-center mb-60"><h2 className="ob dorey espacey">Nouveauté</h2>
                <p>Décovrir les nouveau produits</p></div>
       
          <hr class="ligne">
                </hr>
                
                
       <div>
     
       <Carousel breakPoints={breakPoints} autoPlay={5000}>
              {baguestest && baguestest.map((baguestest) => (
                <Baguetest
                  key={baguestest._id}
                  baguetest={baguestest}
                 
                ></Baguetest>
              ))}
              </Carousel>
            
          
              </div>
             
                <div style={{ backgroundImage: "url(https://images.i-diamants.com/images/news2.jpg)" }}>
                <hr class="ligne">
                </hr>
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              marginBottom: "20px",
            }}
          >

<i className="ob dorey espacey">Explorez nos diamants</i>
          </h3>

 <hr class="ligne">
                </hr>
          <div data-component-name="CardSlider" className="css-zf4890">
            <div className="css-1rqn9no">
              <ExploreDiamonds />
            </div>
            </div>
            </div>
            <Carousel breakPoints={breakPoints} autoPlay={5000}>
              {diamants && diamants.map((baguestest) => (
                <Baguetest
                  key={baguestest._id}
                  baguetest={baguestest}
                 
                ></Baguetest>
              ))}
              </Carousel>

            <hr class="ligne">
                </hr>
   
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              marginBottom: "20px",
            }}
          >
            <i>
              Be Elegant!
              <span style={{ color: "#c29958" }}>Nos Marque</span> Genève
            </i>
          </h3>
          
          <hr class="ligne">
                </hr>
          
        <Swatch/>    
            

 
			<hr class="ligne">
                </hr>
                <DiamantSection/>
                <br/>

	
         
                

          
        
         
           
          
        </>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { createReview, detailsBaguetest } from "../actions/baguetestActions";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import Rating from "../componnent/Rating";
import Zoom from 'react-img-zoom'
import "../styles/productpage.css";

import { BAGUETEST_REVIEW_CREATE_RESET } from "../constants/baguetestconstants";
import NavBar from "../componnent/Navbar";


export default function BaguetestScreen(props)
{ 
 
    const params=useParams();
    const Navigate =useNavigate();
  const {id:baguetestId}=params;
  const [qty, setQty] = useState(1);
  const [carat, setCarat] = useState(0.4);
  const [or, setOr] = useState("blanc");


  const dispatch=useDispatch();
    const baguetestDetails = useSelector(state => state.baguetestDetails);
    const { loading, error, baguetest } = baguetestDetails;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
  
    const baguetestReviewCreate = useSelector((state) => state.baguetestReviewCreate);
    const {
      loading: loadingReviewCreate,
      error: errorReviewCreate,
      success: successReviewCreate,
    } = baguetestReviewCreate;
  
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    useEffect(()=>{
      if (successReviewCreate) {
        window.alert('Review Submitted Successfully');
        setRating('');
        setComment('');
        dispatch({ type: BAGUETEST_REVIEW_CREATE_RESET });
      }
        dispatch(detailsBaguetest(baguetestId));
      },[dispatch,baguetestId,successReviewCreate]);
      const addToCartHandle = () => {
        Navigate (`/cart/${baguetestId}?qty=${qty}&carat=${carat}&or=${or}`);
        };
        const submitHandler = (e) => {
          e.preventDefault();
          if (comment && rating) {
            dispatch(
              createReview(baguetestId, { rating, comment, name: userInfo.name })
            );
          } else {
            alert('Please enter comment and rating');
          }
        };
      
    return(
        <div className="aboutmain">
          <header className='head' >
      <NavBar/>
              </header>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
           
            <div className="prow" >
              <div className="pcol-2">
              <Zoom
             img={baguetest.image}
               zoomScale={2}
              width={500}
               height={500}
                    />
              
                    
                
              </div>
              <div className="pcol-1">
              
                <ul>
                  <li>
                    <h1 className="prodtitle">{baguetest.name} <p>A partir de {baguetest.price}dt</p></h1>
                  </li><br/>
                  <li>
                  <h2>
                    Description:
                    </h2>
                    <p className="discrip">{baguetest.description}</p>
                  </li><br/>
                 
                  <li>
                              
                                  <div>
                                  
                                  <div>
                                  <form>
                                  { baguetest.simpleproduct===false &&
                               
                                  <div>
                                  <strong>Selectionner l'or</strong>
                                  <div class="radio-group " id="radiogroup2">
                             <input type="radio" id="option-one" name="selector" value="orBlanc" onChange={e=>setOr(e.target.value)}/>
                           <label for="option-one">
                           <img className="icone" src="../images/ORBLANC.jpg"/> </label>
                           <input type="radio" id="option-two" name="selector" value="orJaune" onChange={e=>setOr(e.target.value)}/>
                                <label for="option-two">
                                <img className="icone" src="../images/ORJAUNE.jpg"/></label>
                                  <input type="radio" id="option-three" name="selector" value="orRose" onChange={e=>setOr(e.target.value)}/>
                                       <label for="option-three"><img className="icone or" src="../images/ORROSE.jpg"/></label><br/>
                                       
                                          </div>
                                            </div>
                                  }
                                          <br/>
                                          </form><br/>
                                          </div>
                                 
                                          {baguetest.choicecarat &&
                                          <div id="form-wrapper">
                                          
                                          <form>
                                          
                                      
                                  <strong>Selectionner carat</strong>
                                  <div class="radio-group">
                             <input type="radio" id="propone" name="selector" value="0.4" onChange={e=>setCarat(e.target.value)}/>
                           <label for="propone">
                           0.4 ct </label>
                           <input type="radio" id="proptwo" name="selector" value="0.7" onChange={e=>setCarat(e.target.value)} />
                                <label for="proptwo">
                                0.7 ct</label>
                                  <input type="radio" id="propthree" name="selector" value="0.8" onChange={e=>setCarat(e.target.value)}/>
                                       <label for="propthree">0.8 ct</label><br/>
                                       
                                          </div><br/>
                                          </form>
	
</div>
}
                                        
                                 </div>
      
                      </li>
                  
                
                 
                </ul>
              </div>
              <div className="pcol-1">
                <div className="pcard pcard-body">
                  <ul>
                    <li>
                      <div className="prow">
                        <div className="discrip">Prix :  </div>
                        {baguetest.choicecarat? (
                        <div ><p className="price"> {baguetest.masse*127+ carat*baguetest.nbrpiere*2200}dt</p></div>
                        ):(
                          <div>{baguetest.price}</div>
                        )}
                      </div>
                    </li><br/>
                    <li>
                      <div className="prow">
                        <div><p>Status: </p></div>
                        <div>
                          {baguetest.countInStock > 0 ? (
                            <span className="success"><p className="success">  In Stock</p></span>
                          ) : (
                            <span className="danger"><p className="success">  Unavailable</p></span>
                          )}
                        </div>
                      </div>
                    </li><br/>
                  
                    
                    {baguetest.countInStock > 0 && (
                      
                      <>
                      <li>
                        <div className="prow">
                          <div>
                            <select value={qty} onChange={e=>setQty(e.target.value)}>
                              {
                                [...Array(baguetest.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )
                              }
                            </select>
                          </div>
                        </div>
                      </li><br/>
                      <li> <button
                         onClick={addToCartHandle}
                          className="primary block"
                        >Add to Cart</button>
                  </li>
                     
                      </>

                     )}
                    
                   
                    </ul>
                    </div>
                    </div><br/>

                    <div className="pcol-3"> 
            <h2 id="reviews">Reviews</h2>
            {baguetest.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {baguetest.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}<br/>
              <li>
                {userInfo ? (
                  <form  onSubmit={submitHandler}>
                    <div>
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label><br/>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label><br/>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="primary" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
          </div>
                </div>
                
            </div>
           

            
             )}
             </div>
        
    );
}

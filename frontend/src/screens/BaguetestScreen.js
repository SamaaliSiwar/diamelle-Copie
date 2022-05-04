import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { createReview, detailsBaguetest } from "../actions/baguetestActions";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
import Rating from "../componnent/Rating";
import Zoom from 'react-img-zoom'
import { BAGUETEST_REVIEW_CREATE_RESET } from "../constants/baguetestconstants";


export default function BaguetestScreen(props)
{ 
    const params=useParams();
    const Navigate =useNavigate();
  const {id:baguetestId}=params;
  const [qty, setQty] = useState(1);
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
        Navigate (`/cart/${baguetestId}?qty=${qty}`);
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
        <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
           
            <div className="row top">
              <div className="col-2">
              <Zoom
             img={baguetest.image}
               zoomScale={2}
              width={500}
               height={500}
                    />
              
                    
                
              </div>
              <div className="col-1">
              
                <ul>
                  <li>
                    <h1 className="prodtitle">{baguetest.name}</h1>
                  </li><br/>
                  <li>
                  <h2>
                    Description:
                    </h2>
                    <p className="discrip">{baguetest.description}</p>
                  </li><br/>
                  <li className="discrip">Pirx:<p className="price">A partir de {baguetest.price}dt</p></li><br/>
                  
                  <li>
                  <h2>Avis : </h2><br/>
                    <Rating
                      rating={baguetest.rating}
                      numReviews={baguetest.numReviews}
                    ></Rating>
                  </li><br></br>
                  <li>
                    <select>
                    
                    <option><img src="../images/ORBLANC.jpg"/></option>
                    <option><img src="../images/ORJAUNE.jpg"/></option>
                    <option><img src="../images/ORROSE.jpg"/></option>
                              
                       </select>
                  </li>
                 
                </ul>
              </div>
              <div className="col-1">
                <div className="card card-body">
                  <ul>
                    <li>
                      <div className="row">
                        <div className="discrip">Prix :  </div>
                        <div ><p className="price"> {baguetest.price}dt</p></div>
                      </div>
                    </li><br/>
                    <li>
                      <div className="row">
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
                        <div className="row">
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
                     
                      </>

                     )}
                     <li> <button
                         onClick={addToCartHandle}
                          className="primary block"
                        >Add to Cart</button>
                  </li>
                   
                    </ul>
                    </div>
                    </div><br/>
                    <div>
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

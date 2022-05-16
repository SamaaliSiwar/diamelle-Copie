import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListeDiamants } from "../actions/diamantActions";
import Diamant from "../componnent/Diamant";
import LoadingBox from "../componnent/LoadingBox";
import MessageBox from "../componnent/MessageBox";
export default function AlldiamantScreen()
{
    const dispatch= useDispatch();
    const diamantList = useSelector((state) => state.diamantList);
    const { loading, error, diamants } = diamantList;
    useEffect(()=>
    {
    dispatch(ListeDiamants({}));
    },[dispatch]);
    return(
        <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : ( 
          <>
          {diamants.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row center">
                {diamants.map((diamant) => (
                  <div key={diamant._id} className="card">
      <Link to={`/diamant/${diamant._id}`}>
        <img className="medium" src={diamant.image} />
      </Link>
      <div className="card-body">
        
          <h2>{diamant.shape}</h2>
        
        
        <div className="row">
          <div className="price">{diamant.price}dt</div>
         
        </div>
      </div>
    </div>
                ))}
              </div>
        </>
)}
</div>
    )
    
}
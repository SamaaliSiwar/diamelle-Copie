import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        
          <div class="table-wrapper">
          {diamants.map((diamant) => (
    <table class="fl-table">
        <thead>
        <tr>
            <td>shape</td>
            <td>carat</td>
            <td>cut</td>
            <td>couleur</td>
            <td>Prix</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{diamant.shape}</td>
            <td>{diamant.carat}</td>
            <td>{diamant.cut}</td>
            <td>{diamant.couleur}</td>
            <td>{diamant.price}</td>
        </tr>
        </tbody>
              </table>
              ))}
        


          
                   
                  </div></>
)}
</div>
    )
    
}
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/ExploreDiamonds.css";
 
export default function SpecialMontre() {
  return (
    <div className='text-white'>
    <div className="specialMontre">
       <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url(../images/magma.png)", height: 400 }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
          <i>La marque magma</i>
          
             
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Decovrire
              </a>
          
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}

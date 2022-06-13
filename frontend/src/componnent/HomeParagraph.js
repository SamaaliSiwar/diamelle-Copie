import React from "react";
import { Container } from "react-bootstrap";
 
export default function HomeParagraph() {
  return (
    <>
    <Container>
      <h5
        style={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" ,color:"white" }}
      >
        <i>
          <b style={{color:"#c29958" }}>DIAMELLE By JARRAYA</b>
        </i>{" "}
        est une bijouterie installée sur Tunis depuis 1978.
        <br />
        <br />
        C’est dans notre atelier que nos bijoux sont fabriqués avec le plus
        grand soin et la plus grande exigence. Chacun de nos bijoux répond à des
        critères de qualité joaillière grâce à un savoir-faire artisanal.
      </h5>
     
    </Container>
    <div>
      <span class="ob dorey espacey"
     data-href="NDcsIDEwMiwgMTE0LCA0NywgMTA2LCAxMTEsIDk3LCAxMDUsIDEwOCwgMTA4LCAxMDEsIDExNCwgMTA1LCAxMDEsIDQ3LCA5OCwgOTcsIDEwMywgMTE3LCAxMDEsIDQ1LCAxMDAsIDEwNSwgOTcsIDEwOSwgOTcsIDExMCwgMTE2LCA0NSwgOTksIDExNCwgMTAxLCA5NywgMTE2LCAxMDEsIDExNywgMTE0LCAxMTUsIDQ1LCAxMTYsIDEwMSwgMTE0LCAxMTQsIDEwMSwgNDUsIDEwMCwgMTAxLCAxMDAsIDEwMSwgMTA4LCAxMTksIDEwMSwgMTA1LCAxMTUsIDExNSwgNDYsIDEwNCwgMTE2LCAxMDksIDEwOCwgNDQsIDQ4LCA1MCwgNTQsIDQ4" 
     target="_blank">Découvrir</span>
     </div>
     </>
  );
}

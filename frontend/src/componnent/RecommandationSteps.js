import React from 'react';
import "../styles/Paiment.css";


export default function RecommandationSteps(props) {
  return (
    <div className="prow checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Connecter</div>
      <div className={props.step2 ? 'active' : ''}>Laivraison</div>
      <div className={props.step3 ? 'active' : ''}>Paiment</div>
      <div className={props.step4 ? 'active' : ''}>Place Recommandation</div>
    </div>
  );
}
import React from "react";
import "../styles/Service.css"
export default function Service()
{
    return(
        <>
		<ul>
        <li>
        <div class="owl-item active" >
        <div class="col4 bord">
        <img class="icone" src="https://www.i-diamants.com/images/icon-diamant.svg" alt="Diamant"/>
        <p>Qualité exceptionnellede la pierre et du bijou</p></div></div></li>
        <li><div class="owl-item active" >
        <div class="col4 bord">
        <img class="icone" src="https://www.i-diamants.com/images/icon-tel.svg" alt="Contact i-diamants"/><p>
        Service client à votre écoute assuré par des diamantaires</p></div></div></li>
        <li>
        <div class="owl-item active" >
        <div class="col4">
        <img class="icone" src="https://www.i-diamants.com/images/icon-text.svg" alt="Livraison diamant garantie"/><p>
        Livraison sous scellé avec un certificat de qualité</p></div></div></li>
        </ul>
    </>
    )
}
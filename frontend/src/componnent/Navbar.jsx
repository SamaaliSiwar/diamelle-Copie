import React from "react";
import "../styles/navBar.css";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Singin from "./Singin";
import Cart from "./Cart";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
 
export default function NavBar() {
  return (
    <div className='d-flex justify-content-center align-items-center h-100' style={{ backgroundColor: "black" }}>
    <nav className="navbar navbar-expand-md  sticky-top"
      style={{ backgroundColor: "black" }}>
      <div className="navbar-toggler-right">
        <button
          className="navbar-toggler menuMobileButton"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <AiOutlineMenu size="20" color="#C29958" />
        </button>
      </div>
      <div className="container">
        <div className="collapse navbar-collapse flex-column " id="navbar">
          <ul
            className="navbar-nav nav justify-content-between w-100 bg-transparent"
            style={{ marginBottom: "20px" }}
          >
            <li className="nav-item dropdown">
              <a
                className="nav-link "
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <AiOutlineSearch size="20" color="#C29958" />
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
              <SearchBox/>
              </div>
            </li>
            <li className="nav-item logo">
              <a href="/">
                <img
                  className="d-none d-md-block"
                  src="https://diamelle.tn/wp-content/uploads/2021/11/logo-1-2.png"
                  alt="home"
                />
              </a>
            </li>
            <li className="nav-item active">
              <div className="hstack">
                  <Singin/>
                  
              
              <Cart/>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav  w-100 px-3 justify-content-center">
            <li className="nav-item dropdown dropdownList">
              <div
                className="nav-link "
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Maison Diamelle
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/about">
                  <div className="dropdownImageContainer">
                    <img
                      className="dropdownImage"
                      src="https://diamelle.tn/wp-content/uploads/2021/06/Boucle_20210528_204733_0001_resized_20210530_080504143-300x169.jpg"
                    />
                    <div className="imageLabel">Maison Diamelle</div>
                  </div>
                </a>
                <a className="dropdown-item" href="#">
                  <div className="dropdownImageContainer">
                    <img
                      className="dropdownImage"
                      src="https://diamelle.tn/wp-content/uploads/2021/06/Bague_20210528_204733_0000_resized_20210530_080504231-300x169.jpg"
                    />
                    <div className="imageLabel">Biographie</div>
                  </div>
                </a>
                <a className="dropdown-item" href="/about">
                  <div className="dropdownImageContainer">
                    <img
                      className="dropdownImage"
                      src="http://diamelle.tn/categories/pendentifs/"
                    />
                    <div className="imageLabel">Maison écrosponsable</div>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown dropdownList">
              <div
                className="nav-link "
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Nos Collections
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/search/categorie/fiançailles">
                  <div className="dropdownImageContainer">
                    <img
                      className="dropdownImage"
                      src="https://diamelle.tn/wp-content/uploads/2021/06/Bague_20210528_204733_0000_resized_20210530_080504231-300x169.jpg"
                     
                    />
                    <div className="imageLabel"> Bagues diamants </div>
                  </div>
                </a>
                <a className="dropdown-item" href="/search/categorie/Colorie">
                  <div className="dropdownImageContainer">
                    <img
                      className="dropdownImage"
                      src="images/collier.jpg"
                      // "diamelle.tn/wp-content/uploads/2021/05/slide3-scaled-100x50.jpg"
 
                    />
                    <div className="imageLabel">colliers</div>
                  </div>
                </a>
 
                <a className="dropdown-item" href="/search/categorie/Horogie">
                  <div className="dropdownImageContainer">
                    <img
                      className="dropdownImage"
                      src="../images/montre1jpg.jpg"
                     
                    />
                    <div className="imageLabel">Montres</div>
                  </div>
                </a>
                <a className="dropdown-item" href="/search/categorie/sample%20category">
                  <div className="dropdownImageContainer">
                    <img
                      className="dropdownImage"
                      src="https://diamelle.tn/wp-content/uploads/2021/05/slide22-scaled-100x50.jpg"
 
                    />
                    <div className="imageLabel">Autres bijoux</div>
                  </div>
                </a>
 
              </div>
            </li>
            <li className="nav-item dropdown dropdownList">
              <div
                className="nav-link "
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Nos Diamants
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to={"/diamants"}>
                  <div className="dropdownImageContainer">
                    <img
                      className="dropdownImage"
                      src="https://diamelle.tn/wp-content/uploads/2021/06/Boucle_20210528_204733_0001_resized_20210530_080504143-300x169.jpg"
                    />
                    <div className="imageLabel">Explore Diamants</div>
                  </div>
                </Link>
                </div>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Contactez-nous
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
 

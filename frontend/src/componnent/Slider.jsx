import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/slider.css";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import Singin from "./Singin";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const charPoses = {
  exit: { opacity: 0, x: 20 },
  enter: {
    opacity: 1,
    x: 0
  }
};
const Slider = () => {
  return (
    

    <Carousel className="carousalHight">
     
      <Carousel.Item className="carousalHight">
        <img
          className="d-block w-100 carousalHight"
          src="images/hover3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <nav className="navbar navbar-expand-md  sticky-top"
     >
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
                <input
                  className="form-control border-end-0 border-start-0 border-bottom-0 border-top-0"
                  type="search"
                  placeholder="Chercher"
                />
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
        <div className='d-flex justify-content-center align-items-center h-100'>
   
              <a href="/fr/certificat-du-diamant-gia-hrd-igi.html,00026" className="css-3dvuxu">
              <p className="para">
					<h3 class="h3section">Diamants Certifiés</h3>
					<p class="certitre para">Par 3 organismes mondialement reconnus :</p></p>
                    <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                    Decovrire
                  </a>
                </a>
              
                 
                
              
              </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousalHight">
        <img
          className="d-block w-100 carousalHight"
          src="../images/Boucle.jpg"
          alt="Third slide"
        />
 
        <Carousel.Caption>
        <nav className="navbar navbar-expand-md  sticky-top"
     >
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
                <input
                  className="form-control border-end-0 border-start-0 border-bottom-0 border-top-0"
                  type="search"
                  placeholder="Chercher"
                />
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
        <div className='d-flex justify-content-center align-items-center h-100'>
              <a href="/fr/certificat-du-diamant-gia-hrd-igi.html,00026" className="css-3dvuxu">
				      <p className="para">
					<h3 class="h3section">Diamants Certifiés</h3>
					<p class="certitre para">Par 3 organismes mondialement reconnus :</p></p>
                    <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                    Decovrire
                  </a>
                </a>
              
                 
                
              
              </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousalHight">
        <img
          className="d-block w-100 carousalHight"
          src="../images/104411201_2345868562384235_2078362000326422757_n.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <nav className="navbar navbar-expand-md  sticky-top"
     >
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
                <input
                  className="form-control border-end-0 border-start-0 border-bottom-0 border-top-0"
                  type="search"
                  placeholder="Chercher"
                />
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
                </Link>      </div>
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
        <div className='d-flex justify-content-center align-items-center h-100'>
              <a href="/fr/certificat-du-diamant-gia-hrd-igi.html,00026" className="css-3dvuxu">
              <p className="para">
					<h3 class="h3section">Diamants Certifiés</h3>
					<p class="certitre para">Par 3 organismes mondialement reconnus :</p></p>
				
                    <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                    Decovrire
                  </a>
                </a>
              
              
                 
                
              
              </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
 
export default Slider;

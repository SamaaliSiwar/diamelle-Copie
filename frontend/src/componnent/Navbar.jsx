import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import React from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import cartItems from "../screens/CartScreen";
import styled from "styled-components";
import { mobile } from "../responsive";
import Cart from "./Cart";
import toggleMobileMenu from "./toggleMobileMenu";
import Singin from "./Singin";
import SearchBox from "./SearchBox";
import Categorieelemt from "./categorieelemt";


const Container = styled.div`
  height: 170px;
  ${mobile({ height: "160px" , display: "none"})}
`;


const Wrapper = styled.div`
  padding: 10px 20px;
  height:80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px",display: "none" })}
`;
const Wrapper1  = styled.ul`

align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px", })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 12px;
  color:white;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <div id="hamburger-icon" onClick={toggleMobileMenu}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <ul class="mobile-menu">
          <li><a className="navlink" href="/">Nos Collection</a></li>
          <li><a className="navlink" href="/">Nos Diamants</a></li>
          <li><a className="navlink" herf="/about">About</a></li>
          <li><a className="navlink" href="/">Contact</a></li>
          
        </ul>
        </div>
        </Left>
        <Center>
        
        <Link  to="/" className="logo"><img className="imlog" src="../images/logo-footer.png" alt="home"></img></Link>        
        </Center>
     
        <Right>
          <MenuItem>
          <Singin/>
          </MenuItem>
          <MenuItem>
     

         
        <Cart/>
            
          </MenuItem>
        </Right>
      </Wrapper>
     <Wrapper1>
      <br/>
      <nav>
        <ul className="nav">
        <li><Categorieelemt/></li>
         <li><Link className="navlink" to="/">Nos Diamants</Link></li>
          <li><Link  to="/about" className="navlink">About</Link></li>
          <li><Link to="/" className="navlink">Contact</Link></li>
         
        </ul>
      </nav>
      
      <Center>
        <SearchBox />
        </Center>
       </Wrapper1>
       
        
    </Container>
  );
};

export default Navbar;
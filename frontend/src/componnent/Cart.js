import { Badge } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Cart()
{
    const cart = useSelector((state) => state.cart);
const { cartItems } = cart;

return(
    <Link to="/cart"> 
    

    {cartItems.length > 0 && (
       <Badge badgeContent={cartItems.length  } color="secondary" > <img  className="icone" src="../images/icons8-cart-64.png"/></Badge>
        )||(<img  className="icone" src="../images/icons8-cart-64.png"/>)
       }
      
        

        
        </Link> 
)
};

import { Badge } from "@material-ui/core";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Cart()
{
    const cart = useSelector((state) => state.cart);
const { cartItems } = cart;

return(
    <Link to="/cart">
     <AiOutlineShoppingCart size="20" color="#C29958" />
    {cartItems.length > 0 && (
      <span className="badge">{cartItems.length}</span>
    )}
  </Link>

)
};

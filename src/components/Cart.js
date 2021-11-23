import React, { useContext, useState } from "react";
import "../css/Cart.css";
import { CartContext } from "./CartContext";

const Cart = ({ id, img, title, offerPrice, qty, children }) => {
  const test = useContext(CartContext);

  console.log("cart", test);
  console.log(test.cartList);
  console.log(test.cartList[0].imgItem);

  return (
    <>
      <h2>Carrito de Compras</h2>
      <div className="d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center">
          <img
            src={test.cartList[0].imgItem}
            className="error"
            alt="producto"
          />
        </div>

        <h2 className="text-center">{children}</h2>
      </div>
    </>
  );
};

export default Cart;

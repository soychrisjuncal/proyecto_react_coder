import React, { useContext, useState } from "react";
import "../css/Cart.css";
import { CartContext } from "./CartContext";

const Cart = ({ id, img, title, offerPrice, qty, children }) => {
  const test = useContext(CartContext);

  console.log("cart", test);
  console.log(test.cartList);
  console.log(test.cartList.imgItem);

  return (
    <>
      <h2 className="titleItem text-center">Carrito de Compras</h2>
      <div className="d-flex justify-content-center">
        <button className="btn-dark btnVaciar" onClick={test.removeAll}>
          Vaciar Carrito
        </button>
      </div>
      {test.cartList.map((item) => (
        <div className="d-flex flex-row justify-content-center text-left">
          <img src={item.imgItem} className="imgItem" alt="producto" />
          <h4 className="titleItem">Producto : {item.titleItem}</h4>
          <h5 className="titleItem">Cantidad : {item.qtyItem}</h5>
          <h5 className="titleItem">Precio : {item.offerItem}</h5>
          <button
            className="btn-dark btnBorrar"
            onClick={() => test.deleteItem(item.idItem)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </>
  );
};

export default Cart;

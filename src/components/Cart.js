import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import { CartContext } from "./CartContext";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";

const Cart = () => {
  const test = useContext(CartContext);

  const createOrder = () => {
    let order = {
      buyer: {
        name: "Admin",
        email: "admin@admin.com.ar",
        phone: "123456789",
      },
      item: test.cartList.map((item) => ({
        id: item.idItem,
        title: item.titleItem,
        price: item.offerItem,
        stock: item.stockItem,
        qty: item.qtyItem,
      })),
      total: parseFloat(test.calcTotal()),
    };
    console.log(order);

    const orderInFireS = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    orderInFireS()
      .then((res) => alert(`Compra Confirmada! Su id de compra es: ${res.id}`))
      .catch((err) => console.log(err));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "productos", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem),
      });
    });

    test.removeAll();
  };

  // console.log("cart", test);
  // console.log(test.cartList);
  // console.log(test.cartList.imgItem);

  return (
    <>
      <h2 className="titleItem text-center">Carrito de Compras</h2>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <button className="btn-dark btnContinue">CONTINUE SHOPPING</button>
        </Link>
        <button className="btn-dark btnVaciar" onClick={test.removeAll}>
          Vaciar Carrito
        </button>
      </div>
      <div className="d-flex flex-row">
        <div>
          {test.cartList.map((item) => (
            <div className="d-flex flex-column">
              <div className="d-flex flex-row text-left">
                <img src={item.imgItem} className="imgItem" alt="producto" />
                <h4 className="titleItem">Producto : {item.titleItem}</h4>
                <h5 className="titleItem">Cantidad : {item.qtyItem} </h5>
                <h5 className="titleItem">Precio : {item.offerItem} x U. </h5>
                <h5 className="titleItem">
                  Subtotal: {test.totalItems(item.idItem)}
                </h5>
                <button
                  className="btn-dark btnBorrar"
                  onClick={() => test.deleteItem(item.idItem)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          {test.cartList.length > 0 && (
            <div className="d-flex flex-column justify-content-center contenedorResumen">
              <h4 className="p-2 text-center">Resumen de Compra</h4>
              <h5 className="p-3 text-left">Subtotal: {test.subTotal()}</h5>
              <h5 className="p-3 text-left">IVA 21%: {test.calcIva()}</h5>
              <h3 className="p-3 text-left">TOTAL: {test.calcTotal()}</h3>
              <button onClick={createOrder} className="btn-dark btnConfirmar">
                Confirmar Compra
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

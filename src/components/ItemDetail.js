import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({
  id,
  img,
  title,
  description,
  listPrice,
  offerPrice,
  stock,
  cuotas,
  currentUser,
}) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);
  const [itemStock, setItemStock] = useState(0);

  const onAddCart = (qty, reStock) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);

    if (reStock > 5) {
      alert("Has superado la cantidad de stock disponible");
    }
    alert("you rest " + reStock);
    console.log(reStock);
    setItemStock(reStock);
    test.addToCart(id, img, title, offerPrice, reStock, qty, currentUser);
  };
  return (
    <>
      <div className="contenedor-padre">
        <div className="contenedor-imagen">
          <img src={img} className="w-100" alt="producto" />
        </div>

        <div className="item-info-producto">
          <h2 className="titulo">{title}</h2>

          <div className="description">{description}</div>
          <div className="producto_precio">
            <p className="precio">
              {" "}
              <del>${listPrice}</del> ${offerPrice}
            </p>
            <p>12 cuotas sin Interés de ${cuotas}</p>
          </div>
          <div>
            {itemCount === 0 ? (
              <ItemCount stock={parseInt(stock)} onAddCart={onAddCart} />
            ) : (
              <Link to="/cart">
                {" "}
                <button className="btn-dark p-2">Finalizar Compra</button>{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

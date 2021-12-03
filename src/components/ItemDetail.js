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
}) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAddCart = (qty, reStock) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
    reStock = parseInt(stock - qty);
    console.log(stock);
    test.addToCart(id, img, title, offerPrice, stock, qty);
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
              <ItemCount stock={4} onAddCart={onAddCart} />
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

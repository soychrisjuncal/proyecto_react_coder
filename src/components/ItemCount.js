import React, { useContext, useState } from "react";
import "../css/ItemCount.css";
import { CartContext } from "./CartContext";

const ItemCount = ({ stock, onAddCart }) => {
  const test = useContext(CartContext);
  const [istock, setStock] = useState(parseInt(stock));
  const [count, setCount] = useState(1);
  const [state, setState] = useState(true);

  console.log("itemcount:", istock);

  const increment = () => {
    if (istock === 0) {
      setState(true);
    } else {
      setState(true);
      setCount(count + 1);
      setStock(istock - 1);
    }
  };

  const decrement = () => {
    if (istock >= 5 && count <= 1) {
      setState(true);
    } else {
      setCount(count - 1);
      setStock(istock + 1);
    }
  };
  return (
    <>
      <div className="fondo">
        <input
          id="resta"
          type="submit"
          name="inputname"
          value="-"
          disabled={!state}
          readOnly
          onClick={() => decrement()}
        />

        <input
          id="muestra"
          type="text"
          name="inputname"
          value={count}
          readOnly
        />

        <input
          id="suma"
          type="submit"
          name="inputname"
          value="+"
          disabled={!state}
          readOnly
          onClick={() => increment()}
        />
        <p>Stock Disponible: {istock}</p>

        {count > 0 ? (
          <input
            id="btnAdd"
            type="submit"
            name="inputname"
            value="Agregar al Carrito"
            onClick={() => onAddCart(count)}
          />
        ) : (
          <input
            id="btnAdd"
            type="submit"
            name="inputname"
            value="Agregar al Carrito"
            disabled
          />
        )}
      </div>
    </>
  );
};

export default ItemCount;

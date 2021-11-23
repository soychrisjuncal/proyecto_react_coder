import React, { useContext, useState } from "react";
import "../css/ItemCount.css";
import { CartContext } from "./CartContext";

const ItemCount = ({ titleStock, onAddCart }) => {
  const [stock, setStock] = useState(4);
  const [count, setCount] = useState(1);
  const [state, setState] = useState(true);
  const test = useContext(CartContext);
  console.log("itemcount:", test);

  const increment = () => {
    if (stock === 0) {
      setState(true);
    } else {
      setState(true);
      setCount(count + 1);
      setStock(stock - 1);
    }
  };

  const decrement = () => {
    if (stock >= 5 && count <= 1) {
      setState(true);
    } else {
      setCount(count - 1);
      setStock(stock + 1);
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
        <p>
          {titleStock} {stock}
        </p>

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

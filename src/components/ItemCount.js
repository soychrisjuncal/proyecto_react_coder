import React, { useState } from 'react';
import '../css/ItemCount.css'



const ItemCount = ({ title, titleStock }) => {
    const [stock, setStock] = useState(4);
    const [count, setCount] = useState(1);
    const [state, setState] = useState(true);
  
    const onAdd = () => {
      if (stock === 0) {
        setState(true);
      } else {
        setState(true);
        setCount(count + 1);
        setStock(stock - 1);
      }
    };
  
    const onRest = () => {
      if (stock >= 4 && count <= 1) {
        setState(true);
      } else {
        setCount(count - 1);
        setStock(stock + 1);
      }
    };
    return (
        <>
      <div className="fondo">
        
        <h1>{title}</h1>
        <input
          id="resta"
          type="submit"
          name="inputname"
          value="-"
          disabled={!state}
          readOnly
          onClick={() => onRest()}
        />
  
        <input id="muestra" type="text" name="inputname" value={count} readOnly />
  
        <input
          id="suma"
          type="submit"
          name="inputname"
          value="+"
          disabled={!state}
          readOnly
          onClick={() => onAdd()}
        />
        <p>
          {titleStock} {stock}
        </p>
        <input
          id="hora"
          type="submit"
          name="inputname"
          value="Agregar al Carrito"
          readOnly
        />
      </div>
      </>
    );
  }

  export default ItemCount
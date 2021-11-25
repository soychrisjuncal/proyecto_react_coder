import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (id, img, title, offerPrice, qty) => {
    let found = cartList.find((product) => product.idItem === id);
    found === undefined
      ? setCartList([
          ...cartList,
          {
            idItem: id,
            imgItem: img,
            titleItem: title,
            offerItem: offerPrice,
            qtyItem: qty,
          },
        ])
      : (found.qtyItem += qty);
  };

  const removeAll = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.idItem != id);
    setCartList(result);
  };
  return (
    <>
      <CartContext.Provider
        value={{ cartList, addToCart, removeAll, deleteItem }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;

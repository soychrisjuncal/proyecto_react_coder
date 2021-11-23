import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (id, img, title, offerPrice, qty) => {
    setCartList([
      {
        ...cartList,
        idItem: id,
        imgItem: img,
        titleItem: title,
        offerItem: offerPrice,
        qtyItem: qty,
      },
    ]);
  };
  return (
    <>
      <CartContext.Provider value={{ cartList, addToCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;

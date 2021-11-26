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

  const totalItems = (idItem) => {
    let index = cartList.map((item) => item.idItem).indexOf(idItem);
    return cartList[index].offerItem * cartList[index].qtyItem;
  };

  const subTotal = () => {
    let total = cartList.map((item) => totalItems(item.idItem));
    return total.reduce(
      (previusValue, currentValue) => previusValue + currentValue
    );
  };

  const calcIva = () => {
    return subTotal() * 0.21;
  };

  const calcTotal = () => {
    return (subTotal() + calcIva()).toFixed(2);
  };

  const calcItemCart = () => {
    let qtys = cartList.map((item) => item.qtyItem);
    return qtys.reduce(
      (previusValue, currentValue) => previusValue + currentValue,
      0
    );
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cartList,
          addToCart,
          removeAll,
          deleteItem,
          totalItems,
          subTotal,
          calcIva,
          calcTotal,
          calcItemCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;

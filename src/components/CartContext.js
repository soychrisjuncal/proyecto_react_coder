import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (id, img, title, offerPrice, stock, qty) => {
    let found = cartList.find((product) => product.idItem === id);
    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          idItem: id,
          imgItem: img,
          titleItem: title,
          offerItem: offerPrice,
          stockItem: stock,
          qtyItem: qty,
        },
      ]);
    } else {
      found.qtyItem += qty;
      setCartList([...cartList]);
    }
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
    let totalReduce = total.reduce((previusValue, currentValue) =>
      parseFloat(previusValue + currentValue)
    );
    totalReduce.toFixed(1);
    return totalReduce;
  };

  const calcIva = () => {
    return (subTotal() * 0.21).toFixed(2);
  };

  const calcTotal = () => {
    return parseFloat(subTotal() + parseFloat(calcIva())).toFixed(2);
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

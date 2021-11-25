import React, { useState, useEffect } from "react";
import "../css/ItemListContainer.css";
import ItemList from "./ItemList";
import loader from "../assets/load.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import { productos } from "../utils/productos";
import { useParams } from "react-router";
import inventario from "../utils/inventario";

const ItemListContainer = ({ bienvenida, botonRedes }) => {
  const [datos, setArrayDatos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    inventario(
      2000,
      productos.filter((item) => {
        if (idCategory === undefined) return item;
        return item.categoryId === parseInt(idCategory);
      })
    )
      .then((result) => setArrayDatos(result))

      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <div className="">
      <h1 className="title"> {bienvenida} </h1>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {datos.length > 0 ? (
        <div>
          <ItemList productos={datos} />
        </div>
      ) : (
        <div className="loader">
          <img src={loader} />
        </div>
      )}

      <p>Tienda Online en Construcción.</p>
      <a
        className="App-link"
        href="https://www.instagram.com/kiwi.boards/?hl=es-la"
        target="_blank"
        rel="noopener noreferrer"
      >
        {botonRedes}
      </a>
    </div>
  );
};

export default ItemListContainer;

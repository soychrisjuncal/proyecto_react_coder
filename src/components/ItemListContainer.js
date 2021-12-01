import React, { useState, useEffect } from "react";
import "../css/ItemListContainer.css";
import ItemList from "./ItemList";
import loader from "../assets/load.gif";
import "bootstrap/dist/css/bootstrap.min.css";

import { useParams } from "react-router";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = ({ bienvenida, botonRedes }) => {
  const [datos, setArrayDatos] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((res) => setArrayDatos(res))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <div className="">
      <h1 className="title"> {bienvenida} </h1>
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

import React, { useState, useEffect } from "react";
import "../css/ItemListContainer.css";
import ItemList from "./ItemList";
import loader from "../assets/load.gif";
import "bootstrap/dist/css/bootstrap.min.css";

import { useParams } from "react-router";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = ({ bienvenida }) => {
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
          <img src={loader} alt="loading de carga de datos" />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

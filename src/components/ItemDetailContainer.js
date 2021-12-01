import React, { useState, useEffect } from "react";
import "../css/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import loader from "../assets/load.gif";
import "bootstrap/dist/css/bootstrap.min.css";

import { useParams } from "react-router";

import { firestoreDetailFetch } from "../utils/firestoreFetch";

const ItemDetailContainer = ({ detalle }) => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    firestoreDetailFetch(idItem)
      .then((res) => setDatos(res))
      .catch((err) => console.log(err));
  }, [idItem]);

  // getItem(2000, console.log("Procesando getItem..."))
  //   .then(() => {
  //     getItem(
  //       2000,
  //       setDatos(
  //         productos.filter((item) => {
  //           if (idItem === undefined) return item;
  //           return item.id === parseInt(idItem);
  //         })
  //       )
  //     );
  //     console.log(productos.filter((item) => item.id === parseInt(idItem)));
  //   })

  //   .catch(() => {
  //     console.log("HAY UN PROBLEMA AL CARGAR");
  //   })
  //   .finally(() => {
  //     console.log("Proceso Finalizado");
  //   });
  // }, []);

  return (
    <div>
      <h4> {detalle} </h4>

      <div>
        <ItemDetail
          img={datos.img}
          title={datos.title}
          description={datos.description}
          listPrice={datos.listPrice}
          offerPrice={datos.offerPrice}
          cuotas={datos.cuotas}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;

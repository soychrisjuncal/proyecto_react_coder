import React from "react"
import logo from '../assets/logo.png';
import '../css/ItemListContainer.css'
import ItemCount from "./ItemCount";


const ItemListContainer = ({bienvenida, botonRedes}) => {

return (
<div className="App">
      <header className="">
        <h1 className="title"> {bienvenida} </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ItemCount title="Desafio Clase 5" titleStock="Cantidad de Stock: "/>
        <p>
        Tienda Online en Construcción.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/kiwi.boards/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
        >
          {botonRedes}
        </a>
      </header>
    </div>

)

}

export default ItemListContainer
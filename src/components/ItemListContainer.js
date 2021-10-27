import React from "react"
import logo from '../assets/logo.png';


const ItemListContainer = (props) => {

return (
<div className="App">
      <header className="App-header">
        <h1> {props.bienvenida} </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Tienda Online en Construcción.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/kiwi.boards/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita Nuestras Redes
        </a>
      </header>
    </div>

)

}

export default ItemListContainer
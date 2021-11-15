import React from "react"
import './App.css';

import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (

    <div>
     <NavBar/>
    {/* <ItemListContainer bienvenida="BIENVENIDOS A KIWI" botonRedes="Visita Nuestras Redes"/> */}
    <ItemDetailContainer/>
    <Footer/>
    
    </div>
  );
}

export default App;

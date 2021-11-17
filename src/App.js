import React from "react"
import './App.css';

import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer bienvenida="BIENVENIDOS A KIWI" botonRedes="Visita Nuestras Redes"/>}/>
      <Route path='/category/:idCategory' element={<ItemListContainer bienvenida="BIENVENIDOS A KIWI" botonRedes="Visita Nuestras Redes"/>}/>
      <Route path='/itemDetail/:idItem' element={<ItemDetailContainer detalle="BIENVENIDOS A KIWI" />}/>

     </Routes>
   
    
    <Footer/>
    
    </BrowserRouter>
  );
}

export default App;

import React from "react"
import './App.css';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (

    <div>
     <NavBar/>
    <ItemListContainer bienvenida="BIENVENIDOS A KIWI"/>
    <Footer/>
    
    </div>
  );
}

export default App;

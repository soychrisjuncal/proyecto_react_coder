import React, {useState, useEffect} from "react"
import '../css/ItemListContainer.css'
import ItemList from './ItemList';
import loader from '../assets/load.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import { productos } from "../utils/productos";



const ItemListContainer = ({bienvenida, botonRedes}) => {
  
  const [datos, setArrayDatos] = useState([])
  useEffect(()=>{

   

let inventario = (timeout, tarea) => {
  
return new Promise((resolve, reject)=>{
  
let is_ok = true;

if (is_ok){
    setTimeout(()=>{
    resolve(tarea)
  },timeout)
}else{
    reject('Error')

  }

});


};

inventario(0, console.log('Procesando Inventario...'))

.then(() =>  inventario(1000,console.log(productos[0])))
.then(() => inventario(1000,console.log(productos[1])))
.then(() => inventario(1000,console.log(productos[2])))

.then(() => { inventario(1000,setArrayDatos(productos))
console.log(productos)
})

.catch(()=>{
console.log("HAY UN PROBLEMA AL CARGAR")
})
.finally(()=>{
console.log("Proceso Finalizado")

})

},[]);

return (
<div className="">
      
        <h1 className="title"> {bienvenida} </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {datos.length > 0 ? 
        <div>

       
         <ItemList productos={datos} />
        
         </div>
         : 
         <div className="loader">
         <img src={loader} />
         </div>}
 
       
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
     
    </div>

)

}

export default ItemListContainer
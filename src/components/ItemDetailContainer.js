import React, {useState, useEffect} from "react"
import '../css/ItemDetailContainer.css'
import ItemDetail from './ItemDetail';
import loader from '../assets/load.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import { productos } from "../utils/productos";
import { useParams } from "react-router";


const ItemDetailContainer = ({detalle}) => {

const [datos, setDatos] = useState([])
const { idItem } = useParams();
useEffect(()=>{

let getItem = (timeout, tarea) => {

return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(tarea)
      },timeout)

    });
};

getItem(2000, console.log('Procesando getItem...'))

.then(() => { getItem(2000,setDatos(productos.filter(item=>{
    if (idItem === undefined) return item;
    return item.id === parseInt(idItem)
  })))
  console.log(productos.filter(item=>item.id === parseInt(idItem)))
  })
// .then(() => { getItem(4000,setdatos(productos.find(item=>item.id === parseInt(idItem))))
// console.log(productos.find(item=>item.id === parseInt(idItem)))
// })

.catch(()=>{
console.log("HAY UN PROBLEMA AL CARGAR")

})
.finally(()=>{
console.log("Proceso Finalizado")

})

},[]);


    return (
        <div>
            <h4> {detalle} </h4>
            {datos.length > 0 ? 
        <div>

       
        
         <ItemDetail id={datos[0].id} img={datos[0].img} title={datos[0].title} description={datos[0].description} listPrice={datos[0].listPrice} offerPrice={datos[0].offerPrice} cuotas={datos[0].cuotas} />
         </div>
         : 
         <div className="loader">
         <img src={loader} />
         </div>}
        </div>
    )
}

export default ItemDetailContainer

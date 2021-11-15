import React, {useState, useEffect} from "react"
import '../css/ItemDetailContainer.css'
import ItemDetail from './ItemDetail';
import loader from '../assets/load.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import { productos } from "../utils/productos";


const ItemDetailContainer = ({detalle}) => {

const [detail, setDetail] = useState([])
useEffect(()=>{

let getItem = (timeout, tarea) => {

return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(tarea)
      },timeout)

    });
};

getItem(2000, console.log('Procesando getItem...'))


.then(() => { getItem(4000,setDetail(productos))
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
        <div>
            <h4> {detalle} </h4>
            {detail.length > 0 ? 
        
         <ItemDetail img="https://i.ibb.co/hmgGtM1/modShell.jpg" title="Mod. Shell - Balance Boards" description="Tablas de equilibrio Hechas a Mano Modelo Surfer" listPrice="5999.99" offerPrice="4999.99" cuotas={((4999.99) / (12)).toFixed(2)} />
         : 
         <div className="loader">
         <img src={loader} />
         </div>}
        </div>
    )
}

export default ItemDetailContainer

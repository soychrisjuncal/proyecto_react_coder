import React, {useState, useEffect} from "react"
import '../css/ItemListContainer.css'
import ItemList from './ItemList';
import loader from '../assets/load.gif';
import 'bootstrap/dist/css/bootstrap.min.css';



const ItemListContainer = ({bienvenida, botonRedes}) => {
  
  const [datos, setArrayDatos] = useState([])
  useEffect(()=>{

    const productos = [
      {   id:'t1',
          category:'tablas',
          img:"https://i.ibb.co/hmgGtM1/modShell.jpg",
          img2:"../assets/modShell.jpeg",
          img3:"../assets/modShell.jpeg",
          title:'Mod.Shell - Balance Boards',
          description:"Tablas de equilibrio Hechas a Mano Modelo Surfer",
          stock:'5',  
          offerPrice:4999.99,
          listPrice:5999.99,
          cuotas: ((4999.99) / (12)).toFixed(2)
      },
    
      {   id:'t2',
          category:'tablas',
          img:"https://i.ibb.co/mc3v6hL/modSeed.jpg",
          img2:"../assets/img/modShell.jpeg",
          img3:"../assets/img/modShell.jpeg",
          title:'Mod.Seed - Balance Boards',
          description:"Tablas de equilibrio Hechas a Mano Modelo Skater",
          stock:'5',
          offerPrice:4999.99,
          listPrice:5999.99,
          cuotas: ((4999.99) / (12)).toFixed(2)
           
      },
    
      {   id:'t3',
          category:'tablas',
          img:"https://i.ibb.co/gT8nXq4/modPulp.jpg",
          img2:"../assets/img/modShell.jpeg",
          img3:"../assets/img/modShell.jpeg",
          title:'Mod.Pulp - Balance Boards',
          description:"Tablas de equilibrio Hechas a Mano Modelo Simétrico",
          stock:'5',
          offerPrice:4999.99,
          listPrice: 5999.99, 
          cuotas: ((4999.99) / (12)).toFixed(2)
      },
    ];

  
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
         <ItemList productos={datos} />
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
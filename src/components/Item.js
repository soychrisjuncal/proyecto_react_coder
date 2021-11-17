import React from 'react'
import ItemCount from './ItemCount'
import '../css/Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { style } from 'dom-helpers';


function Item({id,img,img2,img3,title,description,listPrice,offerPrice,cuotas}) {
    return (
       <>

    <div className="m-4 contenedor-producto row justify-content-center">
     <Link  to={`/itemDetail/${id}`} className="link">
        <div className="producto-info">
                    <div className="artc-img-item">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active hover ">
                            <img src={img} className="d-block w-100" alt="producto"/>
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="producto"/>
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="producto"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                    </div>
                    </div>
               
            </div>
            <div className="item-info-producto">
                
                <h4>{title}</h4> 
                <div>{description}</div>
                <div className="producto_precio">
                    <p> <del>${listPrice}</del> ${offerPrice}</p>
                    <p>12 cuotas sin Interés de  ${cuotas}</p>
                </div>
                <div className="contenedorBtn">
               <Link to={`/itemDetail/${id}`}> <button className="btnComprar">Comprar</button></Link>
                </div>
                {/* <ItemCount title="Desafio Clase 5" titleStock="Cantidad de Stock: "/> */}
               
            </div>
            </Link>  
    </div>     
      
       </>
    )
}

export default Item

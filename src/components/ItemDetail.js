import React from 'react'
import ItemCount from './ItemCount'
import '../css/ItemDetail.css'

const ItemDetail = ({img,title,description,listPrice,offerPrice,cuotas}) => {
    return (
    <>
    <div className="contenedor-padre">

        <div className="contenedor-imagen">

            <img src={img} className="w-100" alt="producto"/>

        </div>

    <div className="item-info-producto">
                <h2 className="titulo">{title}</h2>
                
                <div className="description">{description}</div>
                <div className="producto_precio">
                    <p className="precio"> <del>${listPrice}</del> ${offerPrice}</p>
                    <p>12 cuotas sin Interés de  ${cuotas}</p>
                </div>
                <ItemCount title="Desafio Clase 5" titleStock="Cantidad de Stock: "/>
    </div>

    </div>

   



       </>


            
     
    )
}

export default ItemDetail

import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './../../main.css'


const ItemDetail = ({ item }) => {
    const { nombre, stock, imagen, precio } = item;

    return (
        <div className='contenedor'>
            <div className="card">
                <header className="card-header">
                    <h2 className="card-header-title is-centered">
                        {nombre}
                    </h2>
                </header>
                <div className='card-image'>
                    <figure className='image img-prod'>
                        <img src={imagen} alt='Imagen que no carga, a resolver con BD' className="ItemImg is-centered" />
                    </figure>
                </div>
                <section className='card-content info'>
                    <p className="">
                        Precio: $ {precio}.
                    </p>
                    <p className="">
                        Stock Disponible: {stock}.
                    </p>
                </section>
                <footer className="card-footer ">
                    <div className='card-footer-item container'>
                        <ItemCount initial={0} stock={stock} onAdd={(quantity) => {console.log(`Agregando al carrito ${(quantity)} unidades!`)}} />
                    </div>
                </footer>
                <div className='content'>
                <div className="back button is-light" > <Link to={'/category/:id'}>Volver</Link></div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail
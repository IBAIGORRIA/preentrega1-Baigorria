import { Link } from 'react-router-dom'
import './Item.css'

const Item =({id, nombre, imagen, precio, stock}) => {
    return(
        <div className='column is-one-third'>
            <div className="card">
            <header className="card-header">
                <h2 className="card-header-title is-centered">
                    {nombre}
                </h2>
            </header>
            <div className='card-image'>
                <figure className='image img-prod'>
                    <img src={imagen} alt='Imagen que no carga, a resolver con BD' className="ItemImg is-centered"/>
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
            <footer className="card -footer ">
                <div className="container is-centered details">
                <div className="Details button is-light" > <Link to={`/item/${id}`}>Ver detalles</Link></div>
                </div>
            </footer>
        </div>
        </div>
    )


}

export default Item
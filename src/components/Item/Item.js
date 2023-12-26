import { Link } from 'react-router-dom'
import './Item.css'
import '../../main.css'


const Item =({id, nombre, imagen, precio, stock}) => {
    
    return(
        <div className='column is-one-third'>
            <div className="card">
            <header className="card-header">
                <h2 className="card-header-title is-centered">
                    {nombre}
                </h2>
            </header>
            <div className='container'>
                    <img src={imagen} alt='Imagen que no carga, a resolver con BD' className="img-prod "/>
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
                <div className="Details button gral-button" > <Link to={`/item/${id}`}>Ver detalles</Link></div>
                </div>
            </footer>
        </div>
        </div>
    )


}

export default Item
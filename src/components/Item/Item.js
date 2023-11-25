import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item =({id, nombre, imagen, precio, stock}) => {
    return(
        <div className='column is-one-fifth'>
            <div className="card">
            <header className="card-header">
                <h2 className="card-header-title is-centered">
                    {nombre}
                </h2>
            </header>
            <div className='card-image'>
                <figure className='image img-prod'>
                    <img src={imagen} alt={nombre} className="ItemImg"/>
                </figure>
            </div>
            <section className='card-content info'>
                <p className="">
                    Precio: $ {precio}.
                </p>
                <p className="">
                    Stock Disponible: {stock}.
                </p>
                <ItemCount initial={0} stock={ stock } onAdd={(quantity) => console.log("Agregado al carrito!")}/>
            </section>
            <footer className="card -footer">
                <button className="Details" id={id}> Ver detalles</button>
            </footer>
        </div>
        </div>
    )


}

export default Item
import{ useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './../../main.css'
import {CartContext} from '../CartContext/CartContext'


 const ItemDetail = ({ item }) => {
    const { nombre, stock, imagen, precio } = item;
    const [quantityAdded, setQuantityAdded] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const { cart} = useContext(CartContext)
    const { addItem } = useContext(CartContext);

    console.log(cart)

    const handleAddToCart = (quantity) => {
        setQuantityAdded(quantity);
        addItem(item, quantity)
    }

    const increment = () => {
        if (quantity <  stock ) {
            setQuantity(quantity + 1);
            console.log('sumando')
        };
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            console.log('restando')
        };
    };

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
                  { 
                    quantityAdded>0 ? (
                        <>
                        <div className="back button is-light" >  <Link to='/cart' className='Option'>Terminar Compra</Link></div>
                        <div className="back button is-light" > <Link to={'/productos'}>Volver</Link></div>
                        </>
                    ):(
                    <div className='card-footer-item container'>
                        <ItemCount cantidad={quantity} increment={increment} decrement={decrement} stock={stock} addToCart={handleAddToCart} />
                        
                    </div>
                    )}
                </footer>

            </div>

        </div>
    )
}

export default ItemDetail
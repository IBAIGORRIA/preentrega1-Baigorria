import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './../../main.css'
import './ItemDetail.css'
import { CartContext } from '../CartContext/CartContext'


const ItemDetail = ({ item }) => {
    const { nombre, stock, imagen, precio } = item;
    const [quantityAdded, setQuantityAdded] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const { cart } = useContext(CartContext)
    const { addItem } = useContext(CartContext);

    console.log(cart)

    const handleAddToCart = (quantity) => {
        setQuantityAdded(quantity);
        addItem(item, quantity)
    }

    const increment = () => {
        if (quantity < stock) {
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
        <div className='itemDetails'>

            <section className='hero'>
                <div className='hero-body'>
                    <p className="title">{nombre}</p>
                </div>
            </section>
            <div className='container is-flex is-align-items-center is-justify-content-center'>
                <div className="centered-content">
                    <img src={imagen} alt='Imagen que no carga, a resolver con BD' className="centered-image" />
                    <section className='info'>
                        <p>
                            Precio: $ {precio}.
                        </p>
                        <p>
                            Stock Disponible: {stock}.
                        </p>
                    </section>
                </div>
            </div>


            <footer className=" ">
                {
                    quantityAdded > 0 ? (
                        <div className='controles container'>
                            <button className="button is-light bttn-back" > <Link to={'/products'}>Volver</Link></button>
                            <button className="button bttn-terminar" >  <Link to='/cart' className='Option'>Terminar Compra</Link></button>
                        </div>
                    ) : (
                        <div className='card-footer-item container'>
                            <ItemCount cantidad={quantity} increment={increment} decrement={decrement} stock={stock} addToCart={handleAddToCart} />

                        </div>
                    )}
            </footer>



        </div>
    )
}

export default ItemDetail
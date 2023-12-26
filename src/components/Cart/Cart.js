import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"
import { CartItem } from "../CartItem/CartItem"
import './Cart.css'

export const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    console.log(totalPrice, totalQuantity)


    if (totalQuantity === 0) {

        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <p className="title">
                            No hay Items en el Carrito :(
                        </p>
                    </div>
                    <button className="button is-light"> <Link to='/' className="Option">Volver a Inicio</Link> </button>
                </section>
            </div>
        )
    }

    return (
        <>

            {cart.map(p => <CartItem key={p.id}{...p} />)}
            <div className='container is-flex is-flex-direction-row is-align-items-center is-justify-content-center'>
                <div className="centered-content">
                    <h3>Total Items: {totalQuantity} </h3>
                    <br />
                    <h3>Total: ${totalPrice} </h3>
                </div>
            </div>
                <div className="controles">
                <button className="button is-warning" onClick={() => clearCart()}>Limpiar Carrito</button>
                <button className="button is-success"> <Link to='/checkout' /> Finalizar Compra </button>
                </div>
            
        </>
    )

}
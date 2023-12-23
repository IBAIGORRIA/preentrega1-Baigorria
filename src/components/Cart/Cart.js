import { useContext } from "react"
import { Link } from "react-router-dom"
import {CartContext} from "../CartContext/CartContext"
import { CartItem } from "../CartItem/CartItem"


export const Cart =() =>{
    const {cart ,clearCart, totalQuantity,totalPrice} = useContext(CartContext)

    console.log(totalPrice, totalQuantity)


    if(totalQuantity === 0 ){

        return(
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <p className="title">
                            No hay Items en el Carrito :(
                        </p>
                    </div>
                    <button className="button is-light"> <Link to ='/' className="Option">Volver a Inicio</Link> </button>
                </section>
            </div>
        )
    }

    return(
        <div>

            {cart.map(p =><CartItem key={p.id}{...p}/>)}
            
            <h3>Total Items: {totalQuantity} </h3>
            <h3>Total: ${totalPrice} </h3>

            <button className="button is-warning" onClick={()=> clearCart()}>Limpiar Carrito</button>
            <button className="button is-light"> <Link to='/checkout'/> Finalizar Compra </button>
        </div>
    )

}
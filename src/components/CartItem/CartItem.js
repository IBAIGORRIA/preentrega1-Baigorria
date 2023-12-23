import { CartContext } from "../CartContext/CartContext"
import { useContext } from "react"
import "./cartItem.css"
import { Link } from "react-router-dom"

export const CartItem = ({ imagen, nombre, quantity, precio, id }) => {

    const { removeItem } = useContext(CartContext)
    const { cart } = useContext(CartContext)


    return (

        <div class="container cart-item notification">


            <img src={imagen} alt={nombre} className="imagen"/>


            <h2>{nombre} </h2>

            <p>Cantidad: {quantity} unidades</p>
            <p>Subtotal: {quantity * precio} </p>
            <button className="button" onClick={() => removeItem(id)}>Eliminar</button>


        </div>
    )

}
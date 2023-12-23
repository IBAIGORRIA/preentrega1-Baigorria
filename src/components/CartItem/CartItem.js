import { CartContext } from "../CartContext/CartContext"
import { useContext } from "react"


export const CartItem = ({products})=>{

    const {removeItem} = useContext(CartContext)
    const {cart} = useContext(CartContext)


return (
    <div>
        <picture>
            <img src={products.imagen} alt={products.nombre} />
        </picture>
        <div>
            <h2>{products.nombre} </h2>
            <p>Cantidad: {products.cantidad} unidades</p>
            <p>Subtotal: {products.cantidad*products.precio} </p>
            <button onClick={()=> removeItem(products.id)}>Eliminar</button>
        </div>

    </div>
)

}
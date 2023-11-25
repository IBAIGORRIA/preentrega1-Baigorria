import { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ stock, initial, onAdd,msg}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment =() =>{
        if (quantity<{stock}) {
                setQuantity(quantity+1)
                
        };
    };

    const decrement =() =>{
        if (quantity>1) {
            setQuantity(quantity-1)
            console.log('restando')
        };
    };


return(
    <div className="Counter">
        <div className="controles level is-centered">
            
                <button className="button is-danger" onClick= {decrement}>-</button>
                <h5 className="Numero"> {quantity} </h5>
                <button className="button is-success" onClick= {increment}>+</button>
            
        </div>
        <div>
            <button className="button producto-agregar" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar Al Carrito
            </button>
            <h5> {msg} </h5>
        </div>
    </div>
)
}
export default ItemCount
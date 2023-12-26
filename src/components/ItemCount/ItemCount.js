import './ItemCount.css';
import '../../main.css'


const ItemCount = ({ cantidad, increment, decrement, stock, addToCart }) => {


    return (
        <div className="counter">
            <div className="controles container">
                <button className="button is-danger" onClick={decrement}>-</button>
                <h5 className="Numero"> {cantidad} </h5>
                <button className="button is-success" onClick={increment}>+</button>

            </div>
            <div className="columns is-vcentered is-mobile">
                <div className="column">

                    <button className="button producto-agregar gral-button" onClick={() => addToCart(cantidad)} disabled={!stock}>
                        Agregar Al Carrito
                    </button>
                </div>
            </div>

        </div>
        
    )
}
export default ItemCount
import './ItemCount.css';


const ItemCount = ({ cantidad, increment, decrement, stock, addToCart}) => {
   

    return (
        <div className="counter">
            <div className="controles container">
                <button className="button is-danger" onClick={decrement}>-</button>
                <h5 className="Numero"> {cantidad} </h5>
                <button className="button is-success" onClick={increment}>+</button>

            </div>
            <div className="container">
                <div className="content is-centered">
                    <button className="button producto-agregar" onClick={() => addToCart(cantidad)} disabled={!stock}>
                        Agregar Al Carrito
                    </button>
                </div>
                
            </div>
        </div>
    )
}
export default ItemCount
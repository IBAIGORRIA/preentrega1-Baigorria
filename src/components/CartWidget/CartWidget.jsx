
import { useContext } from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {CartContext} from '../CartContext/CartContext'


function CartWidget() {
  
 

  const{totalQuantity} = useContext(CartContext)

  return (
    <div className="navbar-item">
        <AiOutlineShoppingCart/>
        <span className= "numerito"> {totalQuantity} </span>
    </div>
  )
}

export default CartWidget

import {AiOutlineShoppingCart} from "react-icons/ai";



function CartWidget() {
  
  return (
    <div>
        <div className="navbar-item"><AiOutlineShoppingCart/></div>
        <span className= "numerito"> 0 </span>
    </div>
  )
}

export default CartWidget
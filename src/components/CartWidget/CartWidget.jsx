import {AiOutlineShoppingCart} from "react-icons/ai";

function CartWidget() {
  return (
    <div>
        <div className="navbar-item"><AiOutlineShoppingCart/></div>
        <div className= "numerito">0</div>
    </div>
  )
}

export default CartWidget
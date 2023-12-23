import {  createContext, useState } from "react";

//esto crea el contexto, el carrito que vamos a estar usando
export const CartContext = createContext({
    cart:[]
});

//esto crea el componente proveedor de informacion
export const CartProvider = ({ children }) =>{
    const [cart,setCart] = useState([])

    //agregar item al carrito
    const addItem = (item, quantity) => {
        const addedItem = {...item, quantity}
        const newCart =[...cart]
        const itemInCart = newCart.find((el) => el.id === item.id)

        if(!isInCart(item.id)){
            newCart.push(addedItem)
            console.log(item.id, "agregado")
        } else {
            console.log("El producto ya estaba en carrito")
            //aca debe ir como agregar la cantidad al producto ya existente
            itemInCart.quantity += quantity
        }
        setCart(newCart)
    }
    //quitar item del carrito
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }
    //limpiar carrito completo
    const clearCart = () => {
        setCart([])
    }
    //funcion para ver si está el item en el carrito
    const isInCart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
    }
    // funcion para el numerito en el carrito
    const totalQuantity = cart.reduce((acc, itAct)=> acc + itAct.quantity,0)
    //precio total
    const totalPrice = cart.reduce((prev,art) => prev + (art.quantity * art.precio),0)

    //Ahora comparto las funciones a los hijos por "value"
    return(
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, clearCart, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )

}
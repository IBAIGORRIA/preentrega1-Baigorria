// import { useEffect } from "react";
// import { useState } from "react"

// function ItemDetailContainer() {
//     const {prodId} = useParams();
//     const[item, setItem] = useState(null);
//     useEffect(() => {
//         getProductById(prodId)
//         .then((res) => {
//             setItem( res)
//         })
//     }, [])
// import { getProductById } from "../../async-mocks/dataAsk";
import productWallet from '../../data/data'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const param = useParams();
    const item = productWallet.find((element) => element.id === param.id)
    
    
    return (
    <div className="container is-centered">
        {<ItemDetail item= {item}   />}
    </div>
    )
}

export default ItemDetailContainer
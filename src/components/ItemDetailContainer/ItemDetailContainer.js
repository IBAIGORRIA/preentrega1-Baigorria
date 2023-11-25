import { useEffect } from "react";
import { useState } from "react"
import { getProductById } from "../../helpers/dataAsk";
import ItemDetail from "../ItemDetail/ItemDetail";


function ItemDetailContainer(prodId) {

    const[item, setItem] = useState(null);

    useEffect(() => {
        getProductById(prodId)
        .then((res) => {
            setItem( res)
        })

    }, [])



    return (
    <div> 
        {item && <ItemDetail item={item}/>}
    </div>
    )
}

export default ItemDetailContainer
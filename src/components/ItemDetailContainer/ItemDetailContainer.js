import { useEffect } from "react";
import { useState } from "react"
import { getProductById } from "../../async-mocks/dataAsk";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const  param = useParams();
    const [item, setItem] = useState(null);


    useEffect(() => {
        getProductById(param.id)
            .then((res) => {
                setItem(res)
            })
    }, [])


    return (
        <div className="container is-centered">

            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer
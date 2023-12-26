import { useEffect } from "react";
import { useState } from "react"
import {doc, getDoc} from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/config";

function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const id = useParams().id

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) =>{
               setItem ({...resp.data(), id: resp.id })
            })

    }, [id])


    return (
        <div className="container is-centered">

            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer
import { dataAsk } from "../../async-mocks/dataAsk";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { useEffect, useState } from "react";

import {collection, getDocs} from "firebase/firestore"
import {db} from "../../firebase/config"

const ItemListContainer =() => {

  const [productos, setProductos] = useState([]);

    useEffect(()=>{
      dataAsk()
      //const productosRef = collection(db, "productos");
      //getDocs(productosRef)
      .then((res)=>{
        setProductos(res);
      })
    },[])

  return (

    <div className="item-list ">
        <ItemList products = {productos}/>
    </div>
  )
}

export default ItemListContainer
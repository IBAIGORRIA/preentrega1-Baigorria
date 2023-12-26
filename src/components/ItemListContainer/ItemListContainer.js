
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { useEffect, useState } from "react";

import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../firebase/config"
import { useParams } from "react-router-dom";

const ItemListContainer =() => {

  const [productos, setProductos] = useState([]);
  const categoria= useParams().category;
  const subcategoria = useParams().subcategory;
  
  

    useEffect(()=>{
      //referencia a la coleccion
      const productosRef = collection(db, "productos");

      let q = productosRef;

      if (subcategoria !== undefined) {
        // Filtrar por subcategoría
        q = query(productosRef, where("clasificacion.nombre", "==", subcategoria));
      } else if (categoria) {
        // Filtrar por categoría
        q = query(productosRef, where("clasificacion.categoria", "==", categoria));
      }
      // traer los docs
      getDocs(q)
      .then((res)=>{

        setProductos(
          res.docs.map((doc)=>{
            return {...doc.data(), id: doc.id}
          })
          );
      })
    },[categoria, subcategoria])

  return (

    <div className="item-list ">
        <ItemList products = {productos}/>
    </div>
  )
}

export default ItemListContainer
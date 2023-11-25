import { dataAsk } from "../../helpers/dataAsk";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'

const ItemListContainer =() => {
  
  const [products, setProducts] =  useState([]);

  useEffect(() => {
    dataAsk()
      .then((res)=>{
        setProducts(res);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])
  
  return (
    <div className="item-list ">
        <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
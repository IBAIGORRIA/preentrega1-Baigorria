// import { dataAsk } from "../../async-mocks/dataAsk";
// import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import productWallet from "../../data/data";

const ItemListContainer =() => {
  
  // const [products, setProducts] =  useState([]);

  // useEffect(() => {
  //   dataAsk()
  //     .then((res)=>{
  //       setProducts(res);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }, [])

  

  return (

    <div className="item-list ">
        <ItemList products = {productWallet}/>
    </div>
  )
}

export default ItemListContainer
import { useParams } from "react-router-dom";
import productWallet from "../data/data"
import ItemList from "../components/ItemList/ItemList";
import './../main.css'

const Category = () => {
  const { category, subcategory } = useParams();
  let item;

  if (subcategory === undefined) {
    item = productWallet.filter((element) => element.clasificacion.categoria === category)

  }
  else {
    item = productWallet.filter((element) => element.clasificacion.nombre === subcategory)
  }



  return (
    <div className="item-list ">
      <div className="contenedor">
      <ItemList category={category} products={item} />
      </div>
    </div>
  )
}

export default Category
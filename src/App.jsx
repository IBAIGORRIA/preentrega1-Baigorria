import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error  from "./pages/Error";
import Home from "./pages/Home";
import Contacto from "./components/Contacto/Contacto";
import Layout from "./pages/Layout";
import Category from "./pages/Categorias";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";

function App(){

    return (
        <div>
            <BrowserRouter>
            <CartProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="products" element={<ItemListContainer/>} />
                    <Route path= ":category" element={<Category params=''/>}>
                        <Route path=":subcategory" element={<Category params='collares'/>}/>
                        <Route path=":subcategory" element={<Category params='pulseras'/>}/>
                        <Route path=":subcategory" element={<Category params='promos'/>}/>
                    </Route>
                    <Route path=':category' element={<Category/>}/>
                    <Route path='/contacto' element= {<Contacto/>} />
                    <Route path="item/:id" element={<ItemDetailContainer />} /> 
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="checkout" />
                    <Route path='*' element={<Error/>} />
                </Route>
               </Routes>
               </CartProvider>
            </BrowserRouter>

        </div>
    );
}

export default App;

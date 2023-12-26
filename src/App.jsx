import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Contacto from "./components/Contacto/Contacto";
import Layout from "./pages/Layout";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


import "./main.css";


function App() {

    return (
        <div>
            <CartProvider>
                <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/products" element={<ItemListContainer />} />
                            <Route path="/products/:category" element={<ItemListContainer />} >
                                <Route path=":subcategory" element={<ItemListContainer  />} />
                                <Route path=":subcategory" element={<ItemListContainer  />} />
                                <Route path=":subcategory" element={<ItemListContainer  />} />
                            </Route>
                            <Route path='/contacto' element={<Contacto />} />
                            <Route path="/item/:id" element={<ItemDetailContainer />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" />
                            <Route path='/*' element={<Error />} />
                        </Route>
                    </Routes>

                </BrowserRouter>
            </CartProvider>
        </div>
    );
}

export default App;

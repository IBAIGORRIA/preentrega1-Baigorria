import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App(){

    return (
        <div>
            <NavBar />

            <BrowserRouter>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="category/:id" element={<ItemListContainer/>} />
                <Route path="item/:id" element={<ItemDetailContainer/>} />
            </Routes>
            </BrowserRouter>
            <ItemListContainer />

        </div>
    );
}

export default App;

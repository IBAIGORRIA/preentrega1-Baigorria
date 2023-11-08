import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./main.css"
function App(){

    return (
        <div>
            <NavBar />
            <ItemListContainer greeting={"Hola Mundo!" }/>

        </div>
    );
}

export default App;

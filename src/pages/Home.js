import { Link } from "react-router-dom";
import "../main.css";

const Home = () => {
  return (
    <div className="container contenedor">
       <div className="title"> Bienvenido/a! Tenemos el regalo que buscás!</div>
       <button className="button"><Link to="/products">Ingresar</Link></button>
    </div>
  )
}

export default Home
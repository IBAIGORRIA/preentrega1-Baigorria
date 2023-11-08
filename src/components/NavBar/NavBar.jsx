import CartWidget from "../CartWidget/CartWidget"


const NavBar = ()=> {

    return (
        <nav className="navbar">
            <header>
                <h1 className="logo"> <a href="#">Maite Joyas </a> </h1>
            </header>
            <div className="menu">
                    <button id="todos" className="boton-menu boton-categoria ">Todos los Productos</button>
                    <button id="collares" className="boton-menu boton-categoria">Collares</button>
                    <button id="pulseras" className="boton-menu boton-categoria">Pulseras</button>
                    <button id="promos" className="boton-menu boton-categoria">Promos</button>
                    <button className="boton-menu boton-carrito " href="carrito.html"><CartWidget/> </button>
            </div>
            </nav>
        
    )

}
export default NavBar
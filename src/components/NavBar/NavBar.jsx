import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = ()=> {

    return ( 
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
          <div className="navbar-item" >
          <h1 className="logo">Maite Joyas </h1> 
          </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className=" boton-menu">
                Todos los Productos
              </div>

              <div className=" boton-menu">
                Collares y Pulseras
              </div>

              <div className=" boton-menu">
                Relojes
              </div>

              <div className=" boton-menu">
                Contacto
              </div>
            </div>

            <div >
              <div className="">
                <div className=" boton-menu boton-carrito " ><CartWidget/> </div>
              </div>
            </div>
          </div>
      </nav>
    )

}
export default NavBar
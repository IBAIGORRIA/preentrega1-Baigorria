import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
 

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item boton-menu">
          <h1 className="logo">
            <NavLink to="/" activeClassName="is-active" exact>
              Maite Joyas
            </NavLink>
          </h1>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item boton-menu">
            <NavLink to="/products" activeClassName="is-active">
              Todos los Productos
            </NavLink>
          </div>

          <div className="navbar-item boton-menu has-dropdown is-hoverable">
            <NavLink to={`/joyeria`} activeClassName="is-active">
              Joyería
            </NavLink>
            <div className="navbar-dropdown is-boxed">
              <div className="navbar-item boton-menu">
                <NavLink to={`/joyeria/collares`} activeClassName="is-active">
                  Collares
                </NavLink>
              </div>
              <div className="navbar-item boton-menu">
                <NavLink to={`/joyeria/pulseras`} activeClassName="is-active">
                  Pulseras
                </NavLink>
              </div>
              <div className="navbar-item boton-menu">
                <NavLink to={`/joyeria/promos`} activeClassName="is-active">
                  Promos
                </NavLink>
              </div>
            </div>
          </div>

          <div className="navbar-item">
            <NavLink to="/relojes" activeClassName="is-active">
              Relojes
            </NavLink>
          </div>

          <div className="navbar-item">
            <NavLink to="/contacto" activeClassName="is-active">
              Contacto
            </NavLink>
          </div>
        </div>

        <div >
          <div className="">
            <NavLink to="/cart">
            <div className="boton-carrito " ><CartWidget  /> </div>
            </NavLink>
          </div>
        </div>
      </div>
    
    </nav >
            )

}
export default NavBar
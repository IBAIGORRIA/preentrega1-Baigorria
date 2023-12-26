import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {


  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item boton-menu">
          <h1 className="logo">
            <NavLink to="/" activeclassname="is-active" exact>
              Maite Joyas
            </NavLink>
          </h1>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item boton-menu">
            <NavLink to="/products" activeclassname="is-active">
              Todos los Productos
            </NavLink>
          </div>

          <div className="navbar-item boton-menu has-dropdown is-hoverable">
            <NavLink to={`/products/joyeria`} activeclassname="is-active">
              Joyería
            </NavLink>
            <div className="navbar-dropdown is-boxed">
              <div className="navbar-item boton-menu">
                <NavLink to={`/products/joyeria/collares`} activeclassname="is-active">
                  Collares
                </NavLink>
              </div>
              <div className="navbar-item boton-menu">
                <NavLink to={`/products/joyeria/pulseras`} activeclassname="is-active">
                  Pulseras
                </NavLink>
              </div>
              <div className="navbar-item boton-menu">
                <NavLink to={`/products/joyeria/promos`} activeclassname="is-active">
                  Promos
                </NavLink>
              </div>
            </div>
          </div>

          <div className="navbar-item">
            <NavLink to="/products/relojes" activeclassname="is-active">
              Relojes
            </NavLink>
          </div>

          <div className="navbar-item">
            <NavLink to="/contacto" activeclassname="is-active">
              Contacto
            </NavLink>
          </div>
          <div className="navbar-item ">
            <NavLink to="/cart">
              <CartWidget />
            </NavLink>
          </div>
        </div>
      </div>

    </nav >
  )

}
export default NavBar
import CartWidget from "../CartWidget/CartWidget"


const NavBar = ()=> {

    return ( 
        <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <h1 className="logo"> <a href="#">Maite Joyas </a> </h1>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Todos los Productos
      </a>

      <a class="navbar-item">
        Collares
      </a>

      <a class="navbar-item">
        Pulseras
      </a>

      <a class="navbar-item">
        Promos
      </a>
      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <a class="navbar-item" className="boton-menu boton-carrito " href="#"><CartWidget/> </a>
      </div>
    </div>
  </div>
</nav>
    )

}
export default NavBar
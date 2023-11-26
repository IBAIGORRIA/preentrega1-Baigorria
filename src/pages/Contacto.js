import './../main.css'


const Contacto = () => {
  return (
    <div className="contenedor">
    <div className="container">
      <div className="hero container"> Contacto </div>
      <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ingresa tu nombre"/>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control ">
          <input class="input" type="email" placeholder="Ingresa tu email" />
        </div>
      </div>


      <div class="field">
        <label class="label">Mensaje</label>
        <div class="control">
          <textarea class="textarea" placeholder="Escribe aquí tu mensaje"></textarea>
        </div>
      </div>


      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Enviar</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancelar</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contacto
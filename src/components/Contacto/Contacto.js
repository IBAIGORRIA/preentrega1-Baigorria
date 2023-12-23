import { Link } from 'react-router-dom'
import './../../main.css'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"

const Contacto = () => {
  const { register, handleSubmit, formState:{errors}, reset } = useForm(
      {defaultValues:{
        mensaje: `Hola! Me gustaría consultar por...`
      }}
  );

  const enviar = (data) => {
    if (data) {
      Swal.fire({
      title: "Muchas gracias!",
      text: "Su mensaje fue enviado!",
      icon: "success"});
      reset();
    }
    
  }

  return (
    <>
      <section className="hero"> </section>
      <div className="container">
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
          <label className="label">Nombre</label>
            <input
              className="input"
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("nombre", {required: true, minLength: 2, maxLength:20 })} />
              {errors.nombre?.type==="required" && (
                <div className='content error'>Ingrese un nombre.</div>
              )}
              {errors.nombre?.type==="minLength" && (
                <div className='content error'>Debe tener minimo 2 caracteres.</div>
              )}
              {errors.nombre?.type==="maxLength" && (
                <div className='content error'>Disculpa, solo puede tener máximo 20 caracteres.</div>
              )}

          <label className="label">Email</label>
            <input className="input"
              type="text"
              placeholder="Ingresa tu email"
              {...register("email", {
                                      required: true,
                                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                                    }
                          )
              } />
              {errors.email?.type==="required" && (
                <div className='content error'>Ingrese un correo</div>
              )}
              {errors.email?.type==="pattern" && (
                <div className='content error'>El formato del correo no es válido.</div>
              )}

          <label className="label">Mensaje</label>
            <textarea className="textarea" 
            
            {...register("mensaje", {required: true, minLength: 2, maxLength:20 })} />
              {errors.mensaje?.type==="required" && (
                <div className='content error'>Ingrese un mensaje</div>
              )}
              {errors.nombre?.type==="minLength" && (
                <div className='content error'>Debe tener minimo 2 caracteres.</div>
              )}
              {errors.nombre?.type==="maxLength" && (
                <div className='content error'>Disculpa, solo puede tener máximo 20 caracteres.</div>
              )}
          <div className='container'>
            <button className="button is-link" type="submit">Enviar</button>
            <button className="button is-link is-light"><Link to="/">Volver</Link></button>
          </div>
      </form>
      </div>
    </>
  )
}

export default Contacto
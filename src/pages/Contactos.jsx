import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const Contactos = () => {
  return (
    <>
      <Header />
      {/* p-3 my-3 border rounded shadow */}
      <h1 className="h1Titulo">Formulario de Contacto</h1>
      <div className="formulario" data-aos="flip-right">
        <input type="text" className="form-control mb-3" placeholder="Nombre" />
        <input type="email" className="form-control mb-3" placeholder="Correo Electrónico" />
        <textarea name="postContent" className="form-control mb-3" rows={4} cols={40} placeholder="Deja tu mensaje" />

        <button className="btn btn-success w-100">Enviar</button>
      </div>
      <Footer />
    </>
  )
}

export default Contactos
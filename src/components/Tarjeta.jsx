import React from 'react'

const Tarjeta = ({ equipo }) => {

    return (
        < div className='contenedorEquipoLab'>
            {equipo.map((equipos, index) => (
                <div key={index} className='TarjetaEquipoLab'>
                    <img src={equipos.imagen} alt="placeholder" className='imagenEquipoLab' />
                    <h2>{equipos.nombre}</h2>
                    <p>{equipos.rol}</p>
                </div>
            ))}
        </div >
    )
}

export default Tarjeta
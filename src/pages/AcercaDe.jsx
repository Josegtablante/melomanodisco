import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import Tarjeta from '../components/Tarjeta'
import { equipo } from '../utils/Equipo'

const AcercaDe = () => {
  return (
    <>
      <Header />
      <div data-aos="fade-up-left" className='acercade'>
        <h1 className='h1Titulo'>Sobre Nosotros</h1>
        <p className='parrafoAcercaDe'>Somos el equipo de trabajo de melomano disco, un equipo un poco pequeño pero con mucha pasion por la buena musica</p>
        <Tarjeta equipo={equipo} />
      </div>
      <Footer />
    </>
  )
}

export default AcercaDe

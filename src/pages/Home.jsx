import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Carrusel from '../components/Carrusel'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import { CartContext } from '../context/CartContext'

const Home = () => {
  const { cargando } = useContext(CartContext)

  return (
    <>
      <Header />
      <main>
        {
          cargando ?
            <div className='loanding'> <img src={loading} alt='loading' /></div> :
            <div>
              <Carrusel />
              <ProductList />
            </div>
        }
      </main>
      <Footer />
    </>
  )
}

export default Home

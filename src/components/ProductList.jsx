import React, { useContext } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'
const ProductList = () => {

    const { productos, productosFiltrados, busqueda, setBusqueda } = useContext(CartContext)

    return (
        <>
            <div className='Buscar'>
                <input
                    type='text'
                    placeholder='Buscar disco...'
                    value={busqueda}
                    className='inputBuscar'
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>
            <div className='productlist' >
                {
                    productosFiltrados.map(product => (
                        <Productos key={product.id} producto={product} />
                    ))
                }
            </div>
        </>
    )
}

export default ProductList

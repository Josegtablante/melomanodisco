import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Productos = ({ producto }) => {

  const { handleAddToCart } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1);

  const increase = () => setCantidad(prev => (prev != producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <section className='card'>
      <div className='imganContainer'>
        <img src={producto.imagen} alt="" className='imagen' />
      </div>

      <h2 className='nombre'>{producto.nombre}</h2>
      <p className='nombre'>{producto.disco}</p>
      <p className='precio'>${producto.precio}</p>
      <p className='stock'>{producto.stock}</p>

      <div className='cantidadContainer'>
        <button className='botondeclinar' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className='botonaumentar' onClick={increase}>+</button>
      </div>

      <button className='addCartButton' style={{ display: cantidad == 0 ? 'none' : 'block' }} onClick={() => handleAddToCart({ ...producto, cantidad: cantidad })}>Agregar al carrito</button>

      <Link className='verMasButton' to={`/productos/${producto.id}`}> Ver mas</Link>

    </section>
  )
}

export default Productos

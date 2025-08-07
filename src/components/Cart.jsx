import React, { useState, useEffect, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, handleDeleteFromCart, vaciarCarrito } = useContext(CartContext)
    // console.log(cart);
    const cantidadItems = cart.length
    const [show, setShow] = useState(false);
    const [isVisible, setIsVisible] = useState(cantidadItems > 0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setIsVisible(cantidadItems > 0);
    }, [cantidadItems]);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Carrito {cantidadItems}
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de Compras </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='vaciarCarritoDiv'>
                        {isVisible && (
                            cantidadItems === 0 ? (<p>El carrito esta vacio</p>) :
                                (<ul className="cartItem"> {
                                    cart.map((item, index) => (
                                        <li key={index} className='cartItemli'>
                                            <img src={item.imagen} alt="img" className='listaimagen' />
                                            {item.artista} ${item.precio} X {item.cantidad}
                                            <button onClick={() => handleDeleteFromCart(item)}> <i class="fa fa-trash" aria-hidden="true"></i></button>
                                        </li>))}
                                </ul>))
                        }
                    </div>
                </Offcanvas.Body>
                < button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            </Offcanvas>
        </div >
    )
}

export default Cart

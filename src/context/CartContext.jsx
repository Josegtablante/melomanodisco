import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)
    const [isAuthenticated, setIsAuth] = useState(false)
    const [busqueda, setBusqueda] = useState("")

    const uriMockApi = 'https://682e2f0e746f8ca4a47c2dbd.mockapi.io/product'

    useEffect(() => {
        fetch(uriMockApi)
            .then(respuesta => respuesta.json())
            .then(datos => {
                setTimeout(() => {
                    setProductos(datos)
                    setCargando(false)
                }, 2000)
            })
            .catch(error => {
                console.log('Error', error)
                setCargando(false)
                setError(true)
            })

    }, [])

    //filtrar producto
    const productosFiltrados = productos.filter((producto) => producto?.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    //agregar producto al carrito
    const handleAddToCart = (product) => {

        const productExist = cart.find((item) => item.id === product.id);
        if (productExist) {
            // alert('El producto ya esta en el carrito')
            setCart(cart.map((item) => item.id === product.id ? { ...item, cantidad: product.cantidad } : item));
        } else {
            toast.success(`El producto ${product.nombre} se ha agregado al carrito`)
            setCart([...cart, { ...product, cantidad: product.cantidad }]);
        }
    };

    //eliminar producto del carrito
    const handleDeleteFromCart = (product) => {
        toast.error(`El producto ${product.nombre} se ha eliminado al carrito`)
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.cantidad > 1) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    } else {
                        return null;
                    }
                } else {
                    return item;
                }
            }).filter(item => item !== null);
        });
    };

    //vaciar todo el carrito
    const vaciarCarrito = () => {
        setCart([])
    }

    // setCart(cart.filter(item => item.id != product.id))

    return (
        <CartContext.Provider
            value={
                {
                    cart, productos, cargando, error,
                    handleAddToCart, handleDeleteFromCart,
                    isAuthenticated, setIsAuth, vaciarCarrito,
                    productosFiltrados, busqueda, setBusqueda
                }
            }>
            {children}
        </CartContext.Provider>
    )
}
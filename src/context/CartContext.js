import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [productCartList, setProductCartList] = useState([]);

    //si existe obtengo el indice
    const exists = (id) => {
        return productCartList.findIndex((producto) => producto.id === id);
    }

    const addProduct = (product) => {
        //Si producto existe en el carrito le sumo la cantidad que venga en el obj "producto"
        //si no lo agrego directamente al carrito        
        const indexProduct = exists(product.id);
        if (indexProduct !== -1) {
            const copyProducts = [...productCartList];
            copyProducts[indexProduct].cantidad += product.cantidad;
            setProductCartList(copyProducts);
        } else {
            const newProducts = [...productCartList, product];
            setProductCartList(newProducts);
        }               
    }

    //si exite el producto y su cantidad > 1 resto de cantidad si no lo quito del Cart
    const removeProduct = (id) => {
        Swal.fire({
            title: 'Esta seguro de Eliminar un Producto?',
            titleText: 'Usted estara reduciendo en 1 la cantidad de su compra',
            icon: 'warning',
            color: 'white',
            background: '#2D3748',
            showCancelButton: true,
            confirmButtonText: 'Si, Eliminala',
            confirmButtonColor: '#2C7A7B',
            cancelButtonText: 'No, Cancelar',
            cancelButtonColor: '#C53030'
        }).then((result) => {
            if (result.isConfirmed) {

        const indexProduct = exists(id);
        const copyProducts = [...productCartList];
        if (indexProduct !== -1 && copyProducts[indexProduct].cantidad > 1) {
            copyProducts[indexProduct].cantidad -= 1;
            setProductCartList(copyProducts);
        } else {
            copyProducts.splice(indexProduct, 1);
            setProductCartList(copyProducts);
        }
                Swal.fire({
                    title: 'Eliminada!',
                    titleText: 'Usted ha Eliminado su Producto del Carrito',
                    icon: 'success',
                    color: 'white',
                    background: '#2D3748',
                    iconColor: '#198754',
                    confirmButtonColor: '#2C7A7B'
                });
            } else {
                Swal.fire({
                    title: 'Cancelado!',
                    titleText: 'Su Producto no ha sido Eliminado',
                    color: 'white',
                    background: '#2D3748',
                    icon: 'error',
                    iconColor: '#d33',
                    confirmButtonColor: '#2C7A7B'
                });
            }
        });
    }

    const cleanCart = () => {
        productCartList?.length > 0 ? setProductCartList([]) : setProductCartList(productCartList);
    }

    const getContadorCart = () => {
        return productCartList.reduce((acc, e) => acc + e.cantidad, 0);
    }

    const getPrecioTotal = () =>{
        return productCartList.reduce((acc, e) => acc + e.precio * e.cantidad, 0);
    }

    return (
        <CartContext.Provider value={{ productCartList, addProduct, removeProduct, cleanCart, getContadorCart, getPrecioTotal }}>
            {/*...Components*/}
            {children}
        </CartContext.Provider>
    );
}
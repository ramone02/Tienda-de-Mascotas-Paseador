import { createContext, useState } from 'react';

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

    const removeProduct = (id) => {
        const indexProduct = exists(id);
        const copyProducts = [...productCartList];
        if (indexProduct !== -1 && copyProducts[indexProduct].cantidad > 1) {
            copyProducts[indexProduct].cantidad -= 1;
            setProductCartList(copyProducts);
        } else {
            copyProducts.splice(indexProduct, 1);
            setProductCartList(copyProducts);
        }
    }

    const cleanCart = () => {
        productCartList?.length > 0 ? setProductCartList([]) : setProductCartList(productCartList);
    }

    return (
        <CartContext.Provider value={{ productCartList, addProduct, removeProduct, cleanCart }}>
            {/*...Components*/}
            {children}
        </CartContext.Provider>
    );
}
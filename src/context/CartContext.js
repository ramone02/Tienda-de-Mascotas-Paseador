import {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=> {

    const [productCartList, setProductCartList] = useState([]);

    const addProduct = (product)=>{
        const newProducts = [...productCartList, product];
        console.log(newProducts.filter((e)=> e.nombre));
        setProductCartList(newProducts);
    }

    return(
        <CartContext.Provider value={{ productCartList, addProduct}}>
            {/*...Components*/ }
            {children}
        </CartContext.Provider>
    );
}
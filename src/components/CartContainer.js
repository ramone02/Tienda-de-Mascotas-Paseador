import React,{useContext, useState} from "react";
import { CartContext } from "../context/CartContext";

const CartContainer = () => {
    const [loading, setLoading] = useState(null);
    const { productCartList } = useContext(CartContext);
    console.log(`productos lista ${productCartList.map((e) => e.nombre)}`);

    
    return(
        <>
        <h1>Cart Container</h1>
            {productCartList && productCartList.map((e)=> <p>{e.nombre} - {e.precio}</p>)}
        </>
    );
}

export default CartContainer;
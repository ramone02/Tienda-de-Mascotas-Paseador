import React, { useContext, useEffect, useState } from "react";
import { BsCart3 } from 'react-icons/bs';
import { IconButton, Button, useColorModeValue} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

//componente Btn Carrito(chakraUi-React-Icons)

const CartWidget = () => {

    const {productCartList, getContadorCart} = useContext(CartContext);
    const [total, settotal] = useState(0);

    useEffect(()=>{
        settotal(getContadorCart());
    },[productCartList])



    return (
        <>
            <Button bg={useColorModeValue('purple.200', 'teal')} >
            <Link to="/cart">
                <IconButton
                        bg={useColorModeValue('purple.200', 'teal')}
                    size="md"
                    fontSize="28px"
                    icon={<BsCart3/> }
                ></IconButton>
                {total > 0 && <span>{total}</span>}
            </Link>
            </Button>
        </>
    );
}

export default CartWidget;
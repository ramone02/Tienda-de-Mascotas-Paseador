import React from "react";
import { BsCart3 } from 'react-icons/bs';
import {IconButton } from "@chakra-ui/react";

//componente Btn Carrito(chakraUi-React-Icons)

const CartWidget = ()=> {
    return(
        <> 
            <IconButton
                bg={"teal"}
                size="md"
                fontSize="28px"
                icon={<BsCart3 />}
            />                                  
        </>
    );
}

export default CartWidget;
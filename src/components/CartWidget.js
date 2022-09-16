import React from "react";
import { BsCart3 } from 'react-icons/bs';
import { IconButton, ModalOverlay, } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

//componente Btn Carrito(chakraUi-React-Icons)

const CartWidget = () => {
    return (
        <>
            <Link to="/cart">
                <IconButton
                    bg={"teal"}
                    size="md"
                    fontSize="28px"
                    icon={<BsCart3 />}
                />
            </Link>
        </>
    );
}

export default CartWidget;
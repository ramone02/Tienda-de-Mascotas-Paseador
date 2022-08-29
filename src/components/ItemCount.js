import React, { useState } from "react";
import { Container, IconButton, Tag, Box, Button } from "@chakra-ui/react";
import { AiFillPlusCircle, AiFillMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

const ItemCount = ({ stock }) => {

    const [cantidad, setCantidad] = useState(0);

    const sumarCantidad = () => cantidad === stock ? setCantidad(stock) : setCantidad(cantidad + 1);
    const restarCantidad = () => cantidad > 0 ? setCantidad(cantidad - 1) : setCantidad(0);
    return (
        <>
            <Container mt={2} maxW='container.sm' bg='' centerContent>
                <h2>El stock Actual es de {stock}</h2>
                <p>No puede tener Cantidad negativa, ni la cantidad puede superar el Stock</p>
                <Box mt={5}>
                    <IconButton
                        bg={"teal"}
                        size="md"
                        fontSize="28px"
                        icon={<AiFillMinusCircle/>}
                        onClick={restarCantidad}
                    />
                    <Tag>{cantidad}</Tag>
                    <IconButton
                        bg={"teal"}
                        size="md"
                        fontSize="28px"
                        icon={<AiFillPlusCircle />}
                        onClick={sumarCantidad}
                    />
                </Box>
            </Container>
        </>
    );
}

export default ItemCount;
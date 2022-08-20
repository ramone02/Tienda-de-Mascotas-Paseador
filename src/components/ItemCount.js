import React, { useState } from "react";
import { Container, IconButton, Tag, Box, Button } from "@chakra-ui/react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

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
                    <Button onClick={restarCantidad}>-</Button>
                    <Tag>{cantidad}</Tag>
                    <Button onClick={sumarCantidad}>+</Button>
                </Box>
            </Container>
        </>
    );
}

export default ItemCount;
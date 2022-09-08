import React, { useState } from "react";
import { Container, IconButton, Tag, Box, Button } from "@chakra-ui/react";
import { AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';

const ItemCount = ({ stock, onAdd }) => {

    const [cantidad, setCantidad] = useState(0);

    const sumarCantidad = () => cantidad === stock ? setCantidad(stock) : setCantidad(cantidad + 1);
    const restarCantidad = () => cantidad > 0 ? setCantidad(cantidad - 1) : setCantidad(0);
    return (
        <>
            <Container maxW='container.sm' bg='' centerContent>
                <Box mt={2}>
                    <IconButton
                        bg={"teal"}
                        size="sm"
                        fontSize="28px"
                        icon={<AiFillMinusCircle />}
                        onClick={restarCantidad}
                    />
                    <Tag size="lg">{cantidad}</Tag>
                    <IconButton
                        bg={"teal"}
                        size="sm"
                        fontSize="28px"
                        icon={<AiFillPlusCircle />}
                        onClick={sumarCantidad}
                    />
                    <Button my="2" rounded={"full"} onClick={() => onAdd(cantidad)}>Agregar al Carrito</Button>
                </Box>
            </Container>
        </>
    );
}

export default ItemCount;
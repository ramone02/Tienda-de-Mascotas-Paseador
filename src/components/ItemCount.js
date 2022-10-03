import React, { useState } from "react";
import { Container, IconButton, Tag, Box, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';

const ItemCount = ({ stock, onAdd, finalizarCompra }) => {

    const [cantidad, setCantidad] = useState(0);

    const sumarCantidad = () => cantidad === stock ? setCantidad(stock) : setCantidad(cantidad + 1);
    const restarCantidad = () => cantidad > 0 ? setCantidad(cantidad - 1) : setCantidad(0);
    return (
        <>
            <Container maxW='container.sm' bg='' centerContent>
                <Box mt={2}>
                    <IconButton
                        bg={useColorModeValue('purple.200', 'teal')}
                        size="sm"
                        fontSize="24px"
                        icon={<AiFillMinusCircle />}
                        onClick={restarCantidad}
                    />
                    <Tag bg={useColorModeValue('purple.400', 'purple.600')} size="lg" >{cantidad}</Tag>
                    <IconButton
                        bg={useColorModeValue('purple.200', 'teal')}
                        size="sm"
                        fontSize="24px"
                        icon={<AiFillPlusCircle />}
                        onClick={sumarCantidad}
                    />
                    <Button my="2" bg={useColorModeValue('purple.200', 'teal')} rounded={"full"} onClick={() => onAdd(cantidad)}>Agregar al Carrito</Button>
                    {finalizarCompra && <Link to="/cart"><Button bg={"purple.600"}  variant="solid">Finalizar Compra</Button></Link>}
                </Box>
            </Container>
        </>
    );
}

export default ItemCount;
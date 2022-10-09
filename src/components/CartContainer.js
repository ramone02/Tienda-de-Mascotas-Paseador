import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
    Table,
    TableCaption,
    Tr, Th,
    Thead, Tbody,
    Td, Tfoot,
    Container,
    Heading,
    IconButton,
    Button,
    Link as LinkChakra,
    TableContainer
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import Loader from "./Loader";
import CartEmpty from "./CartEmpty";
import { Link } from "react-router-dom";

const CartContainer = () => {

    const [loading, setLoading] = useState(null);
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const [total, setTotal] = useState(0);
    const { productCartList, addProduct, removeProduct, getPrecioTotal } = useContext(CartContext);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setTotal(getPrecioTotal());
            setFinalizarCompra(false);
        }, 3000);
    }, [productCartList, getPrecioTotal]);


    if (!loading && productCartList.length === 0) {
        return (
            <CartEmpty></CartEmpty>
        );
    }

    return (
        <>
            <Container maxWidth={"80%"} mt={10} mb={10} centerContent>
                <Heading mb={5}>Carrito de Compras</Heading>
                {loading && <Loader></Loader>}
                {!loading && productCartList.length > 0 && <TableContainer><Table variant='striped' size={["sm", "lg"]} >
                    {!finalizarCompra && <TableCaption>
                        <Button bg={"teal"}>
                            <LinkChakra
                                px={2}
                                py={1}
                                rounded={'md'}
                                _activeLink={{ color: '#38373b' }}
                                _hover={{
                                    textDecoration: 'none',
                                }}>
                                <Link to='/form_order'>Finalizar Compra</Link>
                            </LinkChakra>
                        </Button>
                    </TableCaption>}
                    <Thead>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Descripcion</Th>
                            <Th>Tipo</Th>
                            <Th>Precio</Th>
                            <Th>Cantidad</Th>
                            <Th>Eliminar</Th>
                            <Th>Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {productCartList && productCartList.map((e) =>
                            <Tr key={e.id}>
                                <Td>{e.nombre}</Td>
                                <Td>{e.descripcion}</Td>
                                <Td>{e.tipo}</Td>
                                <Td>{e.precio}</Td>
                                <Td>{e.cantidad}</Td>
                                <Td value={e.id}><IconButton bg={"red"} icon={<DeleteIcon />} onClick={() => removeProduct(e.id)} /></Td>
                                <Td>{e.precio * e.cantidad}</Td>
                            </Tr>)}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th>
                                <Button bg={"teal"} size="sm"
                                    fontSize="20px" color={"white"}>${total}
                                </Button>
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
                </TableContainer>}{/* 
                {!loading && productCartList.length === 0 && <CartEmpty></CartEmpty>}
                {!loading && finalizarCompra && <FormOrder></FormOrder>} */}
            </Container>

        </>
    );
}

export default CartContainer;
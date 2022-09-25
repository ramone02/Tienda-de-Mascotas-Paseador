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
    Button
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import Loader from "./Loader";
import CartEmpty from "./CartEmpty";
import FormOrder from "./FormOrder";

const CartContainer = () => {

    const [loading, setLoading] = useState(null);
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const [total, setTotal] = useState(0);
    const { productCartList, addProduct, removeProduct, cleanCart, getPrecioTotal } = useContext(CartContext);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setTotal(getPrecioTotal());
        }, 3000);
    }, [productCartList, getPrecioTotal]);

    const handleFinalizarCompra = () => {
        setFinalizarCompra(true);
    }

    return (
        <>
            <Container maxWidth={"80%"} mt={10} mb={10} centerContent>
                <Heading mb={5}>Carrito de Compras</Heading>
                {loading && <Loader></Loader>}
                {!loading && productCartList.length > 0 && <Table variant='striped' size={["lg", "md"]} >
                    {!finalizarCompra && <TableCaption><Button bg={"teal"} size="sm"
                        fontSize="20px" color={"white"} onClick={() => handleFinalizarCompra()}>Finalizar Compra</Button>
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
                            <Th><Button bg={"teal"} size="sm"
                                fontSize="20px" color={"white"}>${total}</Button></Th>
                        </Tr>
                    </Tfoot>
                </Table>}
                {!loading && productCartList.length === 0 && <CartEmpty></CartEmpty>}
                {!loading && finalizarCompra && <FormOrder></FormOrder>}

            </Container>

        </>
    );
}

export default CartContainer;
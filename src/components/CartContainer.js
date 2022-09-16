import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
    Table,
    TableCaption,
    Tr, Th,
    Thead, Tbody,
    Td, Tfoot,
    Container,
    Heading
} from '@chakra-ui/react'

const CartContainer = () => {
    const [loading, setLoading] = useState(null);
    const { productCartList, addProduct, removeProduct, cleanCart } = useContext(CartContext);
    console.log(`productos lista ${productCartList.map((e) => e.nombre)}`);


    return (
        <>
            <Container maxWidth={"80%"} color='#262626' mt={10} mb={10} centerContent>
                <Heading>CArt Container</Heading>
                    <Table variant='striped' size={"lg"}  >
                        <TableCaption>Carrito de Compras</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Nombre</Th>
                                <Th>Descripcion</Th>
                                <Th>Tipo</Th>
                                <Th>Precio</Th>
                                <Th>Categoria</Th>
                                <Th>Cantidad</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {productCartList && productCartList.forEach((e) => {
                            <Tr >
                                <Td>${e.nombre} hola</Td>
                                <Td>{e.precio} acac</Td>
                                <Td>{e.cantidad} asetad</Td>
                            </Tr>                            
                        })}
                        </Tbody>
                        <Tfoot>
                            
                        </Tfoot>
                    </Table>               
                {productCartList && productCartList.map((e)=> <p key={e.id}>{e.nombre} - {e.precio} - {e.cantidad}</p>)}
            </Container>
        </>
    );
}

export default CartContainer;
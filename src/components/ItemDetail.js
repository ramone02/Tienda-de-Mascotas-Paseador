import React, { useContext, useState } from "react";
import {
    VStack, Button, Center, Flex, Heading, Image, Link, Stack, Text, Tag, useColorModeValue
} from '@chakra-ui/react';
import { useToast } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
    const { id, nombre, img, razas, experiencia, descripcion, calificacion, tipo, precio } = item;
    const { addProduct } = useContext(CartContext);
    const [finalizarCompra, setFinalizarCompra] = useState(false);
    const toast = useToast();

    const onAdd = (cantidad) => {
        if(cantidad >= 1){
            const newProduct = { ...item, cantidad: cantidad };
            addProduct(newProduct);
            setFinalizarCompra(true);
            toast({
                title: 'Producto Agregado con exito',
                status: 'success',
                position: 'top-right',
                variant: 'solid',
                duration: 2000,
            })
        }else { return;}
        
    }

    return (
        <>
            <Center py={6}>
                <Stack
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: '100%', md: '640px' }}
                    height={{ md: '25rem' }}
                    direction={{ base: 'column', md: 'row' }}
                    bg={useColorModeValue('purple.900', 'purple.800')}
                    boxShadow={'2xl'}
                    padding={4} margin={'30px'}>
                    <Flex flex={1} bg="blue.200">
                        <Image
                            objectFit="cover"
                            boxSize="100%"
                            height={{ sm: '456px', md: '370' }}
                            src={img}
                        />
                    </Flex>
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={1}>
                        <Heading as="h2" size="2xl" color={useColorModeValue('white', 'white')} >
                            {nombre}
                        </Heading>
                        <Text
                            textAlign={'center'}
                            color={useColorModeValue('white', 'white')}
                            p={3}
                            fontSize="2xl">
                            {descripcion}
                        </Text>
                        {calificacion && <Text fontWeight={600} color='white'  size="sm" fontSize="2xl" mb={2}>
                            Calificacion: {calificacion}/5
                        </Text>}
                        <Link href={'#'} color={'white'}>
                            {razas && razas.map((e, index) => <Tag key={index} color="white" variant="solid"><Button key={index} variant="link">#{e}</Button></Tag>)}
                        </Link>
                        {precio && <VStack>
                            <Text my="1" color="white">Precio : ${precio}</Text>
                        </VStack>}
                        <Stack
                            width={'100%'}
                            mt={'2rem'}
                            direction={'row'}
                            padding={2}
                            justifyContent={'space-between'}
                            alignItems={'center'}>
                            {precio && <ItemCount finalizarCompra={finalizarCompra} onAdd={onAdd}></ItemCount>}
                        </Stack>
                    </Stack>
                </Stack>
            </Center>
        </>
    );
}

export default ItemDetail;
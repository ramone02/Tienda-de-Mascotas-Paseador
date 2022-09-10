import React, { useContext, useState } from "react";
import {
    VStack,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Tag,
} from '@chakra-ui/react';
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
    const { id, nombre, img, razas, experiencia, descripcion, calificacion, tipo, precio } = item;
    const {addProduct} = useContext(CartContext);
    const [finalizarCompra, setFinalizarCompra] = useState(false);

    const onAdd = (cantidad) => {
        const newProduct = {...item, cantidad: cantidad};
        console.log(newProduct);
        addProduct(newProduct);
        setFinalizarCompra(true);
    }

    return (
        <>
            <Center py={6}>
                <Stack
                    borderWidth="2px"
                    borderRadius="lg"
                    w={{ sm: '100%', md: '640px' }}
                    height={{ sm: '476px', md: '25rem' }}
                    direction={{ base: 'column', md: 'row' }}
                    bg={useColorModeValue('white', 'purple.800')}
                    boxShadow={'2xl'}
                    padding={4}>
                    <Flex flex={1} bg="blue.200">
                        <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={img}
                        />
                    </Flex>
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={1}>
                        <Heading as="h2" size="2xl" >
                            {nombre}
                        </Heading>
                        <Text
                            textAlign={'center'}
                            color={useColorModeValue('gray.700', 'gray.400')}
                            p={3}
                            fontSize="2xl">
                            {descripcion}
                        </Text>
                        {calificacion && <Text fontWeight={600} color={'gray.500'} size="sm" fontSize="2xl" mb={2}>
                            Calificacion: {calificacion}/5
                        </Text>}
                        <Link href={'#'} color={'blue.400'}>
                            {razas && razas.map((e, index) => <Tag key={index} color="teal.700" variant="solid"><Button key={index} variant="link">#{e}</Button></Tag>)}
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
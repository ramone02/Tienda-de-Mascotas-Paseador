import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import React, { useState, useContext, useEffect } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md';
import { CartContext } from "../context/CartContext";
import { sendOrder } from '../helpers/helpfirebase.js';


const FormOrder = () => {

    const [loading, setLoading] = useState(null);
    const [idOrder, setIdOrder] = useState("");
    const { productCartList, getPrecioTotal } = useContext(CartContext);

    useEffect(()=> {

    },[])


    const createOrder = (orden)=> {
        console.log(orden);
        const orden1 = {
            buyer: {...orden},
            items: productCartList,
            total: getPrecioTotal(),
        };
        sendOrder(orden1).then((id)=> setIdOrder(id));
        console.log(orden1);
        console.log(idOrder);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const order = {
            nombre: e.target.nombre.value,
            numero: e.target.numero.value,
            email: e.target.email.value,
        };
        createOrder(order);
    }

    return (
        <Flex
            align="center"
            justify="center"
            id="contact">
            <Box
                borderRadius="lg"
                m={{ base: 5, md: 16, lg: 10 }}
                p={{ base: 5, lg: 16 }}>
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading
                            fontSize={{
                                base: '2xl',
                                md: '5xl',
                            }}>
                            Formulario de Orden de Compra
                        </Heading>
                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: 'column', md: 'row' }}>
                            <Box
                                bg={useColorModeValue('white', 'gray.700')}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                shadow="base">
                                <VStack spacing={5}>
                                    <form onSubmit={handleSubmit}>
                                        <FormControl isRequired>
                                            <FormLabel mt='3'>Nombre</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement children={<BsPerson />} />
                                                <Input type="text" name="nombre" placeholder="Ingrese su Nombre" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel mt='3'>Numero de Telefono</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement children={<MdOutlineLocalPhone />} />
                                                <Input
                                                    type="number"
                                                    name="numero"
                                                    placeholder="Ingrese su nro de telefono"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl isRequired>
                                            <FormLabel mt='3'>Email</FormLabel>
                                            <InputGroup>
                                                <InputLeftElement children={<MdOutlineEmail />} />
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Ingrese su Email"
                                                />
                                            </InputGroup>
                                        </FormControl>
                                        <Button
                                            type='submit'
                                            mt='5'
                                            colorScheme="blue"
                                            bg="blue.400"
                                            color="white"
                                            _hover={{
                                                bg: 'blue.500',
                                            }}>
                                            Enviar
                                        </Button>
                                    </form>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}

export default FormOrder;
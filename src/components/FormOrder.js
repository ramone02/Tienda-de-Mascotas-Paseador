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
    VStack,
    Text,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md';
import { CartContext } from "../context/CartContext";
import { sendOrder } from '../helpers/helpfirebase.js';
import OrderSuccess from './OrderSuccess';
import Loader from "./Loader";


const FormOrder = () => {
    const [loading, setLoading] = useState(null);
    const [id, setId] = useState(null);
    const { productCartList, getPrecioTotal, cleanCart } = useContext(CartContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    },[]);

    const onSubmit = (data, e) => {
        e.preventDefault();
        const order = {
            nombre: data.nombre,
            numero: data.numero,
            email: data.email,
        };
        createOrder(order);
        e.target.reset();
    }

    const createOrder = async (orden) => {
        const now = new Date();
        const orden1 = {
            buyer: { ...orden },
            items: productCartList,
            date: now.toLocaleString(),
            total: getPrecioTotal(),
        };

        const id = await sendOrder(orden1);
        setId(id);
        cleanCart();
    }

    if (id) {
        return (
            <>
                <OrderSuccess id={id}></OrderSuccess>
            </>
        );
    }

    return (
        <>
            {loading && <Loader></Loader>}
            {!loading && productCartList.length > 0 && <Flex
                align="center"
                justify="center"
                id="contact" >
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
                                    bg={'gray.700'}
                                    borderRadius="lg"
                                    p={8}
                                    color={'whiteAlpha.900'}
                                    shadow="base">
                                    <VStack spacing={5}>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <FormControl  >
                                                <FormLabel mt='3'>Nombre</FormLabel>
                                                <InputGroup my={3}>
                                                    <InputLeftElement children={<BsPerson />} />
                                                    <Input type="text" placeholder="Ingrese su Nombre"
                                                        {
                                                        ...register("nombre",
                                                            {
                                                                required: true,
                                                                maxLength: 20,
                                                                pattern: /^[A-Za-z]+$/i
                                                            })
                                                        } />
                                                </InputGroup>
                                                {errors?.nombre?.type === 'maxLength' && <Text borderRadius="md" bg={"red.600"}> Campo Nombre Demasiado Largo</Text>}
                                                {errors?.nombre?.type === 'required' && <Text borderRadius="md" bg={"red.600"}>Campo Nombre Requerido</Text>}
                                                {errors?.nombre?.type === 'pattern' && <Text borderRadius="md" bg={"red.600"}>Solo Letras</Text>}
                                            </FormControl>
                                            <FormControl >
                                                <FormLabel mt='3'>Numero de Telefono</FormLabel>
                                                <InputGroup my={3}>
                                                    <InputLeftElement children={<MdOutlineLocalPhone />} />
                                                    <Input
                                                        type="number"
                                                        placeholder="Ingrese su nro de telefono"
                                                        {...register("numero", {
                                                            required: true,
                                                            maxLength: 20,
                                                            pattern: '[\\d]+'
                                                        })}
                                                    />
                                                </InputGroup>
                                                {errors?.numero?.type === 'maxLength' && <Text borderRadius="md" bg={"red.600"}> Campo Numero Demasiado Largo</Text>}
                                                {errors?.numero?.type === 'required' && <Text borderRadius="md" bg={"red.600"}>Campo Numero Requerido</Text>}
                                                {errors?.numero?.type === 'pattern' && <Text borderRadius="md" bg={"red.600"}>Solo caracteres Numericos</Text>}
                                            </FormControl>
                                            <FormControl >
                                                <FormLabel mt='3'>Email</FormLabel>
                                                <InputGroup my={3}>
                                                    <InputLeftElement children={<MdOutlineEmail />} />
                                                    <Input
                                                        type="email"
                                                        placeholder="Ingrese su Email"
                                                        {...register("email", {
                                                            required: true,
                                                            maxLength: 30,
                                                            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                                        })}
                                                    />
                                                </InputGroup>
                                                {errors?.email?.type === 'maxLength' && <Text borderRadius="md" bg={"red.600"}> Campo Email Demasiado Largo</Text>}
                                                {errors?.email?.type === 'required' && <Text borderRadius="md" bg={"red.600"}>Campo Email Requerido</Text>}
                                                {errors?.email?.type === 'pattern' && <Text borderRadius="md" bg={"red.600"}>Debe Ingresar un Email Valido</Text>}
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
            </Flex>}
        </>
    );
}

export default FormOrder;
import React from "react";
import { Center, Flex, Heading, Stack, Text, Image, Link as LinkChakra } from "@chakra-ui/react";
import DogeSuccess from "../img/doge_meme.png";
import { Link } from "react-router-dom";


const OrderSuccess = ({id}) => {
    return (
        <>
            <Center py={6}>
                <Stack 
                    borderWidth="1px"
                    borderRadius="lg"
                    w={{ sm: '100%', md: '640px' }}
                    height={{ md: '25rem' }}
                    direction={{ base: 'column', md: 'row' }}
                    bg='purple.800'
                    boxShadow={'2xl'}
                    padding={4} 
                    margin={'30px'}>
                    <Flex flex={1} bg="purple.600">
                        <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={DogeSuccess}
                        />
                    </Flex>
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={1}>
                        <Heading as="h2" size="2xl" >
                            Gracias por su compra
                        </Heading>
                        <Text
                            textAlign={'center'}
                            color='gray.300'
                            p={3}
                            fontSize="2xl">
                            Aqui tiene el detalle de su Pedido:<br/>
                            {id}
                        </Text>
                        <LinkChakra bg={"teal"}
                            px={2}
                            py={1}
                            rounded={'md'}
                            _activeLink={{ color: '#38373b' }}
                            _hover={{
                                textDecoration: 'none',
                                bg: 'gray.700',
                            }}><Link to='/category/producto'>Ir a productos</Link></LinkChakra>
                        
                    </Stack>
                </Stack>
            </Center>
        </>
    );

}

export default OrderSuccess;

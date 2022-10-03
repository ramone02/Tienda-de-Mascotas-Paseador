import { Heading, Text, Link as LinkChakra, Stack, Flex, Image, Center, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import DogeEmpty from "../img/doge_meme1.png";

const CartEmpty = () => {
    return (
        <>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text"
                m={5}>
                Su Carrito está Vacio
            </Heading>
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
                    <Flex flex={1} bg="purple.700">
                        <Image
                            objectFit="cover"
                            boxSize="100%"
                            src={DogeEmpty}
                        />
                    </Flex>
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={1}>
                        <Heading as="h4" size="xl" color='white'>
                            No se ha encontrado productos en su carrito
                        </Heading>
                        <Text color={'gray.400'} mb={6}>
                            Si desea puede volver al listado de Productos para añadir al carrito
                        </Text>
                        <Text
                            textAlign={'center'}
                            color='gray.400'
                            p={3}
                            fontSize="2xl">
                        </Text>
                        <LinkChakra bg={useColorModeValue('purple.200', "teal")}
                            px={2}
                            py={1}
                            rounded={'md'}
                            _activeLink={{ color: '#38373b' }}
                            _hover={{
                                textDecoration: 'none',
                                bg: useColorModeValue('purple.200', "gray.700"),
                            }}><Link to='/category/producto'>Ir a productos</Link></LinkChakra>

                    </Stack>
                </Stack>
            </Center>
        </>
    );
}

export default CartEmpty;
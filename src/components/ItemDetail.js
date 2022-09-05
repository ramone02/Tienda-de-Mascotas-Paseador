import React from "react";
import {
    Badge,
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

const ItemDetail = ({ item }) => {
    const { id, nombre, img, razas, experiencia, descripcion, calificacion, tipo, precio } = item;
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

                        {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                            <Badge
                                px={2}
                                py={1}
                                bg={useColorModeValue('gray.50', 'gray.800')}
                                fontWeight={'400'}>
                                #art
                            </Badge>
                            <Badge
                                px={2}
                                py={1}
                                bg={useColorModeValue('gray.50', 'gray.800')}
                                fontWeight={'400'}>
                                #photography
                            </Badge>
                            <Badge
                                px={2}
                                py={1}
                                bg={useColorModeValue('gray.50', 'gray.800')}
                                fontWeight={'400'}>
                                #music
                            </Badge>
                        </Stack> */}

                        <Stack
                            width={'100%'}
                            mt={'2rem'}
                            direction={'row'}
                            padding={2}
                            justifyContent={'space-between'}
                            alignItems={'center'}>
                            {precio && <ItemCount></ItemCount>}
                            {/* <Button
                                flex={1}
                                fontSize={'sm'}
                                rounded={'full'}
                                _focus={{
                                    bg: 'gray.200',
                                }}>
                                Message
                            </Button>
                            <Button
                                flex={1}
                                fontSize={'sm'}
                                rounded={'full'}
                                bg={'blue.400'}
                                color={'white'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                }
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                _focus={{
                                    bg: 'blue.500',
                                }}>
                                Follow
                            </Button> */}
                        </Stack>
                    </Stack>
                </Stack>
            </Center>
        </>
    );
}

export default ItemDetail;
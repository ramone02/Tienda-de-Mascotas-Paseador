import React from "react";
import {
    Badge,
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

const ItemDetail = ({item})=> {
    const { id, nombre, img, razas, experiencia, descripcion, calificacion } = item;
    return(
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
                        p={1}
                        pt={2}>
                        <Heading fontSize={'2xl'} fontFamily={'body'}>
                            {nombre}
                        </Heading>
                        <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                            {calificacion}
                        </Text>
                        <Text
                            textAlign={'center'}
                            color={useColorModeValue('gray.700', 'gray.400')}
                            px={3}>
                            {descripcion}
                            <Link href={'#'} color={'blue.400'}>
                                {/* {razas.map((e, index) => <Tag key={index} color="teal.700" variant="solid"><Button key={index} variant="link">#{e}</Button></Tag>)} */}
                            </Link>
                            me in your posts
                        </Text>
                        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
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
                        </Stack>

                        <Stack
                            width={'100%'}
                            mt={'2rem'}
                            direction={'row'}
                            padding={2}
                            justifyContent={'space-between'}
                            alignItems={'center'}>
                            <Button
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
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Center>
        </>
    );
}

export default ItemDetail;
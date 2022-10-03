import React from "react";
import {
    Tag,
    Avatar,
    Box,
    Button,
    Heading,
    Text,
    VStack,
    HStack,
    IconButton, useColorModeValue
} from '@chakra-ui/react';
import { BsCalendarWeek } from "react-icons/bs";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
    const { id, nombre, img, razas, experiencia, descripcion, calificacion, tipo, precio } = data;

    return (
        <>
            <Box                
                p={5}
                textAlign="center"
                borderRadius="lg"
                borderWidth="1px"
                bg='purple.800'
            >
                <Avatar size='2xl' name='' src={img} />
                <VStack>
                    <Heading as="h3" size="lg" color='white' fontWeight="bold" mt={2}>{nombre}</Heading>
                    <Box mt={2}>
                        <VStack>
                            <Text my="1" color="white" >{descripcion} </Text>
                            {tipo && <Tag color="white" variant="solid"><Button  variant="link">#{tipo}</Button></Tag>}
                        </VStack>
                        <VStack>
                            {calificacion && <Heading alignItems="center" as="h4" color='white' size="md">Calificacion: {calificacion}/5</Heading>}
                            <HStack mt={3}>
                                {razas && razas.map((e, index) => <Button key={index} variant="link">#{e}</Button>)}
                            </HStack>
                        </VStack>
                        <HStack mt={5} justifyContent="center">
                            <Link to={`/item/${id}`}><Button bg={useColorModeValue('purple.200', 'teal')} variant="solid">Ver Más</Button></Link>
                            <IconButton
                                bg={useColorModeValue('purple.200', 'teal')}
                                size="md"
                                fontSize="28px"
                                icon={<BsCalendarWeek />}
                            />
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </>
    );
}

export default Item;
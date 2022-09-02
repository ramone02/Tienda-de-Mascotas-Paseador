import React from "react";
import {
    Tag,
    Avatar,
    Box,
    Button,
    Heading,
    Text,
    useColorModeValue,
    VStack,
    HStack,
    IconButton,
} from '@chakra-ui/react';
import { BsCalendarWeek } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Item = ({paseador}) => {
    const {id, nombre, img, razas, experiencia, descripcion, calificacion} = paseador;

    const handleClick = (e) => {

    };

    return(
        <>
            <Box
            maxWidth="280px"
            p={5}
            textAlign="center"
            borderRadius="lg"
            borderWidth="1px"
            bg="purple.800"
            >
                <Avatar size='2xl' name='' src={img} />
                <VStack>
                    <Heading as="h3" size="lg" color="white" fontWeight="bold">{nombre}</Heading>
                    <Box>
                        <VStack>
                            <Text color="white">{descripcion}</Text>
                        </VStack>
                        <HStack mt={3}>
                            {razas.map((e, index) => <Tag key={index} color="teal.700" variant="solid"><Button key={index} variant="link">#{e}</Button></Tag>)}
                            {/* <Tag color="teal.700" variant="solid"><Button variant="link">#BullDog</Button></Tag>
                            <Tag colorScheme="teal" variant="solid"><Button variant="link">#Labrador</Button></Tag>
                            <Tag colorScheme="teal" variant="solid"><Button variant="link">#Dogo</Button></Tag> */}
                        </HStack>
                        <HStack>Calificacion {calificacion}</HStack>
                        <HStack mt={5} justifyContent="center">
                            
                            <Link to={`/item/${id}`}><Button bg={"teal"} variant="solid">Contactame</Button></Link>
                            
                            <IconButton
                                bg={"teal"}
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
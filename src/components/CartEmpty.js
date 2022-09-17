import { Box, Heading, Text, Button, Link as LinkChakra, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const  CartEmpty = ()=>  {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} mb={6}>
                The page you're looking for does not seem to exist
            </Text>

            <Button bg={"teak"}>
                <LinkChakra bg={"teal"}
                    px={2}
                    py={1}
                    rounded={'md'}
                    _activeLink={{ color: '#38373b' }}
                    _hover={{
                        textDecoration: 'none',
                        bg: useColorModeValue('gray.300', 'gray.700'),
                    }}><Link to='/category/producto'>Ir a productos</Link></LinkChakra>
            </Button>
            
        </Box>
    );
}

export default CartEmpty;
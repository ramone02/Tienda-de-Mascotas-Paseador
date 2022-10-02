import {
    Box,
    Flex,
    HStack,
    Link as LinkChakra,
    IconButton,
    useDisclosure,
    Stack,
    Button,
    Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import dev from '../img/dev.png';
import CartWidget from './CartWidget';
import "../navbar.css";

const NavLink = ({ children }) => (
    <LinkChakra
        /* Probando colores */
        bg={"teal"}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: 'gray.700',
        }}>
    </LinkChakra>
);

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg='gray.900' px={4} py={2} > 
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    {/* Icono Menu Hamburguesa */}
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Link to='/'>
                                <Image boxSize='50px' src={dev}></Image>
                            </Link>                            
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                                {/* -------- Link Inicio ------------*/}
                            <LinkChakra bg={"teal"}
                                px={2}
                                py={1}
                                rounded={'md'}
                                _activeLink={{ color: '#38373b' }}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'gray.700',
                                }}><Link to='/' >Inicio</Link></LinkChakra>
                            {/* -------- Link Paseadores ------------*/}
                            <LinkChakra bg={"teal"}
                                px={2}
                                py={1}
                                rounded={'md'}
                                _activeLink={{ color: '#38373b' }}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'gray.700',
                                }}><Link to='/category/paseador'>Paseadores</Link></LinkChakra>
                            {/* -------- Link Productos ------------*/}
                            <LinkChakra bg={"teal"}
                                px={2}
                                py={1}
                                rounded={'md'}
                                _activeLink={{ color: '#38373b' }}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'gray.700',
                                }}><Link to='/category/producto'>Productos</Link></LinkChakra>
                            {/* -------- Link FAQs ------------*/}
                            <LinkChakra bg={"teal"}
                                px={2}
                                py={1}
                                rounded={'md'}
                                _activeLink={{ color: '#38373b' }}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: 'gray.700',
                                }}><Link to='/faqs'>FAQs</Link></LinkChakra>
                        </HStack>
                    </HStack>
                    {/* Boton DarkMode-LigthMode */}
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            {/* Boton Carrito */}
                            <CartWidget></CartWidget>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>

            {/* Muestra los links del menu Hamburguesa */}
            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        <LinkChakra bg={"teal"}
                            px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                            }}><Link to='/' >Inicio</Link></LinkChakra>
                        <LinkChakra bg={"teal"}
                            px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                            }}><Link to='/category/paseador'>Paseadores</Link></LinkChakra>
                        <LinkChakra bg={"teal"}
                            px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                            }}><Link to='/category/producto'>Productos</Link></LinkChakra>
                        <LinkChakra bg={"teal"}
                            px={2}
                            py={1}
                            rounded={'md'}
                            _hover={{
                                textDecoration: 'none',
                            }}><Link to='/faqs'>FAQs</Link></LinkChakra>
                    </Stack>
                </Box>
            ) : null}
        </>
    );
}
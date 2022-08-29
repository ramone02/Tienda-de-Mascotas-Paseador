import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Button,
    useColorMode,
    Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import dev from '../img/dev.png';
import CartWidget from './CartWidget';

const Links = ['Inicio', 'Productos', 'Paseadores', 'FAQs'];

const NavLink = ({ children }) => (
    <Link
    /* Probando colores */
    bg={"teal"}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.300', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
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
                            <Image boxSize='50px' src={dev}></Image>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    {/* Boton DarkMode-LigthMode */}
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            {/* Boton Carrito */}
                            <CartWidget></CartWidget>
                            <Button bg={"teal"} onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            
                        </Stack>
                    </Flex>
                </Flex>
            </Box>

            {/* Muestra los links del menu Hamburguesa */}
            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </>
    );
}
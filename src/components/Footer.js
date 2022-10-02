import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    VisuallyHidden,
} from '@chakra-ui/react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Logo = (props) => {
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 32 32"
            style={{
                enableBackground: "new 0 0 512 512",
            }}
            xmlSpace="preserve"
            width={32}
            height={32}
            {...props}
        >
            <path
                style={{
                    fill: "#CFDCE5",
                }}
                cx={256}
                cy={256}
                r={256}
                d="M32 16A16 16 0 0 1 16 32A16 16 0 0 1 0 16A16 16 0 0 1 32 16z"
            />
            <g>
                <path
                    style={{
                        fill: "#415E72",
                    }}
                    d="M5.245 16.206L12.582 12.8v1.62l-5.548 2.43v0.03l5.55 2.43v1.62l-7.338 -3.41C5.245 17.521 5.245 16.206 5.245 16.206z"
                />
                <path
                    style={{
                        fill: "#415E72",
                    }}
                    d="M13.716 21.541l3.271 -11.082h1.544l-3.271 11.082H13.716z"
                />
                <path
                    style={{
                        fill: "#415E72",
                    }}
                    d="M26.755 17.567L19.418 20.93v-1.62l5.671 -2.43V16.85l-5.671 -2.432V12.8l7.337 3.363V17.567z"
                />
            </g>
        </svg>
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg='whiteAlpha.100'
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: 'whiteAlpha.200',
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function SmallCentered() {
    return (
        <Box position={""} bottom={""}
            color='gray.200'>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Logo />
                <Stack direction={'row'} spacing={6}>
                    <Link to='/' >Inicio</Link>
                    <Link to='/category/paseador'>Paseadores</Link>
                    <Link to='/category/producto'>Productos</Link>
                    <Link to='/faqs'>FAQs</Link>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor='gray.700'>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2022 Bellido Leonardo. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/leonardo-bellido/'} target="_blank">
                            <FaLinkedin />
                        </SocialButton>
                        <SocialButton label={'GitHub'} href={'https://github.com/ramone02'} >
                            <FaGithub />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
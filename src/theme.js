import { extendTheme } from '@chakra-ui/react'

//Add your color mode config
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

//Extend the theme
const theme = extendTheme({ config })

export default theme
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        cinza: {
            100: '#222222',
            35: 'rgba(34, 34, 34, 0.350)'
        },
        roxo: '#915CF3',
        branco_escuro: '#D9D9D9',
        branco_claro: '#F3F3F3',
        bg_color: '#0F0F0F'
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
})
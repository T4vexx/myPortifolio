import { ChakraProvider, Flex } from '@chakra-ui/react'
import { theme } from "../../styles/theme"
import * as React from "react"
import Helmet from "react-helmet"
import NavBar from "../../components/NavBar"
import FivemDescription from '../../components/fivem/FivemDescription'


const Fivem = () => {
  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Otávio Augusto | Works</title>
        <meta name="description" content="Otávio Augusto | Meus Websites desenvolvidos" />
      </Helmet>
      
      <Flex 
        bg="white"  
        style={{userSelect: "none"}}
        flexDir="column"
        overflowX="hidden"
      > 
        <NavBar fix={2} />
        <FivemDescription />
      </Flex>

    </ChakraProvider>
  )
}

export default Fivem

import { Text, ChakraProvider, Flex } from '@chakra-ui/react'
import { theme } from "../styles/theme"
import * as React from "react"
import Helmet from "react-helmet"

import NavBar from "../components/NavBar"

const NotFoundPage = () => {
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
        <NavBar />

        <Flex w="100vw" h="60vh" justify="center" align="center">
          <Text fontSize="5xl">PAGE NOT FOUND</Text>
        </Flex>
      </Flex>

    </ChakraProvider>
  )
}

export default NotFoundPage


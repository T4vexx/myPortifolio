import * as React from "react"
import Helmet from "react-helmet"
import type { PageProps } from "gatsby"
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { theme } from "../styles/theme"

import NavBar from "../components/NavBar"
import Greetings from "../components/Greetings"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Otávio Augusto | Home</title>
        <meta name="description" content="Otávio Augusto | Meu portifolio" />
      </Helmet>
      
      <Flex 
        w="100vw" 
        h="100vh" 
        bg="white"  
        style={{userSelect: "none"}}
        flexDir="column"
        overflow="hidden"
      > 
        <NavBar />
        <Greetings />
      </Flex>

    </ChakraProvider>
  )
}

export default IndexPage


import React from "react"
import { Container, Flex } from "@chakra-ui/react"
import BurnShop from "./sections/BurnShop"
import RGXStore from "./sections/RGXstore"

const FivemDescription = () => {
    
    return (
        <Flex w="100vw"  flexDir="column" mt="10rem">
            <Container maxW="90rem">
                <BurnShop />
                <RGXStore />
            </Container>
        </Flex>
    )
}

export default FivemDescription
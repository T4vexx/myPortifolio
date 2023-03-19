import React from "react"
import { Container, Flex } from "@chakra-ui/react"
import BurnShop from "./sections/BurnShop"
import RGXStore from "./sections/RGXstore"

const FivemDescription = () => {
    
    return (
        <Flex w="100vw"  flexDir="column" mt={["8rem","8rem"]}>
            <Container p={["0 !important","1rem !important"]} textAlign={["center","start"]} maxW={["23rem","90rem"]}>
                <BurnShop />
                <RGXStore />
            </Container>
        </Flex>
    )
}

export default FivemDescription
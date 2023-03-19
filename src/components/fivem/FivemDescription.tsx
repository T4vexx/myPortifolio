import React from "react"
import { Container, Flex } from "@chakra-ui/react"
import BurnShop from "./sections/BurnShop"
import RGXStore from "./sections/RGXstore"

const FivemDescription = () => {
    
    return (
        <Flex w="100vw"  flexDir="column" mt={["8rem","8rem"]}>
            <Container textAlign={["center","start"]} maxW={["26rem","90rem"]}>
                <BurnShop />
                <RGXStore />
            </Container>
        </Flex>
    )
}

export default FivemDescription
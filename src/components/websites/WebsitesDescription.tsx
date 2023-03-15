import React from "react"
import { Container, Flex, Text, Grid } from "@chakra-ui/react"
import TeamProjects from "./TeamProjects"
import PersonalWorks from "./sections/PersonalWorks"
import TeamWorks from "./sections/TeamWorks"
import RocketseatWorks from "./sections/rocketseat"

const WebsitesDescription = () => {
    
    return (
        <Flex w="100vw"  flexDir="column" mt="10rem">
            <Container maxW="90rem">
                <PersonalWorks />
                <TeamWorks />
                <RocketseatWorks />
            </Container>
        </Flex>
    )
}

export default WebsitesDescription
import React from "react"
import { Container, Flex } from "@chakra-ui/react"
import TeamProjects from "./TeamProjects"
import PersonalWorks from "./sections/PersonalWorks"
import TeamWorks from "./sections/TeamWorks"
import RocketseatWorks from "./sections/rocketseat"

const WebsitesDescription = () => {
    
    return (
        <Flex w="100vw" flexDir="column" mt={["8rem","8rem"]}>
            <Container textAlign={["center","start"]} maxW={["26rem","90rem"]}>
                <PersonalWorks />
                <TeamWorks />
                <RocketseatWorks />
            </Container>
        </Flex>
    )
}

export default WebsitesDescription
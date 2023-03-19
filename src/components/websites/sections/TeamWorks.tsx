import React from "react"
import { Text, Flex } from "@chakra-ui/react"
import TeamProjects from "../TeamProjects"

const dataJson = require("./images.json")

const TeamWorks = () => {
    return (
        <section id="teamprojects">
            <Text mt="10" textAlign={["center","start"]} fontSize={["3xl","4xl"]}fontWeight="bold" >Team projects </Text>
                <Flex flexDir={["column","row"]} justify={["space-between"]} mt="10" w="100%" h={["52rem","33rem"]} align="start">
                    <TeamProjects
                        title="SEMAPED"
                        description="Site Desenvolvido para a semana da pedagogia em parceria com a eccjr UNESP-sjrp"
                        color="#998bbe"
                        fontColor="branco_claro"
                        data={dataJson.sites.teamprojects.semaped}
                        tec="GatsbyJs - Sass"
                    />
                    <TeamProjects
                        ml="6"
                        title="SEMAC"
                        description="Site Desenvolvido para a semana da computação em parceria com a eccjr UNESP-sjrp"
                        color="#caba26"
                        fontColor="branco_claro"
                        data={dataJson.sites.teamprojects.semac}
                        tec="GatsbyJs - Sass"
                    />
                </Flex>
        </section>
    )
}

export default TeamWorks

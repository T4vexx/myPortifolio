import React from "react"
import { Text, Grid } from "@chakra-ui/react"
import TeamProjects from "../TeamProjects"

const dataJson = require("./images.json")

const PersonalWorks = () => {
    return (
        <section id="personalprojects">
            <Text mt="10" fontSize="4xl" fontWeight="bold" >Personal projects: </Text>
                <Grid gap='6' templateColumns='repeat(2, 1fr)' mt="10" h="66rem">
                    <TeamProjects
                        title="Next City"
                        description="Site Desenvolvido exclusivamente por mim para a minha antiga loja de scripts de fivem e futura cidade no fivem"
                        color="#4ec25d"
                        fontColor="branco_claro"
                        data={dataJson.sites.personalprojects.next}
                        tec="Nextjs - Chakra UI"
                    />
                    <TeamProjects
                        title="CACIC"
                        description="Site Desenvolvido para o CACIC centro academico do curso de ciência da computação UNESP-sjrp"
                        color="#915CF3"
                        fontColor="branco_claro"
                        data={dataJson.sites.personalprojects.cacic}
                        tec="GatsbyJs - Chakra UI"
                    />
                    <TeamProjects
                        title="BurnStore"
                        description="Dashboard e área do cliente desenvolvido exclusivamente por mim para a loja burn no fivem"
                        color="#da844b"
                        fontColor="branco_claro"
                        data={dataJson.sites.personalprojects.burnstore}
                        tec="NextJs - Chakra UI"
                    />
                </Grid>
        </section>
    )
}

export default PersonalWorks

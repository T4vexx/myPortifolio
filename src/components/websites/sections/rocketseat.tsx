import React from "react"
import { Text, Grid } from "@chakra-ui/react"
import TeamProjects from "../TeamProjects"

const dataJson = require("./images.json")

const RocketseatWorks = () => {
    return (
        <section id="rocketprojects">
            <Text mt="10" textAlign={["center","start"]} fontSize={["3xl","4xl"]} fontWeight="bold" >Rocketseat projects </Text>
            <Grid gap='6' templateColumns={["repeat(1, 1fr)",'repeat(2, 1fr)']} mt="10" h={["80rem","67rem"]}>
                <TeamProjects
                    title="IgNews"
                    description="Site Desenvolvido como projeto do curso de react da rocketseat, nesse site criamos um newsletter como sistema de login e de postagens"
                    color="#eba417"
                    fontColor="branco_claro"
                    data={dataJson.sites.rocketprojects.ignews}
                    tec="NextsJs - Sass"
                />
                <TeamProjects
                    title="DashGo"
                    description="Site Desenvolvido como projeto do curso de react da rocketseat, nesse site criamos um painel de controles minimalista"
                    color="#d671a5"
                    fontColor="branco_claro"
                    data={dataJson.sites.rocketprojects.dashgo}
                    tec="NextJs - Chakra UI"
                />
                <TeamProjects
                    title="Worldtrip"
                    description="Site Desenvolvido como projeto do curso de react da rocketseat, nesse site criamos um portifolio de viagens para divulgar destinos pelo mundo"
                    color="#00071d"
                    fontColor="branco_claro"
                    data={dataJson.sites.rocketprojects.worldtrip}
                    tec="React - Sass"
                />
            </Grid>
        </section>
    )
}

export default RocketseatWorks

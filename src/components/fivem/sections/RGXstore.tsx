import React from "react"
import { Text, Grid } from "@chakra-ui/react"
import Scripts from "../Scripts"

const dataJson = require("../../websites/sections/images.json")

const RGXStore = () => {
    return (
        <section id="rgxstore">
            <Text mt="14" fontSize="4xl" fontWeight="bold" >RGX Store projects: </Text>
                <Grid gap='6' templateColumns='repeat(2, 1fr)' mt="10" h={["38rem","42rem"]}>
                    <Scripts
                        title="RGX Tablet"
                        description="Script para fivem (GTAv - roleplay), nesse script eu desenvolvi um sistema para polícia no fivem, possui sistemas de prender veiculo, prender/multar jogador, consultar codigo penal, anunciar, e muitas outras funcionalidade - back(Lua) e front(React/ChakraUI)"
                        color="#23272c"
                        fontColor="branco_claro"
                        data={dataJson.sites.rgxstore.tablet}
                    />
                </Grid>
        </section>
    )
}

export default RGXStore

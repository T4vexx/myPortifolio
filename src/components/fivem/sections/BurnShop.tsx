import React from "react"
import { Text, Grid } from "@chakra-ui/react"
import Scripts from "../Scripts"

const dataJson = require("../../websites/sections/images.json")

const BurnShop = () => {
    return (
        <section id="burnshop">
            <Text mt="10" fontSize="4xl" fontWeight="bold" >BurnShop projects: </Text>
                <Grid gap='6' templateColumns='repeat(2, 1fr)' mt="10" h="72rem">
                    <Scripts
                        title="Concessionária"
                        description="Script de concessionária para fivem (GTAv - roleplay), nesse script eu desenvolvi uma concessionária completa com sistemas de vendas por categorias e vendas de carros usados, aluguel de veículos, test drive, e muitas outras funcionalidades, back(Lua) e front(js puro)"
                        color="#ffab0e"
                        fontColor="branco_claro"
                        data={dataJson.sites.burnshop.concessionaria}
                    />
                    <Scripts
                        title="Garagem"
                        description="Script de garagem para fivem (GTAv - roleplay), nesse script eu desenvolvi uma garagem completa com sistemas de requisitar seus carros, emprestar o veículo, pagar multas, ver informações sobre o veículo e muito mais, back(Lua) e front(js puro)"
                        color="#2c2b2b"
                        fontColor="branco_claro"
                        data={dataJson.sites.burnshop.garagem}
                    />
                    <Scripts
                        title="Loja de departamento"
                        description="Script de loja de departamento para fivem (GTAv - roleplay), nesse script eu desenvolvi uma loja completa com sistemas de criação de vários tipos de lojas completamente customizável, possibilidades de muitas categorias de produtos, carrinho de compra, back(Lua) e front(js puro)"
                        color="#252525"
                        fontColor="branco_claro"
                        data={dataJson.sites.burnshop.lojadep}
                    />
                </Grid>
        </section>
    )
}

export default BurnShop

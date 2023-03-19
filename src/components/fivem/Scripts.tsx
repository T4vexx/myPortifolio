import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Flex, Text, VStack, Image, GridItem, Link } from "@chakra-ui/react"
import { Navigation, Autoplay } from "swiper"
import { motion } from "framer-motion";
import "swiper/css"
import "swiper/css/navigation"
import "./swiperNavigationCustom2.css"
import "swiper/css/autoplay"

type Page = {
    png: string,
    description: string,
}

interface TeamProjectsProps {
    color: string;
    title: string;
    description: string;
    ml?: string;
    data: Page[];
    fontColor: string;
    link?: string;
}

const Scripts = ({color, title, description, ml, data, fontColor, link}: TeamProjectsProps) => {
    const [modal,setModal] = useState<boolean>(false)

    const handleModal = (modala: boolean) => {
        setModal(modala)
    }

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <GridItem >
            <Flex ml={["0",`${ml}`]} w={["100%","43rem"]} h={["32rem","35rem"]} bg={color} color={fontColor} justify="center" align="center" borderRadius="15px">
                <VStack padding="0 1rem" gap="6" justify="center" align="center">
                    <Flex flexDir="column">
                        <Text fontSize="2xl"><b>{title}</b></Text>
                        <Text fontWeight="bold" fontSize="lg" >{description}</Text>
                        {link && <Link href={link} color='teal.500'>Link do youtube</Link>}
                    </Flex>
                    
                    <Flex w={["22rem","40rem"]}>
                        <Swiper
                            modules={[Navigation,Autoplay]}
                            navigation={true}
                            autoplay={{
                                delay: Number(getRandomInt(4500,5000)),
                            }}
                            slidesPerView={1}
                            spaceBetween={10}
                            onSlideChange={() => handleModal(false)}
                            loop={true}
                        >
                            {data.map((e, index) => (
                                <SwiperSlide onMouseOver={() => handleModal(true)} onMouseOut={() => handleModal(false)} key={index}>
                                    <Image src={`../../${e.png}`} alt={e.png} />
                                    {modal ?  (<motion.div transition={{ duration: 0.2 }} initial={{ opacity: 0, transform: "scale(0.5)" }}  animate={{ opacity: 1, transform: "scale(1)" }} ><Flex justify="center" align="center" w="40rem" h="100px" bg="rgba(0, 0, 0, 0.1)" position="absolute" mt="-100px">
                                        <Text fontWeight="bold" textShadow={`0 0.16rem 0.35rem ${color}`} color="rgba(255,255,255,0.8)" fontSize="2xl">{e.description}</Text>
                                    </Flex></motion.div>) : ""}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Flex>
                </VStack>
            </Flex>
           
        </GridItem>
    )
}

export default Scripts

import * as React from "react"
import { Button, Container, Flex, HStack, Text, VStack, Image,useBreakpointValue } from "@chakra-ui/react"
import { Link } from "gatsby"
import { BsArrowUpRight } from "react-icons/bs"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"

const dataJson = require("./websites/sections/images.json")

const Greetings = () => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex flexDir="column" w="100vw" h="100%" align="center" justify="space-between">
            <Flex w="100vw" h="700px" flexDir="column">
                <Container maxW={["22rem","90rem"]}>
                    <Flex justify="center" align="center" flexDir="column"  mt={["7rem","10rem"]} >
                            <Flex justify="start" align="center">
                                <Text fontWeight="bold" fontSize={["3xl","5xl"]} >Hi! I Am</Text>
                                <Text ml="5px" fontWeight="bold" color="white" fontSize={["md","lg"]}  p={["0.45rem","0.75rem"]} borderRadius="2rem" background="purple.500">Front/Back Dev</Text>
                            </Flex>
                            <Text fontWeight="bold" fontSize={["4xl","6xl"]}>Otávio Augusto</Text>

                            <Text align="center" mt="6" fontWeight="500" fontSize={["lg","xl"]}>I Work with frontend and backend development <b>since 2019</b></Text>
                            <Text align="center" mt={["6","1"]} fontWeight="500" fontSize={["lg","xl"]}>I'm currently studying computer science at UNESP/Ibilce</Text>

                            <HStack mt={["14","16"]} gap="4">
                                <a href="https://wa.link/hrci4x" rel="noreferrer" target="_blank"><Button style={{ borderRadius: "0"}} colorScheme="purple" size='lg' variant="solid" >Hire Me</Button></a>
                                <Link to="/works/websites"><Button _hover={{ background: "rgba(0,0,0,0.1) "}} style={{ borderRadius: "0"}} colorScheme="black" size='lg' variant="ghost" rightIcon={< BsArrowUpRight />}>Works</Button></Link>
                            </HStack>

                            <HStack align="start" mt={["16","20"]}gap={["10","20"]}>
                                <Flex flexDir="column" textAlign={["center","start"]}>
                                    <Text fontWeight="900" fontSize="3xl">+16</Text>
                                    <Text fontWeight="bold">Development skills</Text>
                                </Flex>

                                <Flex flexDir="column" textAlign={["center","start"]}>
                                    <Text fontWeight="900" fontSize="3xl">Contact</Text>
                                    <Text fontWeight="bold">tavinteixeira@hotmail.com</Text>
                                </Flex>
                            </HStack>
                    </Flex>
                </Container>
            </Flex>


            <Flex flexDir="column">
                <Flex w="100vw" h={["4rem","3.125rem"]} align="center" bg="#0f0f0fd6">
                    <Container maxW="90rem" >
                        <Flex align="center" justify="space-between">
                            {!isWideVersion ? (
                                <>
                                   <Swiper
                                    modules={[Navigation,Autoplay]}
                                    navigation={true}
                                    autoplay={{
                                        delay: 3000,
                                    }}
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    loop={true}
                                >
                                    {dataJson.devicons.map((e, index: number) => (
                                        <SwiperSlide key={index}>
                                            <Image align="center" height="35" width="40" src={e.png} alt={e.png} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper> 
                                </>
                            ) 
                            : 
                            (
                                <>
                                    <Image align="center" alt="T4vexx-Sass" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"/>
                                    <Image align="center" alt="T4vexx-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
                                    <Image align="center" alt="T4vexx-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
                                    <Image align="center" alt="T4vexx-Nginx" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />
                                    <Image align="center" alt="T4vexx-Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
                                    <Image align="center" alt="T4vexx-Mongo" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                                    <Image align="center" alt="T4vexx-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
                                    <Image align="center" alt="T4vexx-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
                                    <Image align="center" alt="T4vexx-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"/>
                                    <Image align="center" alt="T4vexx-Docker" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
                                    <Image align="center" alt="T4vexx-c" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                                    <Image align="center" alt="T4vexx-Postgres" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"/>
                                    <Image align="center" alt="T4vexx-Mysql" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"/>
                                    <Image align="center" alt="T4vexx-Lua" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-plain-wordmark.svg"/>
                                    <Image align="center" alt="T4vexx-Gatsby" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg"/>
                                    <Image align="center" alt="T4vexx-Linux" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                                    <Image align="center" alt="T4vexx-NextJs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"/> 
                                </>
                            )}
                        </Flex>
                    </Container>
                </Flex>

                <Flex w="100vw" h="9.375rem" bg="bg_color" align="center">
                    <Container maxW="90rem">
                        <Flex justify="space-between" align="center">
                            <VStack>
                                <Text textAlign="center" color="branco_escuro" fontWeight="bold" fontSize={["md","xl"]}>Projects statistics<br/>Github</Text>
                                <a href="https://github.com/T4vexx" rel="noreferrer" target="_black"><Button colorScheme="yellow" style={{ borderRadius: "0"}} size={["sm",'md']} variant="solid">Know More</Button></a>
                            </VStack>

                            <VStack gap="3">
                                <Flex borderBottom="2px solid rgba(217, 217, 217, 0.22)" w={["200px","250px"]} justify="space-between"><Text color="branco_claro" fontWeight="500" fontSize={["md","lg"]}>Website developed</Text>  <Text color="branco_claro" fontWeight="500" fontSize={["md","lg"]}>5</Text></Flex>
                                <Flex borderBottom="2px solid rgba(217, 217, 217, 0.22)" w={["200px","250px"]} justify="space-between"><Text color="branco_claro" fontWeight="500" fontSize={["md","lg"]}>Fivem scripts developed</Text> <Text color="branco_claro" fontWeight="500" fontSize={["md","lg"]}>10</Text></Flex>
                            </VStack>
                        </Flex>
                    </Container>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Greetings

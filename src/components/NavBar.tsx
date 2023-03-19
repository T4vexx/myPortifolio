import React, { useEffect, useState } from "react"
import { Button, Container, Flex, HStack, Text, Icon, useBreakpointValue, Image, VStack } from "@chakra-ui/react"
import { Link } from "gatsby"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"
import { Link as ScrollLink } from "react-scroll"

import * as styles from "./linknav.module.scss"

interface NavBarProps {
    fix?: number;
}

interface Menu {
    openModal: boolean;
    setOpenModal: () => void;
    fix?: number;
}

const Menu = ({openModal,setOpenModal,fix}: Menu) => {

    return (
        <Flex
            zIndex="9999"
            position="fixed"
            backgroundColor="bg_color"
            flex="column"
            align="start !important"
            w="100vw"
            h="100vh"
            top="0"
            left="0"
        >
            <Container maxW={["22rem","90rem"]}  padding="2.5 16" style={{ userSelect: "none" }}>
                <Flex align="start" justify="end" padding="1.875rem 0 1.875rem 0">
                    <Image onClick={setOpenModal} boxSize="3rem" src="../../closeModal.svg" alt="Fechar menu"/>
                </Flex>
 
                <Flex align="center" justify="center">
                    <VStack gap="10" style={{ userSelect: "none", outline: 'none' }} className={styles.texts} mt="20">
                    <Link  activeStyle={{borderBottom: "1px solid #805AD5"}} to="/"><Text color="white" fontSize="2xl">Home</Text></Link>
                    
                    <Link activeStyle={{borderBottom: "1px solid #805AD5"}} to="/works/websites"><Text color="white" fontSize="2xl">Websites</Text></Link>
                    <Link activeStyle={{borderBottom: "1px solid #805AD5"}} to="/works/fivem"><Text color="white" fontSize="2xl">Fivem</Text></Link>

                    <a href="https://wa.link/hrci4x" rel="noreferrer" target="_blank"><Button style={{ borderRadius: "0"}} size="lg" colorScheme="purple" variant='outline'>Let's chat</Button></a>
                    </VStack>
                </Flex>
            </Container>
            
        </Flex>
    );
}

const NavBar = ({fix}: NavBarProps) => {
    const [isModalShowing,setIsModalShowing] = useState<boolean>(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [menu,setMenu] = useState<boolean>(false)
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    const handleOpenModalMenu = () => {
        setMenu(!menu)
    }

    const handleModal = (states?: boolean) => {
        if(states) {
            setIsModalShowing(states)
        } else {
            setIsModalShowing(!isModalShowing)
        }   
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        console.log(scrollPosition)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition,setScrollPosition]);


  return (
    <Flex background="#ffffff" w="100vw" position="fixed" zIndex="1000" >
        {!isWideVersion ? (
            <Container maxW="22rem">
                <Flex  justify="space-between" h="9vh" align="center" w="100%" borderBottom="2px solid rgba(217, 217, 217, 0.4)">
                    <Link to="/"><Flex fontSize="2xl" fontWeight="bold">Otavio<Text color="purple.700">.</Text></Flex></Link>


                    <Image onClick={handleOpenModalMenu} mt="-10px" boxSize='3rem' src="../../openModal.svg" alt='Menu' />
                </Flex>

                {(fix === 1) ? (
                    <Flex justify="center" align="center" borderBottom="1px solid rgba(0, 0, 0, 0.03)" w="100%" h={["5rem","3.125rem"]} bg={["transparent","branco_escuro"]}>
                        <HStack textAlign={["center","start"]} style={{ userSelect: "none" }} className={styles.texts} gap="6"> 
                            <ScrollLink
                                to="personalprojects"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                Personal
                            </ScrollLink>
                            <ScrollLink
                                to="teamprojects"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                Team
                            </ScrollLink>
                            <ScrollLink
                                to="rocketprojects"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                Rocketseat
                            </ScrollLink>
                        </HStack>   
                    </Flex>) : (fix === 2) ? (
                    <Flex justify="center" align="center" borderBottom="1px solid rgba(0, 0, 0, 0.03)" w="100%" h={["5rem","3.125rem"]} bg={["transparent","branco_escuro"]}>
                        <HStack textAlign={["center","start"]} style={{ userSelect: "none" }} className={styles.texts} gap="6"> 
                            <ScrollLink
                                to="burnshop"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                Burnshop
                            </ScrollLink>
                            <ScrollLink
                                to="rgxstore"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                RGXstore
                            </ScrollLink>
                        </HStack>   
                    </Flex>) : ""}  
            </Container>
        ) : (
            <Container maxW="90rem">
                <Flex  justify="space-between" h="9vh" align="center" w="100%" borderBottom="2px solid rgba(217, 217, 217, 0.4)">
                    <Flex fontSize="3xl" fontWeight="bold">Otavio<Text color="purple.700">.</Text></Flex>

                    <HStack gap="10" fontWeight="bold" fontSize="lg">
                        <Flex><Link activeStyle={{borderBottom: "1px solid #805AD5"}} to="/">Home</Link></Flex>
                        <Flex onClick={() => handleModal()} onMouseOver={() => handleModal(true)} onMouseOut={() => handleModal(false)}>  
                            <Flex justify="center" align="center">Works<Icon color="purple.500" fontSize="2xl" as={isModalShowing ? RiArrowDropUpLine : RiArrowDropDownLine}/></Flex>
                            {isModalShowing ? (
                                <Flex position="absolute" flexDir="column" mt="6"  width="120px" bg="gray.100">
                                    <Flex _hover={{bg: "gray.200"}} borderBottom="1px solid #d9d9d98f" p="0.5rem" justify="center" align="center">
                                        <Link activeStyle={{borderBottom: "1px solid #805AD5"}} to="/works/websites"><Text fontWeight="500" fontSize="lg">Websites</Text></Link>
                                    </Flex>
                                    <Flex _hover={{bg: "gray.200"}} p="0.5rem" justify="center" align="center">
                                        <Link activeStyle={{borderBottom: "1px solid #805AD5"}} to="/works/fivem"><Text fontWeight="500" fontSize="lg">Fivem</Text></Link>
                                    </Flex>
                                </Flex>
                            ) : ""}
                        </Flex>
                        
                    </HStack>

                    <a href="https://wa.link/hrci4x" rel="noreferrer" target="_blank"><Button style={{ borderRadius: "0"}} size="lg" colorScheme="purple" variant='outline'>Let's chat</Button></a>
                </Flex>
                {(fix === 1) ? (<Flex justify="center" align="center" borderBottom="1px solid rgba(0, 0, 0, 0.03)" w="100%" h="3.125rem" bg="branco_escuro">
                        <HStack style={{ userSelect: "none" }} className={styles.texts} gap="6"> 
                            <ScrollLink
                                to="personalprojects"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                Personal projects
                            </ScrollLink>
                            <ScrollLink
                                to="teamprojects"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                Team projects
                            </ScrollLink>
                            <ScrollLink
                                to="rocketprojects"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                Rocketseat projects
                            </ScrollLink>
                        </HStack>   
                    </Flex>) : (fix === 2) ? (<Flex justify="center" align="center" borderBottom="1px solid rgba(0, 0, 0, 0.03)" w="100%" h="3.125rem" bg="branco_escuro">
                        <HStack style={{ userSelect: "none" }} className={styles.texts} gap="6"> 
                            <ScrollLink
                                to="burnshop"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                Burnshop Projects
                            </ScrollLink>
                            <ScrollLink
                                to="rgxstore"
                                offset={-200}
                                smooth={true}
                                duration={700}
                                activeClass={styles.active}
                                spy={true}
                            >
                                RGXstore projects
                            </ScrollLink>
                        </HStack>   
                    </Flex>) : ""}
                
            </Container>
        )}
        { menu ? <Menu fix={fix} openModal={menu} setOpenModal={handleOpenModalMenu} /> : "" }
    </Flex>
  )
}

export default NavBar

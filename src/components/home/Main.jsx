import { Button } from "@/components/ui/button"
import { HStack,Box,Flex,Text,Image } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Main1 from "./Main1"
import Main2 from "./Main2"
import Main3 from "./Main3"
import Main4 from "./Main4"
import Main5 from "./Main5"
import Main6 from "./Main6"
import VIP from "./VIP"
import Email from "./Email"

export default function Main(){

        return <Box>
                <Flex gap='10' py='4vw' px='25px' flexDirection={'column'}>
                    <Main1/>
                    <Main2/>
                </Flex>
                <Main3/>
                <Main4/>
                <Main5/>
                <Main6/>
                <VIP/>
                <Email/>
                
        </Box>
}
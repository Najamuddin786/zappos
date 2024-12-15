import { Button } from "@/components/ui/button"
import { HStack,Flex,Box,Text,Image } from "@chakra-ui/react"
import Left from "./Left"
import Right from "./Right"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Main(){
       

        return <>
               <Flex pl='40px'>
                    <Box w='20%' ><Left/></Box>
                    <Box w='80%' p='20px'><Right/></Box>
               </Flex>
                
        </>
}
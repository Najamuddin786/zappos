import { Button } from "@/components/ui/button"
import { HStack,Flex,Box } from "@chakra-ui/react"
import NavIcon from "./navIcon"
import Copyright from "./Copyright"
import Hr from "./Hr"
import FotMain from "./FotMain"

export default function Footer(){

        return <>
                <Flex color={'black'} gap={10} p='4vw'  flexDir={'column'} >
                    <NavIcon/>
                    <FotMain/>
                    <Hr/>
                    <Box mt='-2vh'><Copyright/></Box>

                </Flex>
        </>
}
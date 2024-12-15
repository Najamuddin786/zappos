import { Button } from "@/components/ui/button"
import { HStack,Flex } from "@chakra-ui/react"
import Navbar from "../components/navbar/Navbar"
import Notification from "../components/navbar/Notification"
import Header1 from "../components/navbar/Header1"
import Header2 from "../components/navbar/Header2"
import Hr from "../components/footer/Hr"
import Main from "../components/product/Main"

export default function Product({}){

        return <>
                <Flex mb='20px' gap='1' flexDirection={'column'}>
                    <Notification/>
                    <Header1/>
                    <Header2/>
                    <hr />
                </Flex>
                {/* ------- SECAND MAIN */}
                <Main/>
                
        </>
}
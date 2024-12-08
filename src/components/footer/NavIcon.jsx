import { Button } from "@/components/ui/button"
import { HStack,Flex ,Text,Link} from "@chakra-ui/react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export default function NavIcon(){

        return <>
                <Flex fontSize={'20px'} gap='5'>
                    <Link _hover={{color:"blue"}}><FaFacebook/></Link>
                    <Link _hover={{color:"blue"}}><FaInstagram/></Link>
                </Flex>
        </>
}
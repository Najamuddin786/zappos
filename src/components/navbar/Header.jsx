import { Button } from "@/components/ui/button"
import { HStack,Box } from "@chakra-ui/react"
import Header1 from "./Header1"
import Header2 from "./Header2"
import Slider from "./Slider"

export default function Header(){

        return <>
                <Box>
                <Header1/>
                <Header2/>
                <Box py='20px'><hr /></Box>
                <Slider/>
                </Box>
        </>
}
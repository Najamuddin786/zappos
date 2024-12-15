import { Button } from "@/components/ui/button"
import { HStack,Flex ,Text,Link,Image,Box} from "@chakra-ui/react"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export default function Slider(){

        return <>
                <Flex bg='rgb(207, 190, 164)' justifyContent={'space-between'} fontSize={'20px'} gap='5' >
                    <Box w='30px' bg='yellow'><Image  src='https://media.istockphoto.com/id/698898480/photo/green-ribbon-border-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=LqVXucTNO0oFGfV_Db9kZTS_pd4OxuIyRxBaEy5yueg='/></Box>
                    <Flex>
                        <Text>Main 34%</Text>
                    </Flex>
                    <Box w='100px'><Image src='https://s.alicdn.com/@sc04/kf/H0b655ce97ea4475dbcff092f280eb54aN.jpg_720x720q50.jpg'/></Box>
                </Flex>
        </>
}
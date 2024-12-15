import { Button } from "@/components/ui/button"
import { HStack,Flex,Text,Image,Box,Input } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function Email(){

        return <>
                <Flex my={'10px'} gap='5' p='25px' bg='#E7F4FF' flexDirection={'column'}>
                    <Box fontSize={{base:"20px",xl:"26px"}} fontWeight={600}>Join Our List, Get 10% Off</Box>
                    <Box  w={{base:"100%",md:"55%"}} fontSize={{base:"15px",xl:"16px"}}>Sign up for Zappos emails—new subscribers get 10% 
                        off a future order!* Plus, get early access to sales,
                         coupons, and more. (One code per email address.)
                    </Box>
                    <Flex flexDirection={{base:"column",xl:"row"}}  gap='4' w={{base:"100%",md:"52%"}} >
                        <Input _focus={{border:"2px solid blue"}} borderRadius={'md'} h={{base:'',xl:"9vh"}} fontSize={{base:"16px",xl:"20px"}} bg='white' type="email" placeholder="Email Address"/>
                        <Button _hover={{background:"blue"}} borderRadius='md' fontSize={{base:"16px",xl:"20px"}} fontWeight='600' px='15px' h={{base:'',xl:"9vh"}} bg='black' color="white">Join the Party</Button>
                    </Flex>

                </Flex>
                
        </>
}
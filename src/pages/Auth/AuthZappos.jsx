import { Button } from "@/components/ui/button"
import { VStack,HStack,Flex,Text,Box ,Center,Image,Input} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { IoMdArrowDropright } from "react-icons/io";
import { TfiInfo } from "react-icons/tfi";


export default function AuthZappos(){

        return <>
               <Center borderRadius={'md'} flexDirection={'column'} p='5px'>
                    <Box  w={{base:"100%",md:"350px"}}>
                        <Center><Image w='140px' src='data:image/jpeg;base64,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'/>
                        </Center>
                    </Box>
                    <Flex gap='3' fontWeight={500} p='20px' flexDirection={'column'} borderRadius={'md'} w={{base:"100%",md:"350px"}} border={'1px solid gray'}>
                        <Text  fontWeight={500} fontSize={'24px'}>Create account</Text>
                        <Flex flexDirection={'column'}>
                            <Box>Your name</Box>
                            <Input  h='32px' fontWeight={400} fontSize={'14px'} _focus={{border:'1.5px solid rgb(19, 51, 84)'}} placeholder="First and last name"/>
                        </Flex>
                        <Flex flexDirection={'column'}>
                            <Box>Email</Box>
                            <Input  h='32px' fontWeight={400} fontSize={'14px'} _focus={{border:'1.5px solid rgb(19, 51, 84)'}} placeholder="First and last name"/>
                        </Flex>
                        <Flex flexDirection={'column'}>
                            <Box>Password</Box>
                            <Input  h='32px' fontWeight={400} fontSize={'14px'} _focus={{border:'1.5px solid rgb(19, 51, 84)'}} placeholder="At least 6 characters."/>
                        </Flex>
                        <HStack fontSize={'14px'} fontWeight={'400'}>
                            <Box  transform="rotateY(180deg)" color={'blue.800'}><TfiInfo/></Box>
                            <Text>Passwords must be at least 6 characters.</Text>
                        </HStack>
                        <Flex flexDirection={'column'}>
                            <Box>Re-enter password</Box>
                            <Input  h='32px' fontWeight={400} fontSize={'14px'} _focus={{border:'1.5px solid rgb(19, 51, 84)'}} placeholder="First and last name"/>
                        </Flex>
                        <Button bg='rgb(19, 51, 84)'>Create your Zappos account</Button>
                        <Box fontWeight={400} fontSize={'12px'}>
                        Need additional help? Don't worry! You can reach us via phone,
                         text, or live chat. See <span style={{color:"rgb(19,51,84)"}}>here</span> for contact details
                        </Box>
                        <Center><Box boxShadow={'sm'} w='80%' h='1px' bg='gray.100'></Box></Center>
                        <HStack fontSize={'14px'} fontWeight={'400'}>
                            <Text>Already have an account?</Text>
                            <Link><HStack>Sing in <Box><IoMdArrowDropright/></Box></HStack></Link>
                        </HStack>

                    </Flex>
               </Center>
                
        </>
}
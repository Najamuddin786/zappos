import { Button } from "@/components/ui/button"
import { HStack ,Flex,Text,Image,Box, Group,InputAddon,Input} from "@chakra-ui/react"
import { BiBorderRadius } from "react-icons/bi";
import Card from "./Card";


import Demo from "./LoginBox";


export default function Header1(){

        return <>
                <Flex   px='25px' pb='0px' alignItems={'center'} justifyContent={'space-between'}>
                        <Flex gap='10' alignItems={'center'}>
                                <Box mt='10px' textAlign={'center'}><Image mt='10px'  src='https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg'/>
                                </Box>
                                <HStack  w='520px'> 
                                        <Group w='100%' attached >
                                                <Input border={'1px solid'} borderRadius={'100px'}  placeholder="Search for shoes,clothes,etc" />
                                                <InputAddon border={'1px solid'} borderRadius={'100px'}>
                                                <Text px='10px' fontSize={'16px'} fontWeight={'600'}>Search</Text>
                                                </InputAddon>
                                        </Group> 
                                </HStack>
                        </Flex>
                        <Flex alignItems={'center'} color={'rgba(0, 0, 0, 0.805)'} gap={'5'}  fontSize={'2xl'}>
                                <Box cursor={'pointer'} _hover={{background:"rgba(0, 0, 0, 0.055)"}} p='5px' borderRadius={'50px'}><Demo/></Box>
                                
                                <Box  cursor={'pointer'} _hover={{background:"rgba(0, 0, 0, 0.055)"}} p='5px' borderRadius={'50px'}><Card/></Box>
                                
                        </Flex>
                </Flex>
        </>
}
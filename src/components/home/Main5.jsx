import { Button } from "@/components/ui/button"
import { HStack,Flex,Text,Image,Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function Main5(){

        return <>
                <Link><Flex  gap='5' w='100vw' py='35px' flexDirection={{base:"column",sm:"row"}}>
                    <Box w={{base:"100%",sm:'55%',xl:'68%'}}><Image w='full' src='data:image/jpeg;base64,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'/></Box>
                    <Flex gap='2' w={{base:"100%",sm:'45%',xl:'32%'}} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                        <Text fontSize={'22px'} fontWeight={'600'}>Sparkle in Every Step</Text>
                        <Box textAlign={'center'}>Soirée-ready styles that say, "I've arrived."</Box>
                        <Text fontSize={'14px'} style={{textUnderlineOffset: "4px"}} textDecoration={'underline'} fontWeight={'600'}>Shop Sam Edelman</Text>
                    </Flex>
                </Flex>
                </Link>
                
        </>
}
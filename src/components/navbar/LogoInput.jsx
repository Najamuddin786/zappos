import { Button } from "@/components/ui/button"
import { HStack ,Text,Box,Flex,Image} from "@chakra-ui/react"

export default function LogoInput({image='',titel=''}){

        return <>
                <Flex _active={{ borderColor: 'blue' }} fontWeight={700} alignItems={'center'} h='40px' my='5px' justifyContent={'center'} gap='5' w='full' borderRadius={'md'} border={'1px solid'}>
                    {image ?  <Image borderRadius={'md'} h='full' w='40px' src={image}/> :''}
                    <Box>{titel}</Box>
                </Flex>
                
        </>
}
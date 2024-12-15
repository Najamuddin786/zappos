import { Button } from "@/components/ui/button"
import { Flex,Text,Box } from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { HiOutlineShoppingBag } from "react-icons/hi";



export default function Card(){
     let singIn=false

  return (
    <DrawerRoot size='md'>
      <DrawerBackdrop />
      <DrawerTrigger asChild >
          <HiOutlineShoppingBag/>
      </DrawerTrigger>
      <DrawerContent  >
        <DrawerHeader >
          <Flex alignItems={'center'}>
            <DrawerTitle>My Bag</DrawerTitle>
            <DrawerCloseTrigger mt='10px'/>
          </Flex>
        </DrawerHeader>
        <DrawerBody >
            <Flex flexDirection={'column'} gap='2'>
                <hr />
                {singIn ? <Text></Text> :<Text> Nothing to see here yet! Sign in to see items that you've 
                    previously placed in your Bag or check out all the awesome things
                     you can buy on Zappos.com! </Text>}

            </Flex>
        </DrawerBody>
        
        
      </DrawerContent>
    </DrawerRoot>
  )
}

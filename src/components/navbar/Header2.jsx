import { Button } from "@/components/ui/button"
import { HStack,Flex,Text } from "@chakra-ui/react"

export default function Header2(){
    const menuItems = [
        "New",
        "Women",
        "Men",
        "Kids",
        "Collections",
        "Brands",
        "Sale",
        "Activity",
        "Gifts",
        "Help & Support",
      ];
      

        return <>
                
                <Flex  justifyContent="space-between" color="black" p="25px" pb='0px' fontSize="16px" fontWeight="600">
                    {/* First Section */}
                    <Flex  gap="2" w="60vw" justifyContent="space-between">
                        {menuItems.slice(0, -1).map((e, i) => (
                        <Flex key={i} >
                            <Text borderRadius={'50px'} py='2' px='4' _hover={{background:"gray.100"}} color={e=='Sale' ? "red" :''} cursor={'pointer'}>{e}</Text>
                        </Flex>
                        ))}
                    </Flex>

                    {/* Last Item Section */}
                    <Flex>
                        <Text borderRadius={'50px'} py='2' px='4' _hover={{background:"gray.100"}}>{menuItems[menuItems.length - 1]}</Text>
                    </Flex>
                </Flex>

        </>
}
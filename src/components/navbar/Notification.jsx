import { Button } from "@/components/ui/button"
import { HStack,Flex,Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Notification(){
    let dis=[{titel:"Cyber Week Sale: Up to 70% off!",name:"Shop Our Sale"},{title:'Run faster in well-reviewed sneakers.',name:"Shop Winter Running Shoes"}]
    let [index,setIndex]=useState(1)
    const linkHoverStyle = {
        color: "blue",
        textDecoration: "underline",
        textUnderlineOffset: "4px", // Consistent gap between text and underline
         textDecorationThickness: "1px"
      };

      useEffect(() => {
        const intervalID = setInterval(() => {
          setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)); // Toggle between 0 and 1
        }, 5000);
    
        return () => clearInterval(intervalID); // Cleanup on unmount
      }, []);

        return <>
                <Flex alignItems={'center'} flexDir={{base:"column",sm:'row'}} p='2' bg='rgb(231, 244, 255)' justifyContent={'center'}>
                    <Text>{dis[0].titel}</Text>
                    <Link><Text _hover={linkHoverStyle} fontWeight={'600'}>{dis[index].name}</Text></Link>
                </Flex>
        </>
}
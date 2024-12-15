import { Button } from "@/components/ui/button"
import { HStack,Box,Flex,Text,Image } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Main1(){
    let [data,setData]=useState([])

    useEffect(()=>{
        let get=async () => {
            try {
                let res=await axios('http://localhost:3000/products')
                console.log(res.data)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
            
        }
        get()

    },[])
 // Consistent gap between text and underline
      //   textDecorationThickness: "1px"
        return <>
                <Box>
                    <Text mb={'20px'} fontWeight={'600'} fontSize={'2xl'}>Trending Now</Text>
                    <Flex gap='5' flexWrap={'wrap'} justifyContent={'space-between'}>
                        {data?.map((e,i)=>{
                        return <Link key={e.id}>
                                <Box >
                                <Image h='250px' w='185px' src={e.image}/>
                                <Box fontWeight={600} textAlign={'center'}>
                                    <Link><Text style={{textUnderlineOffset: "4px"}}  textDecoration={'underline'} mt='10px'>{e.name}</Text></Link>
                                    </Box>
                            </Box>
                        </Link>
                        })}
                    </Flex>
                </Box>
                
        </>
}
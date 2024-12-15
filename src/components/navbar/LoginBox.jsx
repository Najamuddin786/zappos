import { Button } from "@/components/ui/button"
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaRegCircleUser } from "react-icons/fa6";
import { Box,Flex,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoInput from "./LogoInput";

export default function Demo(){
    const benefits = [
        "If you are an Amazon Prime Member, sign in with Amazon to qualify for free upgraded shipping!",
        "Get FREE Expedited Shipping",
        "Earn 2 Points for Every $1 Spent",
        "Receive Bonus Points on Select Brands",
        "Redeem Points for VIP Codes"
      ];
    const benefit = [
        "If you are an Amazon Prime Member, sign in with Amazon to qualify for free upgraded shipping!",
        "Get FREE Expedited Shipping",
      ];

      
  return (
    <DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <FaRegCircleUser/>
      </DialogTrigger>
      <DialogContent   m='-40px'  w={{base:"100vw",md:"80vw" ,xl:"70vw"}} h={{base:"90vh",md:"80vh"}}>
        <DialogHeader>
          <DialogTitle ><Box fontSize={'2xl'} fontWeight={'900'}>Sing-In</Box></DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <Flex  flexDirection={'column'} justifyContent={'space-between'} gap={{base:"1",md:"5"}}>
                <Box  w='100%'><hr /></Box>
                <Flex  gap={{base:"1",md:"5"}} flexDirection={{base:"column-reverse",md:"row"}}>
                    <Flex w={{base:"100%",xl:"35%"}}  flexDirection={'column'} gap='1'>
                        <Link>
                          <LogoInput titel={'Sing in with Zappos'} 
                          image={'data:image/png;base64,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'}
                          />
                        </Link>
                        <Link>
                        <Link>
                          <LogoInput titel={'Sing in with Amazon'} 
                          image={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhQSBxEWFRUXDRYQGRgWGRsXFxUWIB0YFh8RIB4kHiggJBolHR8VITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFQ8NGislFRk3Kys3LTg3KzgtNystLSsrKysrLS0tLi0tKysrLSstKysrLSsrKy0tKysrKystKystK//AABEIAG4AtAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEEBQYIAwL/xAA8EAABAwMDAgQCBAwHAAAAAAABAAIDBAURBhIhBzETQVFhcXMUI4GRCCIyOFKhsbKztNHxFSQ0Njdikv/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHxEBAQEAAgEFAQAAAAAAAAAAAAECETEEAyEicYES/9oADAMBAAIRAxEAPwCcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFCGqdNXS9aqldrivjpKT8Ywt8dgBAOGhrHEc45LiPb4BN6KAOkF1q7bryShgqTPTFsrW8lzDs5bMwZOMgeXfPngKzijv996p1tJbat8QknqI3uJc4Mia/JDW5HoAMEd+4QdFouZdNUupoNUz2a31hj3yvike0uIDWZeZGjOQSBjjBOcErMdNZLtpnqm63SzF7C6WN4yS07YzI2QA9n8D7yEHQSKFtZ6eu181a92rq5lJQAu8L65jQWggABpI+sPckg47eiw3TC5T2fqX9Bt9Uaile6RgIOWODWGRsjRkgHjBI78oOgkUMdVtLuonz3Gpus0TXFojha1xJk24bE0+KO5BOccDPosf0ebdaG31V1ussjqdlJI1rXOcfELcPc8Z8ht2g+pPoUE7oudtN2G89UJaqquVbIxzHARNbktDyCQwDIDWAAduTnPxy3T7WNyumjLlS3KVzpKe3TSxyEkyBux4LS7uS04we/PsEE5ouZdKWfUertJVIZWOZDTudNscXOMsmzOwnPADW+/J7ckqQPwfrxWXCzVEVZI54hljDNxLiGuBywE+WWk48soJaREQEREBERAREQEREBcyaZuFmrdfVEvUN2SPEI8XcWiRrgPDc0eQaCA3GOMei6bWv3DR+nLlW+NX0UL5MglxYCXH/sOzvtyggnp5c6KPq4JKaMxxTTzNiY1uNrJAfD/FHYYx24HwWd0H/wA9Vvzaz99TA62UscvjUcMQmEQha8sGQwHIjyACG+WB29DjCxlHDZaC7umlpo4ah5cXSbRl2TkuDwOQcck45We/VmbxpMzb0jDS35ws/wA+p/cK+rX+cg/50v8ALlS7SWWyxXM1VNBEJnEkygDcc9ySPVejdP2dt3NUynj8c5+tAG85Gw8/DhTnede8pZZ2gGkrbZX9U6h+vjljXzNAfuLWua7DIyBzsAzgdiceq+dLXO2s6xxT2+LZA+rcyJrWbRtex0LHhoHAJIPtyp5uWkdO3Os8W5UkUj+Muc0EnHbd+l9uVdttlviqmSMhjD44vCY4NaHMj/QaccN9h7qbuQ45c+dVr7Xaj1pJAI3uippXQtYzJJIOHyHAOC4jGccAD3zu+n9YU2r7PPaaajdSPNukjjbu3MADdoBJDSO48jnnlb08xsrHNoJY43PkL3BkYJc7ze5w88Dkletkb9MxNVta6RrnsbJtAcGE8gHGQCR5HnAysMeTNb/mRa4snPKHekesbZo+irYL+XRPEgkDSHFzntBY6LgcPyB39fZWvSu1VMmn7vXStww2uogafIuLTI7Hwwz71Nd00dp271HiXOkie/jLiMOOO24jG77Vkm2+jbb/AAI4mCLwzH4YaAzYRgs2jjGCeF0qIi6Ff7CuHzJP4Sr+DR/pK75kH7JVK1qsFptNI6K2QRxMeSXNY0AOJGDn144VLNYrTZN3+EQRw7yC7YA3JGcZx3xk4+JQZdERAREQEREBERAREQEREHyrSqpIKqPbM0OHv5H1B7g+6vFQqms51ONQls941ufTskZzQSFvng5/UQQR9xXl9Dv8X5EmefUH9oW04Xzgei5b4OOec2z9bZ8jU7kv21kU2oZPyn4/8j9YGV6ssVVOP87MT7AkgfAn+i2IBVKZ8LMvOrb91OvIt6kn4xkNthp4S2mG3LSMjk/HJ5OM8K7pYGUsIZEMADH91cKq6M+nnN+MZXVvZyqoi1VEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z'}
                          />
                        </Link>
                        </Link>
                        <Link>
                          <LogoInput titel={'Sing in with Google'} 
                          image={'data:image/jpeg;base64,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'}
                          />
                        </Link>
                        <Flex alignItems={'center'} gap='5'><Text h='2px' w='40%' bg='gray.100'></Text><Text>or</Text><Text bg='gray.100' h='2px' w='40%'></Text></Flex>
                        <Link to='/AuthZappos'>
                            <LogoInput titel={'Create your Zappos Account'} />
                        </Link>
                    </Flex>
                    <Box display={{base:"none",md:"block"}} w='3px' borderRadius={'xl'} h='50vh' bg='gray.200'></Box>
                    <Flex gap='4' w={{base:"100%",xl:"63%"}} flexDirection={'column'} justifyContent={'space-between'}>
                        <Text  fontSize={{base:"17px",md:"20px"}} fontWeight={'600'}>
                        By logging in with Amazon, you may be eligible for additional Prime benefits like FREE Upgraded Shipping. Then, join Zappos VIP for additional Prime-linked VIP perks:
                        </Text>
                        <Box display={{base:"none",md:"block"}} pl='15px' as="ul" listStyleType="circle">
                        {benefits.map((e)=>{
                                return <li><Text my='15px'>{e}</Text></li>
                            })}
                        
                        </Box>
                        <Box display={{base:"block",md:"none"}} pl='15px' as="ul" listStyleType="circle">
                        {benefit.map((e)=>{
                                return <li><Text my={{base:"5px",md:"15px"}}>{e}</Text></li>
                            })}
                        
                        </Box>

                        
                        

                    </Flex>
                    
                </Flex>
                <Flex alignItems={'center'} w='full' flexDirection={'column'} justifyContent={'space-between'}>
                            <Box>By signing in, you agree to Zappos</Box>
                            <Flex gap={2}><Link><Text _hover={{color:'blue'}} textDecoration={'underline'}>Terms and Conditions</Text></Link><Text > and</Text><Link><Text _hover={{color:'blue'}} textDecoration={'underline'}> Privacy Policy</Text></Link></Flex>
                    </Flex>
                
          </Flex>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  )
}

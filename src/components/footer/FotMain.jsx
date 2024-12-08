import { Flex, Text, Box,Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Hr from "./Hr";
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
  } from "@/components/ui/accordion"

  

export default function FotMain() {

    let about = [
        { title: "About", link: "/about" },
        { title: "Zappos ONE", link: null },
        { title: "Zappos for Good", link: null },
        { title: "Zappos at Work", link: null },
        { title: "Get the Zappos Mobile App", link: null },
        { title: "Amazon Prime Benefits", link: null },
        { title: "Zappos VIP Benefits", link: null },
        { title: "Coupons & Sales", link: null },
        { title: "Accessibility Statement", link: null }
      ];
      let customerService = [
        { title: "Customer Service", link: null },
        { title: "FAQs", link: null },
        { title: "Contact Info", link: null },
        { title: "¿Ayuda en español?", link: null },
        { title: "Shipping And Returns Policy", link: null },
        { title: "About Proposition 65", link: null }
      ];
      let resources = [
        { title: "Measurement Guide", link: null },
        { title: "Size Conversion Chart", link: null },
        { title: "Measure Your Bra Size", link: null },
        { title: "Associates Program", link: null },
        { title: "Jobs", link: null },
        { title: "Press Kit & Brand Inquiries", link: null },
        { title: "Site Map", link: null },
        { title: "Take Survey", link: null }
      ];
      let exploreZappos = [
        { title: "Brands", link: null },
        { title: "Clothing", link: null },
        { title: "The Style Room", link: null },
        { title: "Eyewear", link: null },
        { title: "New Arrivals", link: null },
        { title: "Running", link: null },
        { title: "Jackets", link: null },
        { title: "Shoes", link: null },
        { title: "Watches", link: null },
        { title: "Zappos Adaptive", link: null },
        { title: "All Departments", link: null }
      ];

      const linkHoverStyle = {
        color: "blue",
        textDecoration: "underline",
        textUnderlineOffset: "4px", // Consistent gap between text and underline
         textDecorationThickness: "1px"
      };
                        
      const items = [
        { value: "a", title: "About Zappos", text: 'about' },
        { value: "b", title: "Customer Service", text: 'customerService' },
        { value: "c", title: "Resources", text:'resources' },
        { value: "c", title: "Explore Zappos", text:'exploreZappos' },
      ]
      


  return (
        <Flex gap='5' flexDir={{base:'column',md:"row"}} justifyContent={'space-between'} fontSize={'14px'} >

            {/* -------------- */}
            <Box display={{md:"none"}}>
            <AccordionRoot collapsible>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionItemTrigger>
            <Stack gap="1">
              <Text>{item.title}</Text>
              
            </Stack>
          </AccordionItemTrigger>
          <AccordionItemContent>
          {about.map((e,i)=><Box><Link><Text _hover={linkHoverStyle}>{e.title}</Text></Link></Box>)}
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
            </Box>

            <Box w='100%' display={{base:'none',md:"flex"}} justifyContent={'space-between'} fontSize={'14px'} >
            <Flex gap={3} flexDir={'column'}>
                <Box fontSize={'16px'} fontWeight={'600'}><h1>About Zappos</h1></Box>
                {about.map((e,i)=><Box><Link><Text _hover={linkHoverStyle}>{e.title}</Text></Link></Box>)}
            </Flex>
            <Box><Hr/></Box>
            <Flex gap={3}  flexDir={'column'} >
                <Box fontSize={'16px'} fontWeight={'600'}><h1>Customer Service</h1></Box>
                {customerService.map((e,i)=><Box><Link><Text _hover={linkHoverStyle}>{e.title}</Text></Link></Box>)}
            </Flex>
            <Box><Hr/></Box>
            <Flex gap={3}  flexDir={'column'}>
                <Box fontSize={'16px'} fontWeight={'600'}><h1>Resources</h1></Box>
                {resources.map((e,i)=><Box><Link><Text _hover={linkHoverStyle}>{e.title}</Text></Link></Box>)}
            </Flex>
            <Box><Hr/></Box>
            <Flex gap={3}  flexDir={'column'}>
                <Box fontSize={'16px'} fontWeight={'600'}><h1>Explore Zappos</h1></Box>
                {exploreZappos.map((e,i)=><Box><Link><Text _hover={linkHoverStyle}>{e.title}</Text></Link></Box>)}
            </Flex>
            </Box>
        </Flex>
  );
}

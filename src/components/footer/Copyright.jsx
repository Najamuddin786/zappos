import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Copyright() {
  const linkHoverStyle = {
    color: "blue",
    textDecoration: "underline",
    textUnderlineOffset: "4px", // Consistent gap between text and underline
     textDecorationThickness: "1px"
  };

  return (
    <Flex    gap={'4'} fontSize="13px" justifyContent="space-between"  py={2} flexDir={{base:'column',xl:"row"}} >
      <Box>© 2009–2024 - Zappos.com LLC or its affiliates</Box>
      <Flex gap={2} flexWrap={'wrap'}>
        <Link>
          <Text _hover={linkHoverStyle}>Terms of Use</Text>
        </Link>
        <Text>/</Text>
        <Link>
          <Text _hover={linkHoverStyle}>Privacy Policy</Text>
        </Link>
        <Text>/</Text>
        <Link>
          <Text _hover={linkHoverStyle}>Fur Policy</Text>
        </Link>
        <Text>/</Text>
        <Link>
          <Text _hover={linkHoverStyle}>Interest-Based Ads</Text>
        </Link>
        <Text>/</Text>
        <Link>
          <Text _hover={linkHoverStyle}>24/7 Customer Service (800) 927-7671</Text>
        </Link>
      </Flex>
    </Flex>
  );
}

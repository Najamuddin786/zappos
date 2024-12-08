import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Hr() {
  const linkHoverStyle = {
    color: "blue",
    textDecoration: "underline",
    textUnderlineOffset: "4px", // Consistent gap between text and underline
     textDecorationThickness: "1px"
  };

  return (
    <Flex   borderTop={'1.6px dotted black'}  py={2} w='100%' height={'2px'}>
      
    </Flex>
  );
}

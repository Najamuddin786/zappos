import { Button } from "@/components/ui/button";
import { HStack, Flex, Text, Image, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Main4() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("http://localhost:3000/item");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex justifyContent={"space-between"} flexWrap="wrap">
      {data.map((item, i) => (
        <Flex
          key={i}
          flexDirection={"column"}
          alignItems="center"
          border="1px solid #ddd"
          borderRadius="8px"
          p="10px"
          m="10px"
          width="300px"
        >
          {/* Main Image */}
          <Image
            src={img || (item[1]?.img1 || "fallback-image-url.jpg")}
            alt={`Item ${i}`}
            boxSize="200px"
            objectFit="cover"
            mb="10px"
          />

          {/* Thumbnails */}
          <Flex>
            {item.map((n, index) => {
              if (index === 0) return null; // Skip the first element if needed
              return (
                <Box
                  key={index}
                  cursor={"pointer"}
                  mx="5px"
                  border={"1px solid black"}
                  borderRadius={"100px"}
                  h="40px"
                  w="40px"
                  onMouseEnter={() => setImg(n.img1)} // Hover logic
                >
                  <Image
                    borderRadius={"100px"}
                    src={n.img1}
                    alt={`Thumbnail ${index}`}
                    boxSize="40px"
                    objectFit="cover"
                  />
                </Box>
              );
            })}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

import { Flex, Box, Text, Image, Button, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Right() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const product = JSON.parse(localStorage.getItem("product")) || [];

  const addToCart = (item) => {
    const updatedCart = [...product, item];
    localStorage.setItem("product", JSON.stringify(updatedCart));
    alert("Your Product Added to Cart");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (error) {
        setError("Failed to fetch products. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Text color="red.500" fontSize="xl">
          {error}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex wrap="wrap" gap="5" justify="center">
      {data?.map((product) => (
        <Flex
          key={product.id}
          gap="2"
          justifyContent="space-between"
          width={["100%", "45%", "30%", "22%"]}
          color="white"
          borderRadius="md"
          p="10px"
          flexDirection="column"
          bg="gray.900"
        >
          <Image h="220px" src={product.image} alt={product.title} />
          <Text>{product.title}</Text>
          <Text color="green.600">Price ₹ {product.price}</Text>
          <Flex justifyContent="space-between">
            <Box>Rating: {product.rating.rate}</Box>
            <Box>Count: {product.rating.count}</Box>
          </Flex>
          <Button onClick={() => addToCart(product)} color="green.800" bg="white">
            Add to Cart
          </Button>
        </Flex>
      ))}
    </Flex>
  );
}

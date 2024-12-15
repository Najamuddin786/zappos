import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "@/components/ui/accordion";
import { Flex,Box } from "@chakra-ui/react";
export default function Left() {
    const shoeCategories = [
        {
          category: "Women's Shoe Size",
          values: [5, 6, 7, 8, 9, 10, 11, 12], // US Sizes
        },
        {
          category: "Women's Shoe Width",
          values: [
            "S",  // Slim
            "N",  // Narrow
            "M",  // Medium
            "W",  // Wide
            "WW", // Extra Wide
            "3A", "2A", "A", "B", "C", "D", "E", "EE", "3E", "4E", "5E", // Additional Widths
          ],
        },
        {
          category: "Men's Shoe Size",
          values: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15], // US Sizes
        },
        {
          category: "Men's Shoe Width",
          values: ["Narrow (B)", "Standard (D)", "Wide (EE)", "Extra Wide (EEE)"],
        },
        {
          category: "Kids' Shoe Sizes",
          values: ["Infant (0-4)", "Toddler (4.5-10)", "Little Kid (10.5-3)", "Big Kid (3.5-7)"],
        },
        {
          category: "Kids' Shoe Width",
          values: ["Narrow", "Medium", "Wide"],
        },
        {
          category: "Brand",
          values: ["Nike", "Adidas", "Puma", "Skechers", "Converse", "Reebok", "New Balance"],
        },
        {
          category: "Color",
          values: ["Black", "White", "Red", "Blue", "Green", "Pink", "Brown", "Gray", "Yellow"],
        },
        {
          category: "Gender",
          values: ["Women", "Men", "Kids", "Unisex"],
        },
        {
          category: "Subcategory",
          values: ["Sneakers", "Boots", "Sandals", "Heels", "Flats", "Loafers", "Slippers"],
        },
        {
          category: "Sale",
          values: ["Discounted", "Clearance", "New Arrival", "Limited Edition"],
        },
        {
          category: "Price",
          values: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"],
        },
        {
          category: "Closures",
          values: ["Lace-Up", "Slip-On", "Velcro", "Buckle", "Zipper"],
        },
        {
          category: "Styles",
          values: ["Casual", "Athletic", "Formal", "Outdoor", "Workwear", "Party"],
        },
        {
          category: "Materials",
          values: ["Leather", "Synthetic", "Canvas", "Mesh", "Rubber", "Suede"],
        },
        {
          category: "Features",
          values: [
            "Waterproof",
            "Lightweight",
            "Breathable",
            "Slip-Resistant",
            "Memory Foam",
            "Orthopedic Support",
          ],
        },
        {
          category: "Pattern",
          values: ["Solid", "Striped", "Plaid", "Animal Print", "Floral", "Graphic"],
        },
        {
          category: "Characters",
          values: ["Mickey Mouse", "Spiderman", "Barbie", "Batman", "Frozen"],
        },
        {
          category: "Accents",
          values: ["Sequins", "Embroidery", "Studs", "Beads", "Fringe"],
        },
      ];
      

  return (
    <>
    <Box  position={'sticky'} top='0px' maxH={'100vh'} overflowY={'scroll'}>
      <AccordionRoot  collapsible>
        {shoeCategories.map((item, index) => (
          <AccordionItem  key={index} value={item.category}>
            <AccordionItemTrigger >{item.category}</AccordionItemTrigger>
            <AccordionItemContent >
                <Box ><hr /></Box>
                <Flex mt='10px' alignItems={'center'} gap='4' flexWrap={'wrap'}>
              {item.values.map((value, valueIndex) => (
                <Box _hover={{color:"blue"}}  key={valueIndex}>{value}</Box>
              ))}
              </Flex>
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
      </Box>
    </>
  );
}

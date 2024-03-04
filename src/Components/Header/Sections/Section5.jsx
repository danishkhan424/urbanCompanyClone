import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import section511 from "../images/section511.jpeg";
import section512 from "../images/section512.jpeg";
import section513 from "../images/section513.jpeg";
import section514 from "../images/section514.jpeg";
import section521 from "../images/section521.jpeg";
import section522 from "../images/section522.jpeg";
import section523 from "../images/section523.jpeg";

const data1 = [
  {
    id: 1,
    title: "stress relief therapy",
    img: section511,
  },
  {
    id: 2,
    title: "pain relief therapy",
    img: section512,
  },
  {
    id: 3,
    title: "post workout",
    img: section513,
  },
  {
    id: 4,
    title: "skin care scrubs",
    img: section514,
  },
];
const data2 = [
  {
    id: 1,
    title: "bathroom & kitchen cleaning",
    img: section521,
  },
  {
    id: 2,
    title: "full home cleaning",
    img: section522,
  },
  {
    id: 3,
    title: "sofa & carpet cleaning",
    img: section523,
  },
];
const Section5 = () => {
  const getColumnCount = () => {
    return useBreakpointValue({ base: 2, md: 3, lg: 5 });
  };
  return (
    <Box as={"div"} className="slider-container">
      <Text mt={12} mx={4} fontSize={["xl", "3xl", "4xl"]} fontWeight={"500"}>
        Spa for women
      </Text>
      <Text mx={4} fontSize={["10px", "10px", "sm"]}>
        Refresh. Rewind. Rejuvenate.
      </Text>
      <Grid
        templateColumns={`repeat(${getColumnCount()}, 1fr) `}
        overflow={"hidden"}
        gap={6}
      >
        {data1.map((item) => (
          <GridItem>
            <Stack
              className="slide"
              key={item.id}
              fontSize={["10px", "10px", "13px"]}
              h={"290px"}
              boxShadow={
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              }
              _hover={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
              }}
            >
              <Text
                p={7}
                mb={7}
                textTransform={"capitalize"}
                fontWeight={"600"}
                fontSize={["xs", "xs", "sm"]}
                color={"gray.700"}
              >
                {item.title}
              </Text>
              <Box position={"relative"} bottom={-4} w={"100%"} px={1}>
                <Image src={item.img} objectFit={"cover"} alt="section221" />
              </Box>
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Text mt={20} mx={4} fontSize={["xl", "3xl", "4xl"]} fontWeight={"500"}>
        Cleaning & pest control
      </Text>
      <Grid
        templateColumns={`repeat(${getColumnCount()}, 1fr) `}
        overflow={"hidden"}
        gap={6}
      >
        {data2.map((item) => (
          <GridItem key={item.id}>
            <Stack
              className="slide"
              key={item.id}
              fontSize={["10px", "10px", "13px"]}
              h={"290px"}
              boxShadow={
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              }
              _hover={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
              }}
            >
              <Text
                p={7}
                mb={7}
                textTransform={"capitalize"}
                fontWeight={"600"}
                fontSize={["xs", "xs", "sm"]}
                color={"gray.700"}
              >
                {item.title}
              </Text>
              <Box position={"relative"} bottom={-4} w={"100%"} px={1}>
                <Image src={item.img} objectFit={"cover"} alt="section221" />
              </Box>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Section5;

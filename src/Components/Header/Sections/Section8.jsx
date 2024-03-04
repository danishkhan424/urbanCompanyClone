import React from 'react'
import { Box, Grid, GridItem, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import section81 from "../images/section81.jpeg"
import section82 from "../images/section82.jpeg"
import section83 from "../images/section83.jpeg"
import section84 from "../images/section84.jpeg"
import secondImage from "../images/secondImage.jpeg"



const data = [
  {
    id: 1,
    title: "haircut & beard grooming shaving",
    img: section81,
  },
  {
    id: 2,
    title: "facial & cleanup",
    img: section82,
  },
  {
    id: 3,
    title: "pedicure & manicure",
    img: section83,
  },
  {
    id: 4,
    title: "hair color & hair spa",
    img: section84,
  },
];

const Section8 = () => {
  const getColumnCount = () => {
    return useBreakpointValue({ base: 2, md: 3, lg: 5 });
  };
  return (
    <Box as={"div"} className="slider-container">
      <Box
        mt={20}
        cursor={"pointer"}
        transition={"all 0.3s ease"}
        overflow={"hidden"}
        p={2}
        _hover={{ transform: "scale(1.03)" }}
      >
        <Image src={secondImage} w={"100%"} />
      </Box>
      <Text mt={20} mx={4} fontSize={["xl", "3xl", "4xl"]} fontWeight={"500"}>
        Salon for kids & men
      </Text>
      <Text mx={4} fontSize={["10px", "10px", "sm"]}>
        Grooming essentials
      </Text>
      <Grid
        templateColumns={`repeat(${getColumnCount()}, 1fr) `}
        overflow={"hidden"}
        gap={6}
      >
        {data.map((item) => (
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
    </Box>
  );
}

export default Section8
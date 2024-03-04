import {
  Box,
  Heading,
  Text,
  Flex,
  useBreakpointValue,
  Image,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import gridImage from "../images/gridImage.jpeg";
import ACrepair from "../images/ACrepair.jpeg";
import Cleaning from "../images/cleaning.png";
import electric from "../images/electric.png";
import manSaloon from "../images/manSaloon.png";
import paint from "../images/paint.png";
import publicIcon from "../images/publicIcon.png";
import starIcon from "../images/starIcon.png";
import womenSaloon from "../images/womenSaloon.png";

const Section1 = () => {
  const displayGridImage = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex mt={10} className="section1">
      <Box className="section1-left">
        <Box>
          <Box
            mt={-15}
            mb={5}
            fontSize={["3xl", null, "4xl"]}
            fontWeight={"500"}
          >
            <Text>Home services at your</Text>
            <Text>doorstep</Text>
          </Box>
          <Box className="section1-services" p={5}>
            <Text fontSize={"xl"} fontWeight={"400"} color={"gray.600"} mb={10}>
              What are you looking for?
            </Text>
            <SimpleGrid columns={3} spacing={5}>
              <Flex className="services" fontSize={["8px", "xs", "xs"]}>
                <Box className="servicesImage">
                  <Image src={womenSaloon} />
                </Box>
                <Text>Women's Salon & Spa</Text>
              </Flex>
              <Flex className="services" fontSize={["8px", "xs", "xs"]}>
                <Box className="servicesImage">
                  <Image src={manSaloon} />
                </Box>
                <Text>Men's Salon & Massage</Text>
              </Flex>
              <Flex className="services" fontSize={["8px", "xs", "xs"]}>
                <Box className="servicesImage">
                  <Image src={ACrepair} />
                </Box>
                <Text>AC & Appliance Repair</Text>
              </Flex>
              <Flex className="services" fontSize={["8px", "xs", "xs"]}>
                <Box className="servicesImage">
                  <Image src={Cleaning} />
                </Box>
                <Text>Cleaning</Text>
              </Flex>
              <Flex className="services" fontSize={["8px", "xs", "xs"]}>
                <Box className="servicesImage">
                  <Image src={electric} />
                </Box>
                <Text>Electrician, Plumber & Carpenter</Text>
              </Flex>
              <Flex className="services" fontSize={["8px", "xs", "xs"]}>
                <Box className="servicesImage">
                  <Image src={paint} />
                </Box>
                <Text>Painting & Waterproofing</Text>
              </Flex>
            </SimpleGrid>
          </Box>
        </Box>
        <Flex justifyContent={"space-around"} mt={20}>
          <Flex>
            <Box>
              <Image src={starIcon} alt="starIcon" />
            </Box>
            <Box ml={4}>
              <Text fontSize={"xl"}>4.8</Text>
              <Text>Service Rating</Text>
            </Box>
          </Flex>
          <Flex>
            <Box>
              <Image src={publicIcon} alt="publicIcon" />
            </Box>
            <Box ml={4}>
              <Text fontSize={"xl"}>5M+</Text>
              <Text>Customers Globally</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      {displayGridImage && (
        <Box w={"50%"}>
          <Image src={gridImage} alt="gridImage" />
        </Box>
      )}
    </Flex>
  );
};

export default Section1;

import {
  Box,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "./images/logo.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import facebook from "./images/facebook.png";
import linkedin from "./images/linkedin.png";
import playStore from "./images/playStore.png";
import appleStore from "./images/appleStore.png";

const Footer = () => {
  return (
    <Box className="Footer">
      <Box className="logo">
        <Image src={logo} alt="logo" objectFit="cover" />
      </Box>
      <SimpleGrid columns={[1, 2, 4]} spacing="40px" className="FooterLinks">
        <Stack spacing={3}>
          <Text fontSize={"2xl"} my={3} classeName={"ftHeading"}>
            Company
          </Text>
          <Text>About us</Text>
          <Text>Terms & conditions</Text>
          <Text>Privacy policy</Text>
          <Text>Anti-discrimination policy</Text>
          <Text>UC impact</Text>
          <Text>Careers</Text>
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"2xl"} my={2} classeName={"ftHeading"}>
            For customers
          </Text>
          <Text>UC reviews </Text>
          <Text>Categories near you </Text>
          <Text>Blog </Text>
          <Text>Contact us </Text>
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"2xl"} my={2} classeName={"ftHeading"}>
            For partners
          </Text>
          <Text>Register as a professional </Text>
        </Stack>
        <Stack spacing={3}>
          <Text fontSize={"2xl"} my={2} classeName={"ftHeading"}>
            Social links
          </Text>
          <HStack gap={3} className="socialIcons">
            <Box bg={"white"} p={1} borderRadius={"full"}>
              <Image src={twitter} alt="twitter" />
            </Box>
            <Box bg={"white"} p={1} borderRadius={"full"}>
              <Image src={instagram} alt="instagram" />
            </Box>
            <Box bg={"white"} p={1} borderRadius={"full"}>
              <Image src={facebook} alt="facebook" />
            </Box>
            <Box bg={"white"} p={1} borderRadius={"full"}>
              <Image src={linkedin} alt="linkedin" />
            </Box>
          </HStack>
          <Box>
            <Image src={playStore} alt="playStore" />
          </Box>
          <Box>
            <Image src={appleStore} alt="appleStore" />
          </Box>
        </Stack>
      </SimpleGrid>
      <Box className="copyright">
        © Copyright 2022 Urban Company. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;

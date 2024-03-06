import {
  Box,
  Button,
  Flex,
  Image,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import logo from "./images/logo.png";
import Location from "./Location";
import Search from "./Search";
import Login from "./Login";

const Navbar = () => {
  const displayLogo = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      as={"nav"}
      align={"center"}
      justify={"space-between"}
      px={12}
      py={4}
      position={"fixed"}
      top={0}
      width={"100%"}
      zIndex={100}
      bg={"white"}
      className="Navbar"
    >
      {displayLogo && (
        <Spacer>
          <Box className="logo-box">
            <Image
              src={logo}
              alt="logo"
              objectFit="cover"
              minW={"120px"}
              className="logo"
            />
          </Box>
        </Spacer>
      )}
      <Box className="NavbarButtons">
        <Location />
        <Spacer />
        <Search />
      </Box>
      <Spacer />
      <Box>
        <Login />
      </Box>
    </Flex>
  );
};

export default Navbar;

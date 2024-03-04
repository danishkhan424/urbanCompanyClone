import React from "react";
import { Box, Image, Spinner } from "@chakra-ui/react";
import logo from "../Images/logo.png";

export const Loader = () => {
  return (
    <Box textAlign={"center"} className="Loader">
      <Box>
        <Image src={logo} alt="logo" />
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="purple.100"
          color="purple.500"
          size="xl"
          mt={5}
        />
      </Box>
    </Box>
  );
};

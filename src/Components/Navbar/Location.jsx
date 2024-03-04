import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Flex,
  Link,
  Image,
  InputRightElement,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import google from "./images/poweredByGoogle.jpg";
import target from "./images/target.png";
import location from "./images/location-pin.png";

const Location = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputGroupSize = useBreakpointValue({ base: "sm", md: "lg" });
  return (
    <>
      <InputGroup
        onClick={onOpen}
        size={inputGroupSize}
        _hover={{ cursor: "pointer" }}
      >
        <InputLeftElement>
          <Image src={location} alt="location" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search for your location/socity/apartment"
          _hover={{ cursor: "pointer" }}
        />
        <InputRightElement>
          <ChevronDownIcon boxSize={6} />
        </InputRightElement>
      </InputGroup>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"2xl"} over>
        <ModalOverlay />
        <ModalContent w={["full", "90%"]} h={["full", "60%"]}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton mt={4} size={6} mr={3} />
          <ModalBody m={5}>
            <InputGroup>
              <InputLeftElement>
                <SearchIcon color="gray.700" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search for your location/socity/apartment"
              />
            </InputGroup>
            <Link href="#" _hover={{ textDecoration: "none" }}>
              <Flex color="purple.500" fontWeight={"bold"} gap={2} mt={5}>
                <Image src={target} alt="target" /> Use current location
              </Flex>
            </Link>
            <Box w={"100%"}>
              <Image
                src={google}
                objectFit="cover"
                w={"100%"}
                alt="poweredByGoogle"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Location;

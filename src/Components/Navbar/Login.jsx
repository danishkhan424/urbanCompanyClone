import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  InputGroup,
  InputLeftAddon,
  Input,
  Stack,
  Checkbox,
  CheckboxGroup,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import india from "./images/india.png";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputGroupSize = useBreakpointValue({ base: "xs", md: "lg" });
  return (
    <>
      <Button
        size={inputGroupSize}
        onClick={onOpen}
        variant="outline"
        p={4}
        borderRadius={10}
        colorScheme="black"
        _hover={{ bg: "black", color: "white" }}
      >
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w={["full", "90%"]} h={["full", "40%"]}>
          <ModalHeader>Login/Sign up</ModalHeader>
          <ModalCloseButton mt={4} size={6} mr={3} />
          <ModalBody>
            <Stack spacing={8} direction={"column"}>
              <InputGroup>
                <InputLeftAddon>
                  <Image src={india} alt="india" objectFit="cover" pr={1} />
                  +91
                </InputLeftAddon>
                <Input type="tel" placeholder="Phone number" maxLength={10} />
              </InputGroup>
              <CheckboxGroup colorScheme="gray" size="md">
                <Checkbox>Get order updates on WhatsApp</Checkbox>
              </CheckboxGroup>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" w={"100%"} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;

import {
  Box,
  Image,
  Text,
  Flex,
  Stack,
  useBreakpointValue,
  Button,
  ModalContent,
  Modal,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import section411 from "../images/section411.jpeg";
import section412 from "../images/section412.jpeg";
import section413 from "../images/section413.jpeg";
import section414 from "../images/section414.jpeg";
import section415 from "../images/section415.jpeg";
import section416 from "../images/section416.jpeg";
import section417 from "../images/section417.jpeg";
import { SamplePrevArrow, SampleNextArrow } from "../Sections/ArrowButtons";
import kirtiSanon from "../images/kirtiSanon.jpeg";
import salonClassic from "../images/salonClassic.jpeg";
import salonPrime from "../images/salonPrime.jpeg";

const data = [
  {
    id: 1,
    title: "pedicure",
    img: section411,
  },
  {
    id: 2,
    title: "threading & face waxing",
    img: section412,
  },
  {
    id: 3,
    title: "waxing",
    img: section413,
  },
  {
    id: 4,
    title: "facial & cleanup",
    img: section414,
  },
  {
    id: 5,
    title: "manicure",
    img: section415,
  },
  {
    id: 6,
    title: "bleach & detan",
    img: section416,
  },
  {
    id: 7,
    title: "hair care",
    img: section417,
  },
];

// box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
const Section4 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const size = useBreakpointValue({ base: "xs", md: "md" });

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow slidesToShow={5} />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          nextArrow: <SampleNextArrow slidesToShow={3} />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          nextArrow: <SampleNextArrow slidesToShow={2} />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          nextArrow: <SampleNextArrow slidesToShow={1} />,
        },
      },
    ],
  };

  return (
    <Box as={"div"} className="slider-container">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={onOpen}
        cursor={"pointer"}
      >
        <Text mt={12} mx={4} fontSize={["xl", "3xl", "4xl"]} fontWeight={"500"}>
          Salon for Women
        </Text>
        <Button
          size={size}
          variant="outline"
          p={3}
          mr={3}
          borderRadius={5}
          colorScheme="black"
          _hover={{ bg: "black", color: "white" }}
        >
          See All
        </Button>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={["full", "lg"]}
        boxSizing="border-box"
      >
        <ModalOverlay />
        <ModalContent
          h={"90vh"}
          overflow={"auto"}
          w={["full", "90%"]}
          boxSizing="border-box"
        >
          <ModalHeader>Salon for Women</ModalHeader>
          <ModalCloseButton mt={4} size={6} mr={3} />
          <ModalBody
            h={"100%"}
            overflow={"auto"}
            w={"100%"}
            p={0}
            overflowX={"hidden"}
            boxSizing="border-box"
          >
            <Box>
              <Image src={kirtiSanon} alt="kirtiSanon" />
            </Box>
            <Box
              onClick={onClose}
              transition={"0.3s all ease"}
              _hover={{ cursor: "pointer", transform: "scale(1.01)" }}
              boxShadow={
                " rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
              }
            >
              <Image
                src={salonClassic}
                alt="salonClassic"
                objectFit="cover"
                borderRadius={5}
              />
            </Box>
            <Box
              onClick={onClose}
              transition={"0.3s all ease"}
              _hover={{ cursor: "pointer", transform: "scale(1.01)" }}
              boxShadow={
                " rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"
              }
            >
              <Image
                src={salonPrime}
                alt="salonPrime"
                objectFit="cover"
                borderRadius={5}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Slider {...settings}>
        {data.map((item) => (
          <Box
            className="slide"
            key={item.id}
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
            <Box position={"relative"} bottom={-4} w={"100%"} px={1.5}>
              <Image src={item.img} objectFit={"cover"} alt="section221" />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Section4;

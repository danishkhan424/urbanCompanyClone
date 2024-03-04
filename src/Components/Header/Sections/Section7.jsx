import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  SimpleGrid,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { SamplePrevArrow, SampleNextArrow } from "../Sections/ArrowButtons";
import section7model1 from "../images/section7model1.jpeg";
import section7model2 from "../images/section7model2.png";
import section7model3 from "../images/section7model3.png";
import section7model4 from "../images/section7model4.png";
import section7model5 from "../images/section7model5.png";

import section711 from "../images/section711.jpeg";
import section712 from "../images/section712.jpeg";
import section713 from "../images/section713.jpeg";
import section714 from "../images/section714.jpeg";
import section715 from "../images/section715.jpeg";
import section716 from "../images/section716.jpeg";
import section721 from "../images/section721.jpeg";
import section722 from "../images/section722.jpeg";
import section723 from "../images/section723.jpeg";
import section724 from "../images/section724.jpeg";

const data1 = [
  {
    id: 1,
    img: section7model1,
    title: "AC repair & service",
  },
  {
    id: 2,
    img: section7model2,
    title: "refrigerator repair",
  },
  {
    id: 3,
    img: section7model3,
    title: "washing machine repair",
  },
  {
    id: 4,
    img: section7model4,
    title: "water purifier",
  },
  {
    id: 5,
    img: section7model5,
    title: "microwave repair",
  },
];
const data2 = [
  {
    id: 1,
    img: section711,
    title: "AC service & repair",
  },
  {
    id: 2,
    img: section712,
    title: "washing machine repair",
  },
  {
    id: 3,
    img: section713,
    title: "water purifier repair",
  },
  {
    id: 4,
    img: section714,
    title: "refrigerator repair",
  },
  {
    id: 5,
    img: section715,
    title: "microwave repair",
  },
  {
    id: 5,
    img: section716,
    title: "native water purifier",
  },
];

const data3 = [
  {
    id: 1,
    title: "pain relief",
    img: section721,
  },
  {
    id: 2,
    title: "stress relief",
    img: section722,
  },
  {
    id: 3,
    title: "post workout",
    img: section723,
  },
  {
    id: 4,
    title: "relaxation",
    img: section724,
  },
];
const Section7 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getColumnCount = () => {
    return useBreakpointValue({ base: 2, md: 3, lg: 5 });
  };

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
    <Box as={"div"} mt={3} className="slider-container">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={onOpen}
        cursor={"pointer"}
      >
        <Text mt={12} mx={4} fontSize={["xl", "3xl", "4xl"]} fontWeight={"500"}>
          AC & appliance repair
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
        size={["full", "2xl"]}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        boxSizing="border-box"
      >
        <ModalOverlay />
        <ModalContent overflow={"auto"} boxSizing="border-box">
          <ModalHeader></ModalHeader>
          <ModalCloseButton mt={4} size={6} mr={3} />
          <ModalBody
            overflow={"auto"}
            p={10}
            m={"auto"}
            overflowX={"hidden"}
            boxSizing="border-box"
          >
            <SimpleGrid columns={4} gap={10} w={"100%"}>
              {data1.map((item) => (
                <Flex
                  key={item.id}
                  className="services"
                  fontSize={["xs", "sm", "sm"]}
                  gap={2}
                >
                  <Box className="servicesImage" px={2}>
                    <Image src={item.img} />
                  </Box>
                  <Text>{item.title}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Slider {...settings}>
        {data2.map((item) => (
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
      <Text mt={12} mx={4} fontSize={["xl", "3xl", "4xl"]} fontWeight={"500"}>
        Massage for Men
      </Text>
      <Grid
        templateColumns={`repeat(${getColumnCount()}, 1fr) `}
        overflow={"hidden"}
        gap={6}
      >
        {data3.map((item) => (
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
};

export default Section7;

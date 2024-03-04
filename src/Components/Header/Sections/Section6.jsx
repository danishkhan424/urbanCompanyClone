import React from "react";
import Slider from "react-slick";
import section611 from "../images/section611.jpeg";
import section612 from "../images/section612.jpeg";
import section613 from "../images/section613.jpeg";
import section614 from "../images/section614.jpeg";
import section615 from "../images/section615.jpeg";
import section616 from "../images/section616.jpeg";
import section617 from "../images/section617.jpeg";
import section618 from "../images/section618.jpeg";
import section619 from "../images/section619.jpeg";
import section610 from "../images/section610.jpeg";
import firstImage from "../images/firstImage.jpeg";
import plumbers from "../images/plumbers.png";
import carpenters from "../images/carpenters.png";
import electricians from "../images/electricians.png";
import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Button,
  ModalContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { SamplePrevArrow, SampleNextArrow } from "../Sections/ArrowButtons";

const data = [
  {
    id: 1,
    img: section611,
    title: "tap repair",
    rating: "4.81 (177.8K)",
    price: 49,
  },
  {
    id: 2,
    img: section612,
    title: "washbasin pipe leakage",
    rating: "4.80 (87.6K)",
    price: 89,
  },
  {
    id: 3,
    img: section613,
    title: "Drill & hang (wall decor)",
    rating: "4.86 (135.1K)",
    price: 49,
  },
  {
    id: 4,
    img: section614,
    title: "jet spray (installation/repair)",
    rating: "4.82 (100.2K)",
    price: 79,
  },
  {
    id: 5,
    img: section615,
    title: "fan repair",
    rating: "4.81 (117.6K)",
    price: 109,
  },
  {
    id: 6,
    img: section616,
    title: "switch/socket replacement",
    rating: "4.86 (28.7K)",
    price: 49,
  },
  {
    id: 7,
    img: section617,
    title: "switchboard/switch repair",
    rating: "4.85 (91.3K)",
    price: 79,
  },
  {
    id: 8,
    img: section618,
    title: "cupboard hinge service (up to two)",
    rating: "4.83 (65.9K)",
    price: 129,
  },
  {
    id: 9,
    img: section619,
    title: "minor door repair",
    rating: "4.81 (54.1K)",
    price: 129,
  },
  {
    id: 10,
    img: section610,
    title: "drainage pipe blockage",
    rating: "4.78 (44.7K)",
    price: 299,
  },
];

const Section6 = () => {
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
    <Box as={"div"} mt={3} className="slider-container">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={onOpen}
        cursor={"pointer"}
      >
        <Text mt={12} mx={4} fontSize={["xl", "3xl", "4xl"]} fontWeight={"500"}>
          Quick Home Repairs
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
        size={"lg"}
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
            <SimpleGrid columns={3} gap={10} w={"100%"}>
              <Flex className="services" fontSize={["xs", "sm", "sm"]} gap={2}>
                <Box className="servicesImage" px={2}>
                  <Image src={electricians} />
                </Box>
                <Text>Electricians</Text>
              </Flex>
              <Flex className="services" fontSize={["xs", "sm", "sm"]} gap={2}>
                <Box className="servicesImage" px={2}>
                  <Image src={plumbers} />
                </Box>
                <Text>Plumbers</Text>
              </Flex>
              <Flex className="services" fontSize={["xs", "sm", "sm"]} gap={2}>
                <Box className="servicesImage" px={2}>
                  <Image src={carpenters} />
                </Box>
                <Text>Carpenters</Text>
              </Flex>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Slider {...settings}>
        {data.map((item) => (
          <Box className="slide" key={item.id} maxH={"350px"}>
            <Box>
              <Image src={item.img} h={"100%"} />
            </Box>
            <Stack
              spacing={2}
              py={5}
              px={2}
              fontSize={["10px", "10px", "13px"]}
            >
              <Text
                textTransform={"capitalize"}
                fontWeight={"600"}
                fontSize={["xs", "xs", "sm"]}
                color={"gray.700"}
              >
                {item.title}
              </Text>
              <Flex alignItems={"center"} color={"gray.600"}>
                <StarIcon mr={1} boxSize={["10px", "10px", "12px"]} />
                {item.rating}
              </Flex>
              <Text>{`₹ ${item.price}`}</Text>
            </Stack>
          </Box>
        ))}
      </Slider>
      <Box
        mt={20}
        cursor={"pointer"}
        transition={"all 0.3s ease"}
        overflow={"hidden"}
        p={2}
        _hover={{ transform: "scale(1.03)" }}
      >
        <Image src={firstImage} w={"100%"} />
      </Box>
    </Box>
  );
};

export default Section6;

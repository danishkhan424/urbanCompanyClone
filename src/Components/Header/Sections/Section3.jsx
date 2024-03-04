import React from "react";
import Slider from "react-slick";
import section31 from "../images/section31.jpeg";
import section32 from "../images/section32.jpeg";
import section33 from "../images/section33.jpeg";
import section34 from "../images/section34.jpeg";
import section35 from "../images/section35.jpeg";
import section36 from "../images/section36.jpeg";
import section37 from "../images/section37.jpeg";
import section38 from "../images/section38.jpeg";
import section39 from "../images/section39.jpeg";
import section310 from "../images/section310.jpeg";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { SamplePrevArrow, SampleNextArrow } from "../Sections/ArrowButtons";

const data = [
  {
    id: 1,
    img: section31,
    title: "intense bathroom cleaning",
    rating: "4.77 (1.4M)",
    price: 499,
  },
  {
    id: 2,
    img: section32,
    title: "classic bathroom cleaning",
    rating: "4.81 (1M)",
    price: 399,
  },
  {
    id: 3,
    img: section33,
    title: "tap repair",
    rating: "4.81 (177.8K)",
    price: 49,
  },
  {
    img: section34,
    title: "top load (fully automatic) checkup",
    rating: "4.83 (106.2K)",
    price: 160,
  },
  {
    id: 5,
    img: section35,
    title: "delux pedicure",
    rating: "4.80 (341.6K)",
    price: 499,
  },
  {
    id: 6,
    img: section36,
    title: "hair for men",
    rating: "4.88 (575.7K)",
    price: 259,
  },
  {
    id: 7,
    img: section37,
    title: "elysian british rose pedicure",
    rating: "4.82 (233.2K)",
    price: 749,
  },
  {
    id: 8,
    img: section38,
    title: "sofa cleaning",
    rating: "4.86 (131.9K)",
    price: 499,
  },
  {
    id: 9,
    img: section39,
    title: "power saver AC service",
    rating: "4.85 (60K)",
    price: 649,
  },
  {
    id: 10,
    img: section310,
    title: "classic cleaning - 2 bathroom pack",
    rating: "4.81 (1M)",
    price: 718,
  },
];

const Section3 = () => {
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
      <Text mt={12} mx={4} fontSize={["xl", "3xl", "4xl"]} fontWeight={"500"}>
        Most booked services
      </Text>
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
    </Box>
  );
};

export default Section3;

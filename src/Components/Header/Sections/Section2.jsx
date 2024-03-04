import React from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import section211 from "../images/Section2.1.1.jpeg";
import section212 from "../images/Section2.1.2.jpeg";
import section213 from "../images/Section2.1.3.jpeg";
import section214 from "../images/Section2.1.4.jpeg";
import section215 from "../images/Section2.1.5.jpeg";
import section216 from "../images/Section2.1.6.jpeg";
import section221 from "../images/Section2.2.1.jpeg";
import section222 from "../images/Section2.2.2.jpeg";
import section223 from "../images/Section2.2.3.jpeg";
import section224 from "../images/Section2.2.4.jpeg";
import section225 from "../images/Section2.2.5.jpeg";
import section226 from "../images/Section2.2.6.jpeg";
import section227 from "../images/Section2.2.7.jpeg";
import { SamplePrevArrow, SampleNextArrow } from "../Sections/ArrowButtons";

const data1 = [
  {
    id: 1,
    img: section211,
  },
  {
    id: 2,
    img: section212,
  },
  {
    id: 3,
    img: section213,
  },
  {
    id: 4,
    img: section214,
  },
  {
    id: 5,
    img: section215,
  },
  {
    id: 6,
    img: section216,
  },
];
const data2 = [
  {
    id: 1,
    title: "Painting & waterproofing",
    img: section221,
  },
  {
    id: 2,
    title: "native water purifier",
    img: section222,
  },
  {
    id: 3,
    title: "native smart locks",
    img: section223,
  },
  {
    id: 4,
    title: "bathroom & kitchen cleaning",
    img: section224,
  },
  {
    id: 5,
    title: "furniture assembly ",
    img: section225,
  },
  {
    id: 6,
    title: "hair studio for women",
    img: section226,
  },
  {
    id: 7,
    title: "aC service and repair",
    img: section227,
  },
];
const Section2 = () => {
  var settings1 = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow slidesToShow={3} />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow slidesToShow={2} />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow slidesToShow={2} />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow slidesToShow={1} />,
        },
      },
    ],
  };
  var settings2 = {
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
    <>
      <Box as={"div"} mt={3} className="slider-container">
        <Slider {...settings1}>
          {data1.map((item) => (
            <Box className="slide" key={item.id}>
              <Image src={item.img} alt="section211" />
            </Box>
          ))}
        </Slider>

        <Text
          mt={12}
          mx={4}
          fontSize={["xl", "3xl", "4xl"]}
          fontWeight={"500"}
        >
          New and noteworthy
        </Text>

        <Slider {...settings2}>
          {data2.map((item) => (
            <Box className="slide" key={item.id}>
              <Box>
                <Image
                  src={item.img}
                  className="noteWorthy"
                  objectFit={"cover"}
                  alt="section221"
                />
              </Box>
              <Text
                mt={4}
                textTransform={"capitalize"}
                fontWeight={"600"}
                fontSize={["xs", "xs", "sm"]}
                color={"gray.700"}
              >
                {item.title}
              </Text>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Section2;

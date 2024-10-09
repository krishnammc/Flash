"use client";

import { Box, Image, Flex, Circle, Text, Button, SliderProvider } from "@chakra-ui/react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { loginPagecarouselImageData } from "@/lib/app/constant_data";
import { BUTTON_BG, LABEL_TEXT_FONT_WEIGHT, TEXT_FONT_WEIGHT } from "@/lib/app/app_constants";
import { GoDotFill } from "react-icons/go";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";


// const sliderRef = useRef(null);
// const [sliderInstance, setSliderInstance] = useState<number>(0);

// useEffect(() => {
//   if (sliderRef.current) {
//     setSliderInstance(sliderRef.current);
//   }
// }, [sliderRef]);




export default function LoginPageCarousel() {

  const [index,setIndex] = useState<number|null>(null)


const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Button
      onClick={onClick}
      zIndex={2}
      display={index!==null && index== 0 ? "none":"flex"}
      background={'none'}
      _focus={{}}
      _hover={{}}
      _active={{}}
      color="white"
      maxW={"50px"}
      maxH={"50px"}
      w={'100%'}
      h={'100%'}
      p={'0px'}

      position={"absolute"}
      left={["36%","36%","36%","33%","36.5%"]}
      bottom={8}
    >
      <FaArrowLeft  />
    </Button>
  );
};

const CustomNextArrow = (props: any) => {

  const { onClick } = props;
  // console.log(dots,"dots")

  return (
    <Button
      onClick={onClick}
      zIndex={2}
      background={'none'}
      display={index!==null && index== 2 ? "none":"flex"}
      color="white"
      maxW={"50px"}
      maxH={"50px"}
      w={'100%'}
      h={'100%'}
      p={'0px'}
      _focus={{}}
      _hover={{}}
      _active={{}}
      position={"absolute"}
      right={["38%","38%","38%","35%","38%"]}
      bottom={8}
    >
      <FaArrowRight width={'100%'} height={'100%'}/>
    </Button>
  );
};

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:   <CustomPrevArrow  />,
  nextArrow: <CustomNextArrow />,
  appendDots: (dots: React.ReactNode) => {
    const dotArray = React.Children.toArray(dots);
    // const sliderInstance: SlickInstance | null = null;
    return(
    <Flex
        w="100%"
        bottom={'40px'}
        justifyContent={"center"}
        alignItems={'center'}
        zIndex={1}
        bg={"transparent"}
      >
        <Flex bg={"transparent"} p={2} borderRadius="md"   alignItems={"center"}justifyContent={"center"}>
       
          {
            dotArray.map((dot, index) => {
              if (React.isValidElement(dot)) {
              

                if(dot.props.className.includes('slick-active')){
                  setIndex(index)
                }

                return(
                  <Box
                    key={index}
                    bg={dot.props.className.includes('slick-active') ? '#fff' : 'gray.400'}
                    w={4}
                      
                    h={4}
                    borderRadius="full"
                    mr={2}
                    cursor="pointer"
                  />
                )
              }
            
            })
          }
          {/* <CustomNextArrow /> */}
        </Flex>
      </Flex>
    )
   
  },
  
};

  const carouselImageData = loginPagecarouselImageData;

    return (
      <Box w="100%" h="100%"  overflow="hidden"  >
      <Slider {...sliderSettings}  >
        {carouselImageData.map((image, ) => (
          <Flex key={image.id} position={"relative"} backgroundImage={image.src} bgRepeat={'no-repeat'} bgSize={'cover'} w='100%' maxW='100%' h={"100vh"} maxH="100vh" flexGrow={1} justifyContent='center' alignContent={'flex-end'} p={4}>
            <Flex mb={'70px'} textAlign="center" flexDir="column"  w="100%" justifyContent="center" color={BUTTON_BG} >
              <Text fontSize="32px" fontWeight={LABEL_TEXT_FONT_WEIGHT}> {image.heading}</Text>
              <Text mt="12px"fontSize="20px" fontWeight={TEXT_FONT_WEIGHT}> {image.text}</Text>
            </Flex>
          </Flex>
        ))}
      </Slider>
      
    </Box>
  );
}

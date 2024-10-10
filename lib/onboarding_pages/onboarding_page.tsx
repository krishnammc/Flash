"use client"
import { Button, Flex, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BOTTOM_BUTTON_BORDER_COLOR, BUTTON_BG, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, BUTTON_TEXT_COLOR, BUTTON_TEXT_FONT_WEIGHT, FILE_BORDER_COLOR, HEADER_ICON_COLOR, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, HEADING_ICON_ACTIVE_COLOR, ONBOARDING_PAGE_MAX_WIDTH, TEXT_COLOR, ONBOARDING_TEXT_FONT_SIZE, ONBOARDING_TEXT_FONT_WEIGHT, SECTION_MARGIN_Y, TEXT_FONT_SIZE } from '../app/app_constants';
import Image from 'next/image';
import ButtonField from '../pre_login/components/button_field';
import { useRouter } from 'next/navigation';
import { onBoardingPageValues } from '../app/constant_data';

const OnBoardingPage = () => {

  const router = useRouter();
  const toast = useToast();
  const [buttonLoader,setButtonLoader]=useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<{ id: string; label: string } | null>(null);
  
  //Getting OnBoarding Page Data
  const onBoardingPageData = onBoardingPageValues;

  //Stored the Selected data to state for Higlight the data
  const handleClick = (id: string, label: string) => {
    setSelectedOption({ id, label });
  };

  //Submit the Selected Data
  const handleSubmit = () => {
    setButtonLoader(true);
    if (!selectedOption) {
      toast({
        title: 'Please Select an option',
        status: 'info',
        duration: 5000,
        isClosable: true,
      });
    }
    if (selectedOption?.id == "data3") {
      localStorage.setItem("OnBoardingPage Value", JSON.stringify(selectedOption));
      router.push('/contactus');
    } else {
      localStorage.setItem("OnBoardingPage Value", JSON.stringify(selectedOption));
      router.push('/client/signup');
    }
    setButtonLoader(false);
  }

  return (
    <Flex flexDir={"column"}>
      <Flex w = {'100vw'} bg = {BUTTON_TEXT_COLOR} h = {['72px', '64px']} justifyContent = {['center', 'space-between']} alignItems = {'center'} p = {'20px 40px 20px 40px'}>

        {/* Flash Logo */}
        <Flex position = {'relative'} w = {['104px', '72px']} h = {['40px', '28px']}>
          <Image src = {'/images/Flash Logo.png'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
        </Flex>
        {/* Contact Us Button */}
        <Flex display = {['none', 'flex']}>
          <ButtonField textValue = {'Contact Us'} />
        </Flex>

      </Flex>

      <Flex flexDir = {'column'} w = {'100%'} h = {'100%'} mt = {['120px', '130px']} alignItems = {'center'}>
        <Flex flexDir = {'column'} maxW = {ONBOARDING_PAGE_MAX_WIDTH} w = {'100%'} gap = {'12px'}>
          {/* Page Heading */}
          <Flex justifyContent = {'center'} w = {'100%'}>
            <Text fontSize = {HEADING_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT}>How can we help?</Text>
          </Flex>
          {/* Page Values */}
          {
            onBoardingPageData.map((data) => {
              return(
                <Flex 
                  key = {data.id} 
                  bg = {selectedOption?.id === data.id ? HEADING_ICON_ACTIVE_COLOR : 'transparent'}
                  //color = {selectedOption?.id === data.id ? HEADER_ICON_COLOR : TEXT_COLOR}
                  _hover = {{ bg:HEADING_ICON_ACTIVE_COLOR }}
                  onClick = {() => handleClick(data.id, data.label)}
                  role = {"button"}
                  aria-pressed = {selectedOption?.id === data.id}
                  borderWidth = {'1px'} 
                  borderRadius = {'20px'} 
                  px = {['25px','40px']}
                  py = {['20px','32px']}  
                  gap = {['8px', '10px']} 
                  borderColor = {selectedOption?.id === data.id ? HEADING_ICON_ACTIVE_COLOR:FILE_BORDER_COLOR} 
                >
                  <Text fontSize = {ONBOARDING_TEXT_FONT_SIZE} fontWeight = {ONBOARDING_TEXT_FONT_WEIGHT}>{data.label}</Text>
                </Flex>
              );
            })
          }
        </Flex>
      </Flex>

      <Flex position = {'fixed'} bottom = {'0'} w  = {'100vw'} h = {'80px'} justifyContent = {'space-between'} p = {'20px 40px 20px 40px'} borderTop = {'1px'} borderColor = {BOTTOM_BUTTON_BORDER_COLOR} bg = {BUTTON_BG}>
        <Flex visibility = {['visible','hidden']}>
          <Flex display = {['flex', 'none']}>
            <ButtonField textValue = {'Contact Us'} />
          </Flex>
        </Flex>
        <Button w = {'100px'} h = {'40px'} isLoading={buttonLoader} gap = {'5px'} onClick = {handleSubmit} isDisabled = {!selectedOption} borderWidth = {'1px'} borderRadius = {'6px'} bg={BUTTON_LINEAR_RIGHT_COLOR}  _hover = {{ bgGradient: `linear(180deg, ${BUTTON_LINEAR_LEFT_COLOR}, ${BUTTON_LINEAR_RIGHT_COLOR})`}} _focus={{}} _active={{}}  /* bgGradient = {`linear(180deg, ${BUTTON_LINEAR_LEFT_COLOR}, ${BUTTON_LINEAR_RIGHT_COLOR})`} */ borderColor = {FILE_BORDER_COLOR}>
          <Text color = {BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} >Next</Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default OnBoardingPage

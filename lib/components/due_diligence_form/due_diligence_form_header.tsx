"use client"
import React, { useEffect, useRef } from 'react';
import {  Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { PiNumberCircleFiveFill, PiNumberCircleFourFill, PiNumberCircleOneFill, PiNumberCircleSixFill, PiNumberCircleThreeFill, PiNumberCircleTwoFill } from 'react-icons/pi';
import Image from 'next/image';
import { VscChevronRight } from 'react-icons/vsc';
import { usePathname } from 'next/navigation';
import { HiOutlineBell } from 'react-icons/hi2';
import { MdOutlineSettings } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { HEADER_BG, HEADING_ICON_ACTIVE_COLOR, HEADER_ICON_COLOR, HEADING_ICON_SIZE, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT, BUTTON_BG } from '@/lib/app/app_constants';
import { dueDiligenceFormPathTitle, dueDiligencePathFormName } from '@/lib/app/constant_data';

const DueDiligenceFormHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentPath = usePathname();
  const pathRefs = useRef<(HTMLDivElement | null)[]>([]);

  //Path Information
  const pathTitle = dueDiligenceFormPathTitle;
  const pathName = dueDiligencePathFormName;

  useEffect(() => {
    const currentIndex = pathTitle.findIndex((path) => `/due_diligence_form/${path}` === currentPath);
    if (currentIndex !== -1 && pathRefs.current[currentIndex]) {
      pathRefs.current[currentIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }, [currentPath, pathName]);

  return (
    <>
      {/* For Laptop and Large Screen Devices */}
      <Flex display = {['none','none','none','flex']} flexDir = {'column'} w = {'100vw'} bg = {HEADER_BG} h = {'64px'} color = {'white'} >

        <Flex p = {'20px 40px 20px 40px'} justifyContent = {'space-between'} w = {'100%'} alignItems = {'center'}>
          {/*  Flash Logo */}
          <Flex position = {'relative'} maxW = {'72px'} w = {'100%'} minH = {'28px'} h = {'100%'} >
            <Image src = {'/images/Flash Logo.png'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
          </Flex>
          {/* Form Headings */}
          <Flex  h = {'24px'} gap = {'8px'}>
            {
              pathTitle.map((path, index) => {
                const isActive = `/due_diligence_form/${pathName[index]}` === currentPath;
                return (
                  <Flex h = {'100%'}  alignItems = {'center'} gap = {'8px'} _hover = {{color:HEADING_ICON_ACTIVE_COLOR}} color = {isActive ? HEADING_ICON_ACTIVE_COLOR : HEADER_ICON_COLOR} >
                    { 
                      index == 0 ? <PiNumberCircleOneFill  fontSize = {HEADING_ICON_SIZE} /> : 
                      index == 1 ? <PiNumberCircleTwoFill fontSize = {HEADING_ICON_SIZE} /> : 
                      index == 2 ? <PiNumberCircleThreeFill fontSize = {HEADING_ICON_SIZE} /> : 
                      index == 3 ? <PiNumberCircleFourFill fontSize = {HEADING_ICON_SIZE} /> : 
                      index == 4 ? <PiNumberCircleFiveFill fontSize = {HEADING_ICON_SIZE} /> :
                      index == 5 ? <PiNumberCircleSixFill fontSize = {HEADING_ICON_SIZE} /> : null
                    }
                    <Text flexWrap = {'nowrap'} fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT}>{path}</Text>
                    {
                      ((pathTitle.length - 1) == index ) ? null : <VscChevronRight fontSize = {HEADING_ICON_SIZE} />
                    }
                  </Flex>
                );
              })
            }
          </Flex>
          {/*Adding Extra Node for Alignment */}
          <Flex visibility = {'hidden'}></Flex>
        </Flex>

      </Flex>

      {/* For Mobile and Tablet Devices */}
      <Flex flexDir = {'column'} display = {['flex','flex','flex','none']} bg = {HEADER_BG}>

        {/* First Section */}
        <Flex w = {'100vw'} minH = {'55px'} h = {'100%'} px = {'16px'} justifyContent = {'space-between'} alignItems = {'center'}>
          {/* HamburgerMenu Icon */}
          <Flex flexDir = {'column'}>
            <IconButton
              bg = {HEADER_BG}
              color = {BUTTON_BG}
              _hover = {{bg:HEADER_BG}}
              _active = {{bg:HEADER_BG}}
              _focus = {{bg:HEADER_BG}}
              justifyContent = {'center'}
              alignItems = {'center'}
              icon = {isOpen ? <IoMdClose fontSize = {'25px'}/> : <GiHamburgerMenu fontSize = {'25px'}/>}
              aria-label = {"Open Menu"}
              onClick = {isOpen ? onClose : onOpen}
            />
          </Flex>
          {/* Flash Logo */}
          <Flex position = {'relative'} maxW = {'64px'} w = {'100%'} minH = {'24px'} h = {'100%'}  >
            <Image src = {'/images/Flash Logo.png'} priority = {true} alt = {"Flash Logo"} fill style = {{ objectFit: 'contain' }} />
          </Flex>
          {/* Message and Settings Icons */}
          <Flex w = {'68px'} h = {'24px'} gap = {'20px'} color = {BUTTON_BG} alignItems = {'center'}>
            <Text _hover = {{color:HEADING_ICON_ACTIVE_COLOR}} _focus = {{color:HEADING_ICON_ACTIVE_COLOR}}><HiOutlineBell fontSize = {'25px'} /></Text>
            <Text _hover = {{color:HEADING_ICON_ACTIVE_COLOR}} _focus = {{color:HEADING_ICON_ACTIVE_COLOR}}><MdOutlineSettings fontSize = {'25px'}/></Text>
          </Flex>
        </Flex>

        {/* Second Section */}
        <Flex w = {'100vw'} h = {'64px'} borderColor = {BUTTON_BG} borderTopWidth = {'1px'} >
          {/* Form Headings */}
          <Flex ml = {'16px'} gap = {'20px'} overflowX = {'auto'} whiteSpace = {'nowrap'}>
            {
              pathTitle.map((path, index) => {
                const isActive = `/due_diligence_form/${pathTitle[index]}` === currentPath;
                return (
                  <Flex key = {index} w = {'100%'} h = {'100%'} ref = {el => { if (el) pathRefs.current[index] = el }} alignItems = {'center'} gap = {'8px'} _hover = {{color:HEADING_ICON_ACTIVE_COLOR}} color = {isActive ? HEADING_ICON_ACTIVE_COLOR : HEADER_ICON_COLOR} >
                    { 
                      index == 0 ? <PiNumberCircleOneFill  fontSize = {HEADING_ICON_SIZE} /> : 
                      index == 1 ? <PiNumberCircleTwoFill fontSize = {HEADING_ICON_SIZE} /> : 
                      index == 2 ? <PiNumberCircleThreeFill fontSize = {HEADING_ICON_SIZE} /> : 
                      index == 3 ? <PiNumberCircleFourFill fontSize = {HEADING_ICON_SIZE} /> : 
                      index == 4 ? <PiNumberCircleFiveFill fontSize = {HEADING_ICON_SIZE} /> : null
                    }
                    <Text flexWrap = {'nowrap'} fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT}>{path}</Text>
                    {
                      ((pathTitle.length - 1) == index ) ? null : <VscChevronRight fontSize = {HEADING_ICON_SIZE} />
                    }
                  </Flex>
                );
              })
            }
          </Flex>
        </Flex>
        
      </Flex>
    </>
  );
}

export default DueDiligenceFormHeader

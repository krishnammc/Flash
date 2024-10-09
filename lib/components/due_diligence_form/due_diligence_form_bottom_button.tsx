"use client"
import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';
import { BOTTOM_BUTTON_BORDER_COLOR, BUTTON_BG, FILE_BORDER_COLOR, HELP_TEXT_COLOR, TEXT_FONT_SIZE, BUTTON_TEXT_FONT_WEIGHT, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, BUTTON_TEXT_COLOR } from '@/lib/app/app_constants';
import { dueDiligenceFormPathToNextPath, dueDiligenceFormPathToPrevPath, dueDiligenceFormsPath, dueDiligenceFormsPrevPathName } from '@/lib/app/constant_data';


const DueDiligenceFormBottomButton = () => {
  const router = useRouter();

  //Getting Current Path
  const currentPath = usePathname() as dueDiligenceFormsPath;

  //Current Path to Path Heading
  const pathNameToText = dueDiligenceFormsPrevPathName;
  const buttonText = pathNameToText[currentPath];

  //Current Path to PrevPath Data
  const pathToPrevPath = dueDiligenceFormPathToPrevPath;
  const prevPath = pathToPrevPath[currentPath];

  //Current Path to NextPath Data
  const pathToNextPath = dueDiligenceFormPathToNextPath;
  const nextPath = pathToNextPath[currentPath];

  //Current Path to PrevPath Function
  const MoveToPrevPath = () => {
    if (prevPath) return router.push(prevPath);
  }

  //Current Path to NextPath Function
  const MoveToNextPath = () => {
    if (nextPath) return router.push(nextPath);
  }

  return (
    <Flex position = {'fixed'} bottom = {'0'} w  = {'100vw'} h = {'80px'} justifyContent = {'space-between'} p = {'20px 40px 20px 40px'} borderTop = {'1px'} borderColor = {BOTTOM_BUTTON_BORDER_COLOR} bg = {BUTTON_BG}>
      {
        buttonText == null ? 
          <Flex visibility = {'hidden'}></Flex> 
        :
          <Button w = {'auto'} h = {'40px'} gap = {'5px'} borderColor = {FILE_BORDER_COLOR} borderWidth = {'1px'} borderRadius = {'6px'} bg = {BUTTON_BG} onClick = {MoveToPrevPath}>
            <Text color = {HELP_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Back - {buttonText}</Text>
          </Button>
      }
      
      {/* Used Fixed Width For Tablet, Laptop and Other Devices  */}
      <Button display={['none','flex']} w = {'62px'} h = {'40px'} gap = {'5px'} borderWidth = {'1px'} borderRadius = {'6px'} bgGradient = {`linear(180deg, ${BUTTON_LINEAR_LEFT_COLOR}, ${BUTTON_LINEAR_RIGHT_COLOR})`} borderColor = {FILE_BORDER_COLOR} onClick = {MoveToNextPath}>
        <Text color = {BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Next</Text>
      </Button>
      {/* Used Full Width For Mobile Devices  */}
      <Button display={['flex','none']} w = {'100%'} h = {'40px'} gap = {'5px'} borderWidth = {'1px'} borderRadius = {'6px'} bgGradient = {`linear(180deg, ${BUTTON_LINEAR_LEFT_COLOR}, ${BUTTON_LINEAR_RIGHT_COLOR})`} borderColor = {FILE_BORDER_COLOR} onClick = {MoveToNextPath}>
        <Text color = {BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Next</Text>
      </Button>
    </Flex>
  );
}

export default DueDiligenceFormBottomButton

"use client"
import { Flex, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { ChangeEvent, useRef, useState } from 'react'
import { BODY_TEXT_FONT_FAMILY, FILE_BG, FILE_BORDER_COLOR, HEADING_ICON_ACTIVE_COLOR, HELP_TEXT_COLOR, LABEL_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, REQUIRED_SYMBOL_COLOR, TEXT_AREA_FONT_WEIGHT, TEXT_FONT_WEIGHT } from '../app/app_constants';
import { FaInbox } from 'react-icons/fa6';
import { FaRegQuestionCircle } from 'react-icons/fa';
import ResponsiveTooltip from './tooltip';
import { MdInfoOutline } from 'react-icons/md';

export interface fields {
    label:string,
    helpText:string,
    subHelpText :string,
    isInValid:boolean,
    required:boolean,
    toolTip: string,
    errorMessage:string,
    h?:string
}

const FileField = ({label, helpText, subHelpText, isInValid, required, toolTip, errorMessage, h = '100%'}:fields) => {
  
  const [file, setFile ] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
    }
  }
  return (
    <FormControl isInvalid = {isInValid} >
      <Flex flexDir = {'row'}>                      
        <FormLabel fontFamily = {PAGE_HEADING_FONT_FAMILY} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {LABEL_COLOR}>
          {label}
          { required ?
            <ResponsiveTooltip placement = 'auto' wrapperDivProps = {{ ml: '5px' }}>
              <Text as = {'span'} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {REQUIRED_SYMBOL_COLOR}>*</Text>
            </ResponsiveTooltip> : <></>
          }
          { toolTip?.length !== 0 && toolTip == "Question" ?
            <ResponsiveTooltip label = {toolTip} placement = 'auto' wrapperDivProps = {{ ml: '5px' }}>
              <FaRegQuestionCircle  fontSize = {LIST_TEXT_FONT_SIZE} cursor = {'pointer'} height = {'auto'} width = {'auto'}/>
            </ResponsiveTooltip> : <></>
          }
          { toolTip?.length !== 0 && toolTip == "Info" ?
            <ResponsiveTooltip label = {toolTip} placement = 'auto' wrapperDivProps = {{ ml: '5px' }}>
              <MdInfoOutline fontSize = {LIST_TEXT_FONT_SIZE} cursor = {'pointer'} height = {'auto'} width = {'auto'}/>
            </ResponsiveTooltip> : <></>
          }
        </FormLabel>
      </Flex>
      <Input type = 'file' display = {'none'} ref = {fileRef} onChange = {handleFile} /> 
      <Flex h = {h} w = {'100%'} borderRadius = {'6px'} gap = {'20px'} alignItems = {'center'} justifyContent = {'flex-end'} flexDir = {'column'} borderWidth = {'1px'} borderStyle = {'dashed'} borderColor = {FILE_BORDER_COLOR} p = {'16px'} bg = {FILE_BG} onClick = {() => {fileRef.current?.click()}} >
        <Flex h = {'80px'} justifyContent = {'flex-end'} alignItems = {'flex-end'}>
          <FaInbox fontSize = {'30px'} color = {HEADING_ICON_ACTIVE_COLOR}/>
        </Flex>
        <Flex flexDir = {'column'} justifyContent = {'center'} gap = {'4px'} h = {'48px'} alignItems = {'center'}>
          <Text textAlign = {'center'} fontFamily={BODY_TEXT_FONT_FAMILY} fontSize = {['13px','13px','14px','14px','14px']} fontWeight = {'500'} color = {HELP_TEXT_COLOR}>{helpText}</Text>
          <Text textAlign = {'center'} fontFamily={BODY_TEXT_FONT_FAMILY} fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} color = {HELP_TEXT_COLOR}>{subHelpText}</Text>
        </Flex>
      </Flex>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export default FileField

"use client"
import { Flex, FormControl, FormErrorMessage, FormLabel, Text, Textarea, TextareaProps } from '@chakra-ui/react';
import React from 'react';
import { BODY_TEXT_FONT_FAMILY, INPUT_BORDER_COLOR, LABEL_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, REQUIRED_SYMBOL_COLOR, TEXT_AREA_FONT_WEIGHT, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '../app/app_constants';
import { MdInfoOutline, MdOutlineInfo } from 'react-icons/md';
import { FieldValidationType } from '../utlils/utill_methods';
import { FaRegQuestionCircle } from 'react-icons/fa';
import ResponsiveTooltip from './tooltip';

export interface fields {
  label: string,
  value: string | string[] | number,
  values:{id:string,value:string}[]
  helpText:string,
  format:FieldValidationType,
  inputProps:TextareaProps,
  isInValid: boolean,
  required:boolean,
  toolTip: string,
  errorMessage: string,
  h?:string,
  w?:string,
}

function TextAreaField({ label, value, values, helpText, format, inputProps, required, toolTip, errorMessage, isInValid, w = '100%', h = 'fit-content' }: fields) {
     
  return (
    <FormControl isInvalid = {isInValid} >   
      <Flex flexDir = {'row'} >        
        <FormLabel fontFamily = {PAGE_HEADING_FONT_FAMILY} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {LABEL_COLOR} >
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
      <Textarea
        {...inputProps}
        value = {value}
        h = {h}

        fontFamily={BODY_TEXT_FONT_FAMILY}
        fontSize = {TEXT_FONT_SIZE}
        fontWeight = {TEXT_FONT_WEIGHT}   
        borderColor = {INPUT_BORDER_COLOR}
        borderRadius = {'4px'}
        p = {'12px'}  
        placeholder = {helpText}                         
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export default TextAreaField;



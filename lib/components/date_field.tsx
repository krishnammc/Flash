import React from 'react'
import { Flex, FormControl, FormErrorMessage, FormLabel, Input, InputProps, Text } from '@chakra-ui/react'
import { BODY_TEXT_FONT_FAMILY, DATE_FIELD_BORDER, DATE_FIELD_TEXT_COLOR, LABEL_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, REQUIRED_SYMBOL_COLOR, TEXT_AREA_FONT_WEIGHT, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '../app/app_constants'
import { FieldValidationType } from '../utlils/utill_methods'
import { FaRegQuestionCircle } from 'react-icons/fa'
import ResponsiveTooltip from './tooltip'
import { MdInfoOutline } from 'react-icons/md'

export interface fields {
  label: string,
  value: string | string[] | number,
  values:{id:string,value:string}[]
  helpText:string,
  format:FieldValidationType,
  inputProps:InputProps,
  isInValid: boolean,
  required:boolean,
  toolTip: string,
  errorMessage: string,
  h?:string,
  w?:string,
}

const DateField = ({ label, value, values, helpText, format, inputProps, required, toolTip, errorMessage, isInValid, w = '100%', h = 'fit-content' }:fields) => {

  return (
    <FormControl w = {'100%'} isInvalid = {isInValid}>
      <Flex flexDir = {'row'}>
        <FormLabel  fontFamily = {PAGE_HEADING_FONT_FAMILY} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {LABEL_COLOR}>
          {label}
          { required ?
            <ResponsiveTooltip placement='auto' wrapperDivProps={{ ml: '5px' }}>
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
      <Input
        {...inputProps}
        value = {value} 
        placeholder = {helpText}
        type = 'date' 
        fontFamily={BODY_TEXT_FONT_FAMILY}
        fontWeight={TEXT_FONT_WEIGHT}
        fontSize={TEXT_FONT_SIZE}
        color = {DATE_FIELD_TEXT_COLOR} 
        cursor = {'pointer'} 
        h = {'42px'} 
        borderWidth = {'1px'} 
        borderRadius = {'4px'} 
        borderColor = {DATE_FIELD_BORDER} 
        p = {'8px 15px 8px 15px'}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export default DateField

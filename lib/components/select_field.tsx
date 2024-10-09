import { Flex, FormControl, FormErrorMessage, FormLabel, InputProps, Select, SelectProps, Text } from '@chakra-ui/react'
import React from 'react'
import { BODY_TEXT_FONT_FAMILY, INPUT_BORDER_COLOR, LABEL_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, REQUIRED_SYMBOL_COLOR, TEXT_AREA_FONT_WEIGHT, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '../app/app_constants'
import { FieldValidationType } from '../utlils/utill_methods';
import { FaRegQuestionCircle } from 'react-icons/fa';
import ResponsiveTooltip from './tooltip';
import { MdInfoOutline } from 'react-icons/md';

export interface fields {
  label: string,
  value: string | number | string[],
  values:{id:string, value:string}[],
  helpText:string,
  inputProps:SelectProps,
  isInValid: boolean,
  required:boolean,
  toolTip: string,
  errorMessage?: string,
  format:FieldValidationType,
  h?:string,
  w?:string,
}

const SelectField = ({ label, value, values, helpText, inputProps, required, toolTip, errorMessage, format, isInValid, w = '100%', h }:fields) => {
  console.log(label,value)
  return (
    <FormControl w = {w} isInvalid = {isInValid}> 
      <Flex flexDir = {'row'}>        
        <FormLabel  fontFamily = {PAGE_HEADING_FONT_FAMILY} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {LABEL_COLOR} >
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
      <Select 
        {...inputProps} 
        fontFamily={BODY_TEXT_FONT_FAMILY}
        fontSize = {TEXT_FONT_SIZE}
        fontWeight = {TEXT_FONT_WEIGHT}   
        h = {'44px'} 
        borderWidth = {'1px'} 
        borderRadius = {'4px'} 
        borderColor = {INPUT_BORDER_COLOR}
        defaultValue = {value}  
        placeholder = {helpText}
      >
        {
          values.map((val) => {
            return (
              <option key = {val.id} style = {{ width:"fit-content"}} value = {val.id} >{val.value}</option>
            );
          })
        }       
      </Select>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>              
    </FormControl>
  );
}

export default SelectField

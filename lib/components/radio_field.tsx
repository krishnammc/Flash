import { Flex, FormControl, FormErrorMessage, FormLabel, InputProps, Radio, RadioGroup, RadioProps, Text } from '@chakra-ui/react'
import React from 'react'
import { BODY_TEXT_FONT_FAMILY, LABEL_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, REQUIRED_SYMBOL_COLOR, TEXT_AREA_FONT_WEIGHT, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '../app/app_constants';
import { FaRegQuestionCircle } from 'react-icons/fa';
import ResponsiveTooltip from './tooltip';
import { MdInfoOutline } from 'react-icons/md';

export interface fields {
  label:string,
  inputProps:RadioProps,
  values:{id:string,value:string}[],
  required:boolean,
  toolTip: string,
  hintIcon?:boolean,
  align?:string[],
  errorMessage:string,
  isInValid:boolean,
  value:string | string[] | number,
  helpText:string
}

const RadioField = ({label, required, toolTip, errorMessage,value,  values, inputProps, isInValid, hintIcon, align}:fields) => {
  return (
    <FormControl gap = {'8px'} isInvalid = {isInValid} >   
      <Flex >    
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
      <RadioGroup defaultValue = {value != '' ? value as string : ''} >                       
        <Flex flexDir = {["column", "column", "row", "row", "row"]} gap = {'12px'} >                       
          {
            values.map((val) => {  
              return (                                               
                <Radio
                  key = {val.id} 
                  {...inputProps} 
                  isChecked = {value == val.id}
                  value = {val.id}
                  colorScheme = {'gray'} 
                  w = {'100%'} 
                  p = {"10px 15px 10px 0"}
                >
                  <Text fontFamily={BODY_TEXT_FONT_FAMILY} fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} >{val.value}</Text>
                </Radio>    
              );
            })        
          }
        </Flex>
      </RadioGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export default RadioField

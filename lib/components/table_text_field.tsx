import { Flex, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react';
import React from 'react'
import { INPUT_BORDER_COLOR, LIST_TEXT_FONT_SIZE, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '../app/app_constants';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';

export interface fields {
  value:string | number | boolean | string[]  ,
  helpText:string,
  inputProps?:InputProps
}

const TableTextField = ({value, helpText, inputProps}:fields) => {
  //console.log("InputProps :",inputProps)
  return (
    <Flex justifyContent = {'center'}>
      <InputGroup w = {'132px'} h = {'36px'} borderRadius = {'4px'} borderColor = {INPUT_BORDER_COLOR}>
        <Input 
          {...inputProps}
          fontSize = {TEXT_FONT_SIZE} 
          fontWeight = {TEXT_FONT_WEIGHT} 
         /*  value = {value}  */
          placeholder = {helpText}
        />
        <InputRightElement flexDir = {'column'} fontSize = {LIST_TEXT_FONT_SIZE} cursor = {'pointer'} >
          <FaAngleUp />
          <FaAngleDown />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
}

export default TableTextField

"use client"
import { PRE_LOGIN_LABEL_TEXT_FONT_SIZE, PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT, PRE_LOGIN_LABEL_TEXT_FONT_FAMILY, PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY, PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE, PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT, PRE_LOGIN_INPUT_BORDER_COLOR, PRE_LOGIN_INPUT_TEXT_COLOR, PRE_LOGIN_INPUT_BACKGROUND_COLOR, PRE_LOGIN_INPUT_ICON_COLOR } from '@/lib/app/app_constants'
import { Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputProps, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import OTPField from './otp_field'
import { FieldValidationType } from '@/lib/utlils/utill_methods'

export interface fields {
  label?:string,
  type?:"text" | "email" | "password" |"number" |"otp",
  value?: string | string[] | number,
  values?:{id:string,value:string}[],
  placeholder?:string,
  inputProps?:InputProps,
  isInValid?:boolean,
  format?:FieldValidationType,
  errorMessage?: string | null,
  w?:string,
  h?:string,
  req?:boolean,
}

const TextField = ({label, type, value, values, placeholder, inputProps, format, isInValid, errorMessage, w = "100%", h = "44px",req=false}:fields) => {
  const [show, setShow] = useState(false);

  //Password Hide and Show Function
  const handleClick = () => setShow(!show);

  return (
    <FormControl  gap = {'4px'} isInvalid = {isInValid}>
      { label && 
      <FormLabel title = {'Montserrat Medium 16px'} fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}>{label} {req && <span style={{color:"red"}}>*</span>}</FormLabel>
      }
      { (format == "PASSWORD" || format == "CONFIRM_PASSWORD") ?
        <InputGroup maxW = {w} w = {'100%'} h = {h} borderWidth = {'1px'}  borderRadius = {'6px'} borderColor = {PRE_LOGIN_INPUT_BORDER_COLOR}>
          <Input 
            {...inputProps}
            type = {show ? 'text' : 'password'}
            value = {value}
            placeholder = {placeholder}
            title={'Montserrat Medium 16px'}
            p = {'12px'}
            h = {h}
            fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} 
            fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} 
            fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}
            color = {PRE_LOGIN_INPUT_TEXT_COLOR}
            bg = {PRE_LOGIN_INPUT_BACKGROUND_COLOR}
          />
          <InputRightElement fontSize = {'20px'} cursor = {'pointer'} color = {PRE_LOGIN_INPUT_ICON_COLOR}>
            <Text as = {'span'} onClick = {handleClick}>
              { show ? <AiOutlineEye  /> : <AiOutlineEyeInvisible /> }
            </Text>
          </InputRightElement>
        </InputGroup>
      :
        <Input 
          {...inputProps}
          value = {value}
          type = {'text'} 
          title={'Montserrat Medium 16px'}
          placeholder = {placeholder} 
          borderWidth = {'1px'} 
          borderRadius = {'4px'}
          p = {'12px'}
          borderColor = {PRE_LOGIN_INPUT_BORDER_COLOR} 
          color = {PRE_LOGIN_INPUT_TEXT_COLOR}
          bg = {PRE_LOGIN_INPUT_BACKGROUND_COLOR}
          w = {w}
          h = {h}
          fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} 
          fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} 
          fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}
        />
      }
      <FormErrorMessage fontFamily = {PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY} fontSize = {PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE} fontWeight = {PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT}>{errorMessage}</FormErrorMessage>      
    </FormControl>
  )
}

export default TextField

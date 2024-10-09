import { PRE_LOGIN_INPUT_BACKGROUND_COLOR, PRE_LOGIN_INPUT_BORDER_COLOR, PRE_LOGIN_INPUT_TEXT_COLOR, PRE_LOGIN_LABEL_TEXT_FONT_FAMILY, PRE_LOGIN_LABEL_TEXT_FONT_SIZE, PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT } from '@/lib/app/app_constants'
import { FieldValidationType } from '@/lib/utlils/utill_methods'
import { FormControl, Input, InputProps } from '@chakra-ui/react'
import React from 'react'
export interface fields {
  label:string,
  value: string | string[] | number,
  inputProps:InputProps,
  isInValid:boolean,
  format:FieldValidationType,
  errorMessage: string,
  w?:string,
  h?:string
}

const OTPField = ({label, value, inputProps, format, isInValid, errorMessage, w = "100%", h = "44px"}:fields) => {
 
  return (
    <FormControl  gap = {'4px'} isInvalid = {isInValid}>
      <Input 
        {...inputProps}
        value = {value}
        maxW = {'62px'}
        w = {'100%'}
        maxLength = {1}
        textAlign={'center'}
        type = {'text'} 
        borderWidth = {'1px'} 
        borderRadius = {'4px'}
        h = {'44px'}
        p = {'12px'}
        color = {PRE_LOGIN_INPUT_TEXT_COLOR}
        bg = {PRE_LOGIN_INPUT_BACKGROUND_COLOR}
        borderColor = {PRE_LOGIN_INPUT_BORDER_COLOR} 
        fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY}
        fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE}
        fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}
      />
    </FormControl>
  )
}

export default OTPField

import { LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, INPUT_BORDER_COLOR, INPUT_TEXT_COLOR, BUTTON_BG, LOGIN_INPUT_FIELD_PADDING, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT, PRE_LOGIN_LABEL_TEXT_FONT_FAMILY, PRE_LOGIN_LABEL_TEXT_FONT_SIZE, PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT, PRE_LOGIN_INPUT_BORDER_COLOR, PRE_LOGIN_INPUT_BACKGROUND_COLOR, PRE_LOGIN_INPUT_TEXT_COLOR, PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY, PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE, PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT } from '@/lib/app/app_constants'
import { FieldValidationType } from '@/lib/interfaces/incorporation/pre_login_form/interfaces'
import { FormControl, FormErrorMessage, FormLabel, Input, Textarea, TextareaProps } from '@chakra-ui/react'
import React from 'react'

export interface fields {
  label:string,
  value: string | string[] | number,
  values:{id:string, value:string}[],
  placeholder:string,
  inputProps:TextareaProps,
  isInValid:boolean,
  format:FieldValidationType,
  errorMessage: string | null,
  w?:string,
  h?:string
}

const TextareaField = ({label, value, values, placeholder, inputProps, format, isInValid, errorMessage, w = "100%", h = "120px"}:fields) => {
  return (
    <FormControl gap = {'4px'} isInvalid = {isInValid}>
      <FormLabel fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}>{label}</FormLabel>
      <Textarea 
        {...inputProps}
        value = {value}
        placeholder = {placeholder} 
        borderWidth = {'1px'} 
        borderRadius = {'4px'}
        p = {'12px'}
        w = {w}
        h = {h}
        color = {PRE_LOGIN_INPUT_TEXT_COLOR}
        bg = {PRE_LOGIN_INPUT_BACKGROUND_COLOR}
        borderColor = {PRE_LOGIN_INPUT_BORDER_COLOR} 
        fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} 
        fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} 
        fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}
      />
      <FormErrorMessage fontFamily = {PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY} fontSize = {PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE} fontWeight = {PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT}>{errorMessage}</FormErrorMessage>             
    </FormControl>
  );
}

export default TextareaField

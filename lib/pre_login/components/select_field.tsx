import { LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, INPUT_BORDER_COLOR, INPUT_TEXT_COLOR, BUTTON_BG, LOGIN_INPUT_FIELD_PADDING, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT, PRE_LOGIN_LABEL_TEXT_FONT_FAMILY, PRE_LOGIN_LABEL_TEXT_FONT_SIZE, PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT, PRE_LOGIN_INPUT_BACKGROUND_COLOR, PRE_LOGIN_INPUT_TEXT_COLOR, PRE_LOGIN_INPUT_BORDER_COLOR, PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY, PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE, PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT } from '@/lib/app/app_constants'
import { FieldValidationType } from '@/lib/interfaces/incorporation/pre_login_form/interfaces'
import { FormControl, FormErrorMessage, FormLabel, Input, Select, SelectProps, Textarea } from '@chakra-ui/react'
import React from 'react'

export interface fields {
  label:string,
  value: string | string[] | number,
  values:{id:string, value:string}[],
  placeholder:string,
  inputProps:SelectProps,
  isInValid:boolean,
  format:FieldValidationType,
  errorMessage: string,
  w?:string,
  h?:string,
  req?:boolean
}

const SelectField = ({label, value, values, placeholder, inputProps, format, isInValid, errorMessage, w = "100%", h = "44px", req = false}:fields) => {
  return (
    <FormControl gap = {'4px'} isInvalid = {isInValid}>
      <FormLabel fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}>{label} {req && <span style={{color:"red"}}>*</span>} </FormLabel>
      <Select 
        {...inputProps}        
        borderWidth = {'1px'} 
        value = {value != "" ? value as string : ""}  
        placeholder = {placeholder} 
        borderRadius = {'4px'}
        w = {w}
        h = {h}
        borderColor = {PRE_LOGIN_INPUT_BORDER_COLOR} 
        color = {PRE_LOGIN_INPUT_TEXT_COLOR}
        bg = {PRE_LOGIN_INPUT_BACKGROUND_COLOR}
        fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} 
        fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} 
        fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}
      >
        {
          values.map((val) => {
            return (
              <option key = {val.id} style = {{ width:"fit-content"}} value = {val.id} >{val.value}</option>
            );
          })
        }
      </Select>
      <FormErrorMessage fontFamily = {PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY} fontSize = {PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE} fontWeight = {PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT}>{errorMessage}</FormErrorMessage>             
    </FormControl>
  )
}

export default SelectField

import { Flex, FormControl, Checkbox, Text, FormLabel, CheckboxProps, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import { PRE_LOGIN_PAGE_BODY_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_SIZE, PRE_LOGIN_PAGE_BODY_FONT_WEIGHT, PRE_LOGIN_LABEL_TEXT_FONT_FAMILY, PRE_LOGIN_LABEL_TEXT_FONT_SIZE, PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT, PRE_LOGIN_INPUT_BACKGROUND_COLOR, PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY, PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE, PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT } from '@/lib/app/app_constants';
import { FieldValidationType } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';

export interface fields {
  label:string,
  value: string | string[] | number,
  values:{id:string,value:string}[],
  placeholder:string,
  inputProps?:CheckboxProps,
  onChange:(e:React.ChangeEvent<HTMLInputElement>,id:string|number)=>void,
  isInValid:boolean,
  format:FieldValidationType,
  errorMessage: string,
  w?:string,
  h?:string
}

const CheckBox = ({label, value, values, placeholder, inputProps, onChange, format, isInValid, errorMessage, w = "100%", h = "44px"}:fields) => {
  return (
    <FormControl gap = {'4px'} isInvalid = {isInValid}>
      <FormLabel fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}>{label}</FormLabel>
      {
        values.map((label) => {

          const val = value as string[]
          return(
            <Flex justifyContent = {'top'} alignItems = {'flex-start'} mt = {'8px'} key = {label.id}>
              <Checkbox onChange = {(e) => {onChange(e, label.id)}} isChecked = {val?.includes(label.id)}
                sx = {{
                  "& .chakra-checkbox__control": {
                    borderRadius:"4px",
                    height:"16px",
                    width:"16px",
                    borderWidth:"1px",
                    bg:PRE_LOGIN_INPUT_BACKGROUND_COLOR
                  }
                }}
              >
                <Text fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT}>{label.value}</Text>
              </Checkbox>
            </Flex>
          );
        })
      }
      <FormErrorMessage fontFamily = {PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY} fontSize = {PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE} fontWeight = {PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT}>{errorMessage}</FormErrorMessage>             
    </FormControl>
  );
}

export default CheckBox

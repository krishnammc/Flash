import { Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, InputProps, Select, Text } from '@chakra-ui/react'
import React, { ChangeEvent } from 'react'
import { INPUT_BORDER_COLOR, LABEL_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY, PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE, PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT, PRE_LOGIN_INPUT_BACKGROUND_COLOR, PRE_LOGIN_INPUT_TEXT_COLOR, PRE_LOGIN_LABEL_TEXT_FONT_FAMILY, PRE_LOGIN_LABEL_TEXT_FONT_SIZE, PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT, REQUIRED_SYMBOL_COLOR, TEXT_AREA_FONT_WEIGHT } from '../app/app_constants';
import { FaRegQuestionCircle } from 'react-icons/fa';
import ResponsiveTooltip from './tooltip';
import { MdInfoOutline } from 'react-icons/md';

export interface fields {
    id:string,
    label:string,
    values:{id:string, value:string}[],
    helpText:string,
    inputProps:InputProps,
    required:boolean,
    toolTip: string,
    value:string,
    onChangePhone: (event: ChangeEvent<HTMLSelectElement>) => void,
    textHelpText:string,
    h?:string,
    inputValue:string | number | string[],
    w?:string,
    req?:boolean,
    errorMessage:string
    isInValid:boolean
}

const PhoneNumberField = ({label, helpText,inputProps,value,inputValue, textHelpText,isInValid, values,errorMessage, h = '44px', required, w="100%", toolTip, onChangePhone,req=false}:fields) => {

  return (
    <FormControl w = {'100%'} isInvalid = {isInValid} >
      <Flex flexDir = {'row'}>
        <FormLabel title = {'Montserrat Medium 16px'} fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}   >
          {label} {req && <span style={{color:"red"}}>*</span>}
          { required ?
            <ResponsiveTooltip placement = 'auto' wrapperDivProps = {{ ml: '5px' }}>
              <Text as = {'span'} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {REQUIRED_SYMBOL_COLOR}>*</Text>
            </ResponsiveTooltip> : <></>
          }
          {
           toolTip?.length !== 0 && toolTip == "Question" ?
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
     
        <InputGroup w = {w} >
          <InputLeftElement maxW={"70px"} w={"100%"} height={"100%"} maxH={"44px"} alignItems={'center'} justifyContent={'center'}>
          <Select  defaultValue={value} w={"100%"} height={"40px"} isInvalid={false} style={{paddingLeft:"10px", paddingRight:'5px', height:'40px'}}  onChange = {(e)=>{onChangePhone(e)}} bg={"#fff"}  color={"#000"} border={'none'}   borderWidth = {'1px'} borderRadius = {'4px'} borderColor = {INPUT_BORDER_COLOR}>
          { 
            values.map((value) => {
              return (
                <option key = {value.id}  color={"#000"} style = {{ width:"fit-content"}} value = {value.value} >{value.value}</option>
              );
            })
          }       
        </Select>
          </InputLeftElement>
        <Input
          w = {w}
          h = {h}      
          {...inputProps}
          pl={"75px"}
          fontFamily = {PRE_LOGIN_LABEL_TEXT_FONT_FAMILY} 
          fontSize = {PRE_LOGIN_LABEL_TEXT_FONT_SIZE} 
          fontWeight = {PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT}
          color = {PRE_LOGIN_INPUT_TEXT_COLOR}
          bg = {PRE_LOGIN_INPUT_BACKGROUND_COLOR}
          placeholder = {textHelpText}
          borderRadius = {'4px'}
          value = {inputValue}
        />
        </InputGroup>


      <FormErrorMessage fontFamily = {PRE_LOGIN_ERROR_MESSAGE_FONT_FAMILY} fontSize = {PRE_LOGIN_ERROR_MESSAGE_FONT_SIZE} fontWeight = {PRE_LOGIN_ERROR_MESSAGE_FONT_WEIGHT}>{errorMessage}</FormErrorMessage>   
      
    </FormControl>
  );
}

export default PhoneNumberField

import { Flex, FormControl, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { INPUT_BORDER_COLOR, LABEL_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, REQUIRED_SYMBOL_COLOR, TEXT_AREA_FONT_WEIGHT } from '../app/app_constants';
import { FaRegQuestionCircle } from 'react-icons/fa';
import ResponsiveTooltip from './tooltip';
import { MdInfoOutline } from 'react-icons/md';

export interface fields {
    id:string,
    label:string,
    values:{id:string, value:string}[],
    helpText:string,
    required:boolean,
    toolTip: string,
    textHelpText:string,
    h?:string
}

const PhoneNumberField = ({label, helpText, textHelpText, values, h = '44px', required, toolTip}:fields) => {

  return (
    <FormControl w = {'100%'}>
      <Flex flexDir = {'row'}>
        <FormLabel  fontFamily = {PAGE_HEADING_FONT_FAMILY} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {LABEL_COLOR}>
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
      <Flex w = {'100%'} >
        <Select w = {['40%','40%','40%','30%','30%']} placeholder = {helpText} h = {'44px'} borderWidth = {'1px'} borderRadius = {'4px 0 0 4px'} borderColor = {INPUT_BORDER_COLOR}>
          {
            values.map((value) => {
              return (
                <option key = {value.id} style = {{ width:"fit-content"}} value = {value.value} >{value.value}</option>
              );
            })
          }       
        </Select>
        <Input
          w = {'100%'}
          h = {h}      
          fontWeight = {"400"}
          fontSize = {'14px'}   
          borderColor = {INPUT_BORDER_COLOR}
          placeholder = {textHelpText}
          borderRadius = {'0 4px 4px 0'}
          p = {'12px'}                           
        />
      </Flex>
    </FormControl>
  );
}

export default PhoneNumberField

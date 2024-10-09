import { Flex, FormControl, Checkbox, Text, FormLabel, CheckboxProps, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import { BODY_TEXT_FONT_FAMILY, HELP_TEXT_COLOR, LABEL_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, REQUIRED_SYMBOL_COLOR, TEXT_AREA_FONT_WEIGHT, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '../app/app_constants';
import { FaRegQuestionCircle } from 'react-icons/fa';
import ResponsiveTooltip from './tooltip';
import { MdInfoOutline } from 'react-icons/md';

interface fields {
  label:string,
  values: { id: string, value: string }[],
  helpText: string,
  required:boolean,
  toolTip: string,
  inputProps?: CheckboxProps,
  onChange:(e:React.ChangeEvent<HTMLInputElement>,id:string|number)=>void,
  isInvalid: boolean,
  value: string | number | string[] | number[],
  errorMessage: string,
}

const CheckBox = ({ values, inputProps, label, onChange, isInvalid, errorMessage, value, required, toolTip  }:fields) => {
  return (
    <FormControl gap = {'8px'} isInvalid = {isInvalid}>
      <FormLabel fontFamily = {PAGE_HEADING_FONT_FAMILY} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {LABEL_COLOR}>
        {label}
        { required ?
          <ResponsiveTooltip placement='auto' wrapperDivProps={{ ml: '5px' }}>
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
                    borderWidth:"1px"
                  }
                }}
              >
                <Text fontFamily={BODY_TEXT_FONT_FAMILY} fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT}   ml = {'15px' }>{label.value}</Text>
              </Checkbox>
            </Flex>
          );
        })
      }
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export default CheckBox

import { Button, Flex, FormControl, FormErrorMessage, FormLabel, InputProps, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa';
import { LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LABEL_COLOR, REQUIRED_SYMBOL_COLOR, LIST_TEXT_FONT_SIZE, TABLE_HEADING_BG, BUTTON_TEXT_FONT_WEIGHT, TEXT_FONT_WEIGHT, FILE_BORDER_COLOR, HEADER_ICON_COLOR, TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, TEXT_AREA_FONT_WEIGHT } from '../app/app_constants';
import { FieldValidationType } from '../interfaces/incorporation/requirement_form/interfaces';
import TableTextField from './table_text_field';
import { MdEdit, MdInfoOutline } from 'react-icons/md';
import { HiMiniTrash } from 'react-icons/hi2';
import ResponsiveTooltip from './tooltip';

export interface fields {
  label: string,
  value: string | number | string[],
  values:{id:string, value:string}[],
  helpText:string,
  inputProps:InputProps,
  isInValid: boolean,
  required:boolean,
  toolTip: string,
  errorMessage?: string,
  format:FieldValidationType,
  h?:string,
  w?:string,

  isShareCapital?:boolean,
  isShareHolder?:boolean,
}

const SubTableField = ({ label, value, values, helpText, inputProps, required, toolTip, errorMessage, format, isInValid, w = '100%', h, isShareCapital, isShareHolder}:fields) => {
  return (
    <FormControl  gap = {'12px'} isInvalid = {isInValid} >          
      <Flex mb = {'12px'} flexDir = {'row'} h = '32px' justifyContent = {'space-between'} alignItems = {'center'}>                      
        <FormLabel  fontFamily = {PAGE_HEADING_FONT_FAMILY} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {LABEL_COLOR} >
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
        <Button  borderColor = {FILE_BORDER_COLOR} h = {'32px'} borderWidth = {'1px'} bg = {HEADER_ICON_COLOR}>
          <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Add Sub-Class</Text>
        </Button>
      </Flex>
      <TableContainer borderRadius = {'6px'} borderWidth = {'1px'}>
        <Table>
          <Thead backgroundColor = {TABLE_HEADING_BG} fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>
            <Tr>
              { isShareCapital ?
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>Class of Shares</Th>
              :
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} >Sub-class of Shareholder</Th>
              }
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} textAlign = {'center'}>Ordinary</Th>
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} textAlign = {'center'}>Preference</Th>
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} textAlign = {'center'}>Others</Th>
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} textAlign = {'end'}>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              { isShareCapital ?
              <Th fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>Amount of Paid Up Share Capital</Th>
              :
              <Th fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>Sub-class A</Th>
              }
              <Td><TableTextField helpText={'100'} value={''}  /></Td>
              <Td><TableTextField helpText={'100'} value={''} /></Td>
              <Td><TableTextField helpText={'100'} value={''} /></Td>
              <Td>
                <Flex flexDir = {'row'} gap = {'8px'}>
                  { isShareCapital &&
                  <Flex w = {'46px'} h = {'32px'} cursor = {'pointer'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'} borderColor = {FILE_BORDER_COLOR}>
                    <MdEdit/>
                  </Flex>
                  }
                  <Flex w = {'46px'} h = {'32px'} cursor = {'pointer'} justifyContent = {'center'} alignItems = {'center'} borderWidth = {'1px'} borderRadius = {'6px'}  borderColor = {FILE_BORDER_COLOR}>
                    <HiMiniTrash />
                  </Flex>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
  );
}

export default SubTableField

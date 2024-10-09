import { Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, InputProps, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa';
import { LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LABEL_COLOR, REQUIRED_SYMBOL_COLOR, LIST_TEXT_FONT_SIZE, TABLE_HEADING_BG, BUTTON_TEXT_FONT_WEIGHT, TEXT_FONT_WEIGHT, TEXT_AREA_FONT_WEIGHT, PAGE_HEADING_FONT_FAMILY } from '../app/app_constants';
import { FieldValidationType, RequirementFormTableValues } from '../interfaces/incorporation/requirement_form/interfaces';
import TableTextField from './table_text_field';
import ResponsiveTooltip from './tooltip';
import { getNumberFromString, validateField } from '../utlils/utill_methods';
import { shareCapitalTableAnswerData } from '../api/incorporation/requirement_form_data/share_capital_data';
import { MdInfoOutline } from 'react-icons/md';

export interface fields {
  label:string,
  value: string | number | string[],
  values:{id:string, value:string}[],
  tableValues:RequirementFormTableValues[],
  answerData:Record<string, string | number | number[] | string[] | boolean>,
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
  isShareHolder?:boolean
}

const TableField = ({ label, value,tableValues, values, answerData, helpText, inputProps, required, toolTip, errorMessage, format, isInValid, w = '100%', h ,isShareCapital, isShareHolder}:fields) => {
  //console.log("Table Values :",tableValues)
  console.log("Answer Value :",answerData);

  const answer_data = answerData;

  const answerDataArray = (label:Record<string, string | number | boolean | string[] | number[]>) => {
    
    if (label !== undefined && label !== null) {
      let value = Object.entries(label) 
      return value.map(([key, value]) => {
        return {
          id: key,
          answer:value
        }
      })
    } else {
      return []
    } 
  }

  const [data, setData] = useState(
    tableValues.map((field:RequirementFormTableValues) => {

      let answerData = answerDataArray(answer_data)
      let answer = answerData.find((e) => e.id === field.id)?.answer;
   
      let ansVal = answer === undefined ? '' : answer;
  
      return { 
        id:field.id,
        value:ansVal as string | string[] | number | boolean ,
        error: null as 'EMPTY' | 'FORMAT' | null
      }
    })
  );
  console.log("Initial Data :",data);


  const onChange = (event:React.ChangeEvent<HTMLInputElement>, id:string, field:RequirementFormTableValues) => {
    const tempData : typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    if (index < 0) return;

    let value: string | number  = event.target.value;

    tempData[index].value = value;
    setData(tempData)
  }

  return (
    <FormControl gap = {'8px'} isInvalid = {isInValid} >          
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
      <TableContainer borderRadius = {'6px'} borderWidth = {'1px'}>
        <Table>
          <Thead backgroundColor = {TABLE_HEADING_BG} fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>
            <Tr>
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>Class of Shares</Th>
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} textAlign = {'center'}>Ordinary</Th>
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} textAlign = 'center'>Preference</Th>
              <Th fontWeight = {BUTTON_TEXT_FONT_WEIGHT} textTransform = {'capitalize'} textAlign = {'end'}>Others</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>Number of Shares</Th>
              {
                ['ordinary', 'preference', 'others'].map((type) => {
                  const field:RequirementFormTableValues = tableValues.find((item) => item.id.includes(`number_of_shares_${type}`))!;
                  
                  let item = data.find((val) => val.id == field.id);
                  let stateValue = item?.value ?? '';
                  return(
                    <Td key = {field?.id ?? `number_of_shares_${type}`}>
                      <TableTextField value = {stateValue} helpText = {field?.help_text ?? '100'} inputProps = {{ onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChange(event, field.id, field) }}/>
                    </Td>
                  );
                })
              }
            </Tr>
            <Tr>
              <Th fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>Amount of Issued Share Capital</Th>
              {
                ['ordinary', 'preference', 'others'].map((type) => {
                  const field = tableValues.find((item) => item.id.includes(`amount_of_issued_share_capital_${type}`));
                  if (!field) {
                    console.error(`Field not found for type: ${type}`);
                    return null;
                  }
                  let item = data.find((val) => val.id == field.id);
                  let stateValue = item?.value ?? '';
                  return(
                    <Td key = {field?.id ?? `number_of_shares_${type}`}>
                      <TableTextField value = {stateValue} helpText = {field?.help_text ?? '100'} inputProps = {{ onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChange(event, field.id, field) }} />
                    </Td>
                  );
                })
              }
            </Tr>
            { isShareCapital &&
            <Tr>
              <Th fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>Amount of Paid Up Share Capital</Th>
              {
                ['ordinary', 'preference', 'others'].map((type) => {
                  const field = tableValues.find((item) => item.id.includes(`amount_of_paid_up_share_capital_${type}`));
                  if (!field) {
                    console.error(`Field not found for type: ${type}`);
                    return null;
                  }
                  let item = data.find((val) => val.id == field.id);
                  let stateValue = item?.value ?? '';
                  return(
                    <Td key = {field?.id ?? `number_of_shares_${type}`}>
                      <TableTextField value = {stateValue} helpText = {field?.help_text ?? '100'} inputProps = {{ onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChange(event,field.id, field) }}/>
                    </Td>
                  );
                })
              }
            </Tr>
            }
            { isShareHolder &&
            <Tr>
              <Th fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} textTransform = {'capitalize'}>Shares Held in Trust</Th>
              {
                ['ordinary', 'preference', 'others'].map((type) => {
                  const field = tableValues.find((item) => item.id.includes(`shares_held_in_trust_${type}`));
                  if (!field) {
                    console.error(`Field not found for type: ${type}`);
                    return null;
                  }
                  let item = data.find((val) => val.id == field.id);
                  let stateValue = item?.value ?? false;
                  console.log("CheckBox :",stateValue)
                  return(
                    <Td key = {field?.id ?? `shares_held_in_trust_${type}`} textAlign={'center'}>
                      <Checkbox colorScheme='gray' isChecked = {stateValue === true  }
                        sx = {{
                          "& .chakra-checkbox__control": {
                            borderRadius:"4px",
                            height:"16px",
                            width:"16px",
                            borderWidth:"1px"
                          }
                        }}
                      />
                    </Td>
                  );
                })
              }
              {/* <Td textAlign={'center'}>
                <Checkbox colorScheme='gray'
                  sx = {{
                    "& .chakra-checkbox__control": {
                      borderRadius:"4px",
                      height:"16px",
                      width:"16px",
                      borderWidth:"1px"
                    }
                  }}
                />
              </Td>
              <Td textAlign={'center'}>
                <Checkbox colorScheme='gray'
                  sx = {{
                    "& .chakra-checkbox__control": {
                      borderRadius:"4px",
                      height:"16px",
                      width:"16px",
                      borderWidth:"1px"
                    }
                  }}
                />
              </Td>
              <Td textAlign={'center'}>
                <Checkbox colorScheme='gray'
                  sx = {{
                    "& .chakra-checkbox__control": {
                      borderRadius:"4px",
                      height:"16px",
                      width:"16px",
                      borderWidth:"1px"
                    }
                  }}
                />
              </Td> */}
            </Tr>
            }
          </Tbody>
        </Table>
      </TableContainer>
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  </FormControl>
  );
}

export default TableField

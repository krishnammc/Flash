"use client"
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputProps, Select, SelectField, Text } from '@chakra-ui/react';
import React from 'react';
import { BODY_TEXT_FONT_FAMILY, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, BUTTON_TEXT_COLOR, INPUT_BORDER_COLOR, LABEL_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, PAGE_HEADING_FONT_FAMILY, REQUIRED_SYMBOL_COLOR, TEXT_AREA_FONT_WEIGHT, TEXT_COLOR, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '../app/app_constants';
import { FieldValidationType } from '../utlils/utill_methods';
import { FaRegQuestionCircle } from 'react-icons/fa';
import ResponsiveTooltip from './tooltip';
import { MdInfoOutline } from 'react-icons/md';

export interface fields {
  label: string,
  value: string | string[] | number,
  values:{id:string,value:string}[]
  helpText:string,
  format:FieldValidationType,
  inputProps:InputProps,
  isInValid: boolean,
  required:boolean,
  toolTip: string,
  errorMessage: string,
  h?:string,
  w?:string,
}

function TextField({ label, value, values, helpText, format, inputProps, required, toolTip, errorMessage, isInValid, w = '100%', h = 'fit-content' }: fields) {
     
  return (
    <FormControl w = {w} isInvalid = {isInValid}> 
      <Flex flexDir = {'row'} w = {"100%"}>          
        <FormLabel fontFamily = {PAGE_HEADING_FONT_FAMILY} fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {LABEL_COLOR} >
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
      <Flex fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT}>
        {  
          format == "TEXT_ONLY" ?                                                                                
            <Input
              {...inputProps}
              w = {w}
              h = {h}  
              fontFamily={BODY_TEXT_FONT_FAMILY}
              fontSize = {TEXT_FONT_SIZE}
              fontWeight = {TEXT_FONT_WEIGHT}   
              borderColor = {INPUT_BORDER_COLOR}
              placeholder = {helpText}
              borderRadius = {'4px'}
              p = {'12px'}  
              value = {value}                         
            />
          : format == "TEXT_WITH_BUTTON" ?
            <Flex w = {'100%'} >                                                                       
              <Input
                {...inputProps}
                w = {'70%'}
                h = {h}  
                fontFamily={BODY_TEXT_FONT_FAMILY}
                fontSize = {TEXT_FONT_SIZE}
                fontWeight = {TEXT_FONT_WEIGHT}   
                borderColor = {INPUT_BORDER_COLOR}
                placeholder = {helpText}
                borderRadius = {'4px 0 0 4px'}   
                value = {value}                        
              />
              <Flex h = {'44px'} bg = {'yellow'} justifyContent = {'center'}  w = {'30%'}>
                <Button 
                  w = {'100%'}
                  h = {'100%'} 
                  color = {TEXT_COLOR}
                  bgGradient = {`linear(180deg, ${BUTTON_LINEAR_LEFT_COLOR}, ${BUTTON_LINEAR_RIGHT_COLOR})`}    
                  borderRadius = {'0 4px 4px 0'} 
                >
                  <Text color = {BUTTON_TEXT_COLOR} display = {["none","none","none","flex","flex"]} fontSize = {TEXT_FONT_SIZE} fontFamily={BODY_TEXT_FONT_FAMILY} fontWeight = {TEXT_AREA_FONT_WEIGHT}>Check Availability</Text>
                  <Text color = {BUTTON_TEXT_COLOR} display = {["flex","flex","flex","none","none"]} fontSize = {TEXT_FONT_SIZE} fontFamily={BODY_TEXT_FONT_FAMILY} fontWeight = {TEXT_AREA_FONT_WEIGHT}>Check</Text>
                </Button>
              </Flex>                                                                    
            </Flex> 
          :
            <Input
            {...inputProps}
            w = {w}
            h = {h}  
            fontFamily={BODY_TEXT_FONT_FAMILY}
            fontSize = {TEXT_FONT_SIZE}
            fontWeight = {TEXT_FONT_WEIGHT}   
            borderColor = {INPUT_BORDER_COLOR}
            placeholder = {helpText}
            borderRadius = {'4px'}
            p = {'12px'}  
            value = {value}                         
          />
        } 
      </Flex>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>      
    </FormControl>
  );
}

export default TextField;



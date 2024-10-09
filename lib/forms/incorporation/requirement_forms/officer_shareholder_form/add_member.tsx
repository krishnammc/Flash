"use client"
import React, { ChangeEvent, useState } from 'react'
import { Flex, GridItem, SimpleGrid } from '@chakra-ui/react';
import DateField from '@/lib/components/date_field';
import FileField from '@/lib/components/file_field';
import RadioField from '@/lib/components/radio_field';
import TextField from '@/lib/components/text_field';
import { RequirementFormSectionValues } from '@/lib/interfaces/incorporation/requirement_form/interfaces';
import SelectField from '@/lib/components/select_field';
import ButtonField from '@/lib/components/button_field';
import TextAreaField from '@/lib/components/textarea_field';
import { getNumberFromString, validateField } from '@/lib/utlils/utill_methods';

export interface fields {
  section_values:RequirementFormSectionValues[],
  answer_data:Record<string, string | number | string[] | number[]>
}

const AddMember = ({section_values, answer_data}:fields) => {

  const answerDataArray = (label:Record<string, string | number | string[] | number[]>) => {
    
    if (label !== undefined && label !== null) {
      let value = Object.entries(label) 
      return value.map(([key, value]) => {
        return {
          id: key,
          answer:value
        }
      });
    } else {
      return []
    } 
  }

  const [data, setData] = useState(
    section_values.map((field:RequirementFormSectionValues) => {

      let answerData = answerDataArray(answer_data)
      let answer = answerData.find((e) => e.id === field.id)?.answer;
      if (answer == undefined && field.format_validation !== null) answer = ['NUMBER', 'NUMBER_WITH_LIMIT', 'PRICE', 'PRICE_WITH_LIMIT'].includes(field.format_validation) ? 0 : answer;
   
      let ansVal = answer === undefined ? (field.type === "TEXT" ? '' : (field.type === "SELECT" ? '' : (field.type === "CHECKBOX" ? [] : ''))) : answer;
    
      if (field.type == "CHECKBOX" && ( typeof ansVal == "string" || typeof ansVal == "number")) {
        let ans1 : string[] | number[] | string | number = [ansVal as string]
        ansVal = ans1
      } 
  
      return { 
        id:field.id,
        value:ansVal as string | string[] | number ,
        error: null as 'EMPTY' | 'FORMAT' | null
      }
    })
  );
  console.log("Initial Data :",data);
  
  const onChange = (event:React.ChangeEvent<HTMLInputElement>, id:string, field:RequirementFormSectionValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    if (index < 0) return;

    let value: string | number  = event.target.value;

    const isNumberRelatedInput = field.format_validation !== null ? ['NUMBER', 'NUMBER_WITH_LIMIT'].includes(field.format_validation) : false;
      if (isNumberRelatedInput) {
        try { value = getNumberFromString(event.target.value) ?? 0 } catch(e) {}
      }

    const validateResult = validateField(value.toString(), field.format_validation,isNumberRelatedInput ? field?.limit?.toString() ?? '' : undefined )
    tempData[index].value = value;
    tempData[index].error = field.is_required ?  (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" :null) : null
    setData(tempData)
  }

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>, id: string, field:RequirementFormSectionValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    if (index < 0) return;

    let value: string | number = event.target.value;
    const isNumberRelatedInput = field.format_validation !== null ? ['NUMBER', 'NUMBER_WITH_LIMIT'].includes(field.format_validation) : false;

    if (isNumberRelatedInput) {
      try { value = getNumberFromString(event.target.value) ?? 0 } catch(e) {}
    }

    const validateResult = validateField(value.toString(), field.format_validation,isNumberRelatedInput ? field?.limit?.toString() ?? '' : undefined )
    tempData[index].value = value;

    tempData[index].error = field.is_required ?  (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" :null) : null
    setData(tempData)
  }

  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>, id:string, fields:RequirementFormSectionValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field: { id: string; }) => field.id == fields.id);

    if (index < 0) return;

    tempData[index].value = event.target.value;
    const validateResult = validateField(event.target.value, fields.format_validation)
    tempData[index].error = fields.is_required ? (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" :null ): null
    setData(tempData)
  }

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement> , id: string, fields:RequirementFormSectionValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field: { id: string; }) => field.id == id);

    if (index < 0) return;

    tempData[index].value = event.target.value;
    const validateResult = validateField(event.target.value, fields.format_validation)
    tempData[index].error = fields.is_required ?  validateResult.isEmpty ==true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" :null : null
    setData(tempData)
  }

  const submitValidate = () => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data))
    
    tempData.forEach((input) => {

      let value =  section_values.filter((e)=>e.id==input.id)
      //console.log(value)
  
      value.map((e) => {
        if (e.type == "TEXT") {
          let value: number | string = input.value as number | string;
          const isNumberRelatedInput = e.format_validation !== null ? ['NUMBER', 'NUMBER_WITH_LIMIT', 'PRICE', 'PRICE_WITH_LIMIT'].includes(e.format_validation) : false;
          const validateResult = validateField(value.toString(), e.format_validation, isNumberRelatedInput ? e.limit.toString() ?? '' : undefined)
          input.error = e.is_required ? (validateResult.isEmpty? "EMPTY" : validateResult.isContainsFormatError? "FORMAT" : null) : null;
        } else if (e.type == "SELECT") {
          const validateResult = validateField(input.value as string, e.format_validation)
          input.error = e.is_required ? (validateResult.isEmpty? "EMPTY" : validateResult.isContainsFormatError? "FORMAT" : null) : null;
        } else if (e.type == "RADIO") {
          const validateResult = validateField(input.value as string , e.format_validation)
          input.error = e.is_required ? (validateResult.isEmpty? "EMPTY" : validateResult.isContainsFormatError? "FORMAT" : null) : null;
        } else if (e.type == "TEXTAREA") {
          let value: number | string = input.value as number | string;
          const validateResult = validateField(value.toString(), e.format_validation)
          input.error = e.is_required ? (validateResult.isEmpty? "EMPTY" : validateResult.isContainsFormatError? "FORMAT" : null) : null;
         }else if (e.type == "DATE") {
          const validateResult = validateField(input.value as string, e.format_validation)
          input.error = e.is_required ? (validateResult.isEmpty? "EMPTY" : validateResult.isContainsFormatError? "FORMAT" : null) : null;
        }
      })
    })
    setData(tempData)
    return tempData.every((input) => input.error == null);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!submitValidate()) return;
    console.log("Answer Data :",data)
  }

  return (
    <Flex flexDir = {'column'} >
      <form onSubmit = {onSubmit}>
        <Flex flexDir = {'column'} gap = {'10px'}>
          <SimpleGrid columns = {2} columnGap = {'12px'} rowGap = {'12px'}>
            {
              section_values.map((e:RequirementFormSectionValues) => {  
                let field = data.find((val) => val.id == e.id);
                let stateValue = field?.value!;
                const errorType = field?.error ?? null;
                const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
                const isInValid = (errorType != null);

                switch(e.type) {
                  case "TEXT" :
                    return(
                      <GridItem key = {e.id} colSpan = {2}>
                        <TextField label = {e.label} value = {stateValue}  values = {e.values} helpText = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} h = {'44px'} />
                      </GridItem>
                    );
                  case 'RADIO':
                    return (
                      <GridItem key = {e.id} colSpan = {2}>
                        <RadioField label = {e.label} value = {stateValue}  values = {e.values} helpText = {e.help_text} inputProps = {{ onChange: event => onChangeRadio(event, e.id, e) }} isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} />
                      </GridItem>
                    );
                  case "SELECT" :
                    return (
                      <GridItem key = {e.id} colSpan = {2}>
                        <SelectField label = {e.label} value = {stateValue} values = {e.values} helpText = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChangeSelect(event, e.id, e) }} isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} h = {'44px'} />
                      </GridItem>
                    );
                  case "TEXTAREA" :
                    return(
                      <GridItem key = {e.id} colSpan = {2}>
                        <TextAreaField label = {e.label} value = {stateValue}  values = {e.values} helpText = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChangeTextArea(event, e.id, e) }} isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} h = {'120px'} />
                      </GridItem>
                    );
                  case "DATE" :
                    return(
                      <GridItem key = {e.id} colSpan = {2} >
                        <DateField label = {e.label} value = {stateValue}  values = {e.values} helpText = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} h = {'44px'} />        
                      </GridItem>
                    );
                  case "FILE" :
                    return(
                      <GridItem key = {e.id} colSpan = {2}>
                        <FileField label = {e.label} helpText = "Click or drag file to this area to upload" subHelpText = "Drag & drop your pdf here, max 5MB" isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} />
                      </GridItem>
                    );
                }              
              })
            }
          </SimpleGrid>
          <ButtonField textValue = {'Checking Error'} h = {'44px'}/>
        </Flex>
      </form>
    </Flex>
  );
}

export default AddMember

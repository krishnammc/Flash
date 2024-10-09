"use client"
import { LABEL_COLOR, FORM_BORDER_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from "@/lib/app/app_constants";
import ButtonField from "@/lib/components/button_field";
import RadioField from "@/lib/components/radio_field";
import SelectField from "@/lib/components/select_field";
import TextField from "@/lib/components/text_field";
import { RequirementFormSectionValues } from "@/lib/interfaces/incorporation/requirement_form/interfaces";
import { getNumberFromString, validateField } from "@/lib/utlils/utill_methods";
import { Flex, SimpleGrid, GridItem, Text, FormLabel} from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";

export interface fields {
  section_values:RequirementFormSectionValues[],
  answer_data:Record<string, string | number | string[] | number[]>
}

const RegisteredOfficeAddress  = ({section_values,answer_data}:fields) => {

  const answerDataArray = (label:Record<string, string | number | string[] | number[]>) => {
    
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
        } else if (e.type == "FULL_TEXT") {
          let value: number | string = input.value as number | string;
          const validateResult = validateField(value.toString(), e.format_validation)
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
        <Flex flexDir = {'column'} gap = {'12px'}>
          <SimpleGrid columns = {6} columnGap = {'12px'} rowGap = {'12px'}>
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
                      <GridItem key = {e.id} colSpan = {[6,3]}>
                        <TextField label = {e.label} value = {stateValue}  values = {e.values} helpText = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} h = {'44px'} />
                      </GridItem>
                    );
                  case "FULL_TEXT" :
                  return(
                    <GridItem key = {e.id} colSpan = {6}>
                      <TextField label = {e.label} value = {stateValue}  values = {e.values} helpText = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} h = {'44px'} />
                    </GridItem>
                  );
                  case 'RADIO':
                    return (
                      <GridItem key = {e.id}  colSpan = {6}>
                        <RadioField label = {e.label} value = {stateValue}  values = {e.values} helpText = {e.help_text} inputProps = {{ onChange: event => onChangeRadio(event, e.id, e) }} isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} />
                      </GridItem>
                    );
                  case "SELECT" :
                    return (
                      <GridItem key = {e.id} colSpan = {[6,3]}>
                        <SelectField label = {e.label} value = {stateValue} values = {e.values} helpText = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChangeSelect(event, e.id, e) }} isInValid = {isInValid} required = {e.is_required} toolTip = {e.label_tooltip} errorMessage = {errorMessage} h = {'44px'} />
                      </GridItem>
                    );
                  case "STATIC_TEXT" :
                    return(
                      <GridItem key = {e.id} colSpan = {[6,2]}>
                        <FormLabel fontSize = {LABEL_TEXT_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {LABEL_COLOR}>{e.label}</FormLabel>
                        <Text fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT}>{stateValue}</Text>
                      </GridItem>
                    );
                }              
              })
            }
          </SimpleGrid>
          <ButtonField textValue = 'Retrieve Company Info' w = '100%' h = '40px' />   
        </Flex>  
      </form>
    </Flex>
  );
}

export default RegisteredOfficeAddress;
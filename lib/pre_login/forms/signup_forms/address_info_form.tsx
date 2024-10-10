"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import TextareaField from '../../components/textarea_field';
import SelectField from '../../components/select_field';
import TextField from '../../components/text_field';
import ButtonField from '../../components/button_field';
import { BUTTON_BG, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT, PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR, PRE_LOGIN_BUTTON_BACKGROUND_COLOR, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_BUTTON_TEXT_COLOR } from '@/lib/app/app_constants';
import { Flex, Heading, SimpleGrid, GridItem, Button, Text } from '@chakra-ui/react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { validateField } from '@/lib/utlils/utill_methods';
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import { SignUpPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';

export const SignUpAddressInfoLabelData:SignUpPageLabelDataValues[] =[
  {
    id: 'address',
    type: 'TEXTAREA',
    label: 'Address',
    values: [],
    help_text: 'Enter your Address',
    error_message: 'Please enter your Address',
    format_error_message: 'Address should not contain numbers or any special characters',
    format_validation: 'NONE'
  },
  {
    id: 'country',
    type: 'SELECT',
    label: 'Country',
    values: [
      {
        id: 'one',
        value: 'Singapore'
      },
      {
        id: 'two',
        value: 'India'
      }
    ],
    help_text: 'Select your Country',
    error_message: 'Please select the Country',
    format_error_message: 'Format Error Message',
    format_validation: 'NONE'
  },
  {
    id: 'postal_code',
    type: 'TEXT',
    label: 'Postal Code',
    values: [],
    help_text: 'Input yor Postal Code',
    error_message: 'Please Enter Postal Code',
    format_error_message: 'Postal Code should contain only numbers',
    format_validation: 'NUMBER'
  }
]

export interface AddressInfoProps {
  onSubmit:() => void,
  moveBack:() => void,
  buttonLoader:boolean
}

const AddressInfoForm = ({onSubmit, moveBack,buttonLoader}:AddressInfoProps) => {
  
  const [data, setData] = useState<Array<{ id: string; type: string; value: string | string[] | number; error: 'EMPTY' | 'FORMAT' | null }>>(
    SignUpAddressInfoLabelData.map((field: SignUpPageLabelDataValues) => ({
      id: field.id,
      type: field.type,
      value: field.type === 'CHECKBOX' ? [] : '',
      error: null,
    }))
  );
  console.log(data)

  const [isSubmitting, setSubmitting] = useState(false);
  const [store, setStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Address Info Form Values');

  useEffect(() => {
    const answerData = store ?? {};
    const newData = SignUpAddressInfoLabelData.map((field) => {
      const answer = answerData[field.id];
      return {
        id: field.id,
        type: field.type,
        value: answer ?? (field.type === 'CHECKBOX' ? [] : ''),
        error: null,
      };
    });
    setData(newData);
  }, [store]);


  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: SignUpPageLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    if (index < 0) return;

    let value: string | number = event.target.value;
    const validateResult = validateField(value.toString(), field.format_validation)
    tempData[index].value = value;

    tempData[index].error = (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" : null)
    setData(tempData)
  }

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>, id: string, field:SignUpPageLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    if (index < 0) return;

    let value: string | number = event.target.value;

    const validateResult = validateField(value.toString(), field.format_validation)
    tempData[index].value = value;

    tempData[index].error = validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" :null
    setData(tempData)
  }

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement> , id: string, fields:SignUpPageLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field: { id: string; }) => field.id == id);

    if (index < 0) return;

    tempData[index].value = event.target.value;
    const validateResult = validateField(event.target.value, fields.format_validation)
    tempData[index].error = validateResult.isEmpty ==true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" :null
    setData(tempData)
  }

  const submitValidate = () => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    tempData.forEach((input) => {
      let value = SignUpAddressInfoLabelData.filter((e) => e.id == input.id);
      value.map((e) => {
        if (e.type == "TEXT") {
          let value: number | string = input.value as number | string;
          const validateResult = validateField(value.toString(), e.format_validation)
          input.error = validateResult.isEmpty ? "EMPTY" : validateResult.isContainsFormatError ? "FORMAT" : null;
        } else if (e.type == "SELECT") {
          const validateResult = validateField(input.value as string, e.format_validation)
          input.error =  (validateResult.isEmpty? "EMPTY" : validateResult.isContainsFormatError? "FORMAT" : null);
        } else if (e.type == "TEXTAREA") {
          let value: number | string = input.value as number | string;
          const validateResult = validateField(value.toString(), e.format_validation )
          input.error = (validateResult.isEmpty? "EMPTY" : validateResult.isContainsFormatError? "FORMAT" : null) ;
        }
      })
    })
    setData(tempData);
    return tempData.every((input) => input.error == null);
  }

  const onApi = () => {
    setSubmitting(true);
    const result = data.reduce((acc, item) => {
      acc[item.id] = item.value;
      return acc;
    }, {} as Record<string, string | string[] | number>);
    setStorage(result);
    setSubmitting(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!submitValidate()) return;
    console.log("Answer Data :", data);
    onSubmit();
    onApi();
  }
  
  return (
    <>
      <Flex flexDir = {'column'} gap = {['4px', '4px', '16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Let’s create your account</Heading>
        <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>Enter your location information</Text>
      </Flex>

      <form onSubmit = {handleSubmit}>
        {/* Sign Up Page Input Field */}
        <SimpleGrid columns = {2} w = {'100%'} rowGap = {'16px'} columnGap = {'16px'}>

        {
          SignUpAddressInfoLabelData.map((e: SignUpPageLabelDataValues) => {
            let field = data.find((val) => val.id == e.id);
            if (!field) return null;
            let stateValue = field.value;
            const errorType = field.error ?? null;
            const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
            const isInValid = (errorType != null);

            switch (e.type) {
              case "TEXT":
                return (
                  <GridItem colSpan = {[2, 2, 1]} key = {e.id}>
                    <TextField label = {e.label} req={true} value = {stateValue} values = {e.values} placeholder = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} errorMessage = {errorMessage} />
                  </GridItem>
                );
                case "SELECT":
                return (
                  <GridItem colSpan = {[2, 2, 1]} key = {e.id}>
                    <SelectField label = {e.label} req={true} value = {stateValue} values = {e.values} placeholder = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChangeSelect(event, e.id, e) }} isInValid = {isInValid} errorMessage = {errorMessage} />
                  </GridItem>
                );
                case "TEXTAREA":
                return (
                  <GridItem colSpan = {2} key = {e.id}>
                    <TextareaField label = {e.label} req={true} value = {stateValue} values = {e.values} placeholder = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChangeTextArea(event, e.id, e) }} isInValid = {isInValid} errorMessage = {errorMessage} />
                  </GridItem>
                );
            }
          })
        }

        </SimpleGrid>

        {/* Verification Section */}
        <Flex mt = {'24px'}>
          <ButtonField textValue = {'Continue'} buttonLoader={buttonLoader} />
        </Flex>
      </form>

      <Flex justifyContent = {'center'} alignItems = {'center'} mt = {"-16px"} >
        <Button w = {'100%'} h = {'40px'} bg = {PRE_LOGIN_BUTTON_BACKGROUND_COLOR} borderRadius = {'4px'} gap = {'8px'} onClick = {moveBack}>
          <HiArrowNarrowLeft />
          <Text color = {PRE_LOGIN_BUTTON_TEXT_COLOR} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT}>Previous</Text>
        </Button>
      </Flex>
    </>
  );
}

export default AddressInfoForm

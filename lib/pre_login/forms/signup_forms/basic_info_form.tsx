"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import { BUTTON_BG, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_BODY_FONT_WEIGHT, PRE_LOGIN_PAGE_BODY_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_SIZE, PRE_LOGIN_LINK_HOVER_COLOR, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT } from '@/lib/app/app_constants';
import { Flex, Heading, SimpleGrid, GridItem, Text, Alert, AlertIcon } from '@chakra-ui/react';
import Link from 'next/link';
import { validateField } from '@/lib/utlils/utill_methods';
import TextField from '../../components/text_field';
import ButtonField from '../../components/button_field';
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import { SignUpPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';
import { fonts } from '@/lib/app/chakra_theme';
import PhoneNumberField from '@/lib/components/phone_number_field';


export const SignUpBasicInfoLabelData:SignUpPageLabelDataValues[] = [
  {
    id: 'first_name',
    type: 'TEXT',
    label: 'First Name',
    help_text: 'Input your First Name',
    error_message: 'Please enter First Name',
    format_error_message: 'First Name should not contain numbers or any special characters',
    format_validation: "TEXT_ONLY",
    values: []
  },
  {
    id: 'last_name',
    type: 'TEXT',
    label: 'Last Name',
    help_text: 'Input your Last Name',
    error_message: 'Please enter Last Name',
    format_error_message: 'Last Name should not contain numbers or any special characters',
    format_validation: "TEXT_ONLY",
    values: []
  },
  {
    id: 'company_name',
    type: 'TEXT',
    label: 'Company Name',
    help_text: 'Input your Company Name',
    error_message: 'Please enter Company Name',
    format_error_message: 'Company Name should not contain numbers or any special characters',
    format_validation: "TEXT_ONLY",
    values: []
  },
  {
    id: 'designation',
    type: 'TEXT',
    label: 'Designation',
    help_text: 'Input your Designation',
    error_message: 'Please enter Designation',
    format_error_message: 'Designation should not contain numbers or any special characters',
    format_validation: "TEXT_ONLY",
    values: []
  },
  {
    id: 'email',
    type: 'TEXT',
    label: 'Email',
    help_text: 'Input your Email',
    error_message: 'Please enter Email',
    format_error_message: 'Email should be in email format(eg:test@gmail.com)',
    format_validation: "EMAIL",
    values: []
  },
  {
    id: 'phone_number',
    type: 'PHONE',
    label: 'Phone Number',
    help_text: 'Input your Phone Number',
    error_message: 'Please enter Phone Number',
    format_error_message: 'Phone Number should not contain text or any special characters',
    format_validation: "NONE",
    values: [
      {
        id:'one',
        value:"+91"
      },{
        id:'two',
        value:"+65"
      }, {
        id:'three',
        value:"+60"
      }
    ]
  }
]

export interface BasicInfoProps {
  onSubmit:() => void
  buttonLoader:boolean
}

const BasicInfoForm = ({onSubmit,buttonLoader}:BasicInfoProps) => {

  const [data, setData] = useState<Array<{ id: string; type: string; value: string | string[] | number; error: 'EMPTY' | 'FORMAT' | null }>>(
    SignUpBasicInfoLabelData.map((field: SignUpPageLabelDataValues) => ({
      id: field.id,
      type: field.type,
      value: field.type === 'CHECKBOX' ? [] : '',
      error: null,
    }))
  );
  //console.log(data)
  
  const [isSubmitting, setSubmitting] = useState(false);
  const [store, setStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Basic Info Form Values');
  const [phn,setPhn] = useSessionStorage<string>('phone_number');
  const [phoneNumber,setPhoneNumber] = useState<string>(phn!==null && phn !==undefined ? phn : "+65");

  
  useEffect(() => {
    const answerData = store ?? {};
    const newData = SignUpBasicInfoLabelData.map((field) => {
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
    tempData[index].value = event.target.value;

    tempData[index].error = (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" : null)
    setData(tempData)
  }

  const onChangePhnSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setPhoneNumber(event.target.value)
  }

  const onApi = () => {
    setSubmitting(true);
    const result = data.reduce((acc, item) => {
      acc[item.id] = item.value;
      return acc;
    }, {} as Record<string, string | string[] | number>);
    setStorage(result);
    setPhn(phoneNumber);
    setSubmitting(false);
  };

  const submitValidate = () => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    tempData.forEach((input) => {
      let value = SignUpBasicInfoLabelData.filter((e) => e.id == input.id);
      value.map((e) => {
        if (e.type == "TEXT" || e.type == 'PHONE') {
          let value: number | string = input.value as number | string;
          const validateResult = validateField(value.toString(), e.format_validation)
          input.error = validateResult.isEmpty ? "EMPTY" : validateResult.isContainsFormatError ? "FORMAT" : null;
        }
      })
    })
    setData(tempData);
    return tempData.every((input) => input.error == null);
  }

  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitValidate()) return;
    console.log("Answer Data :", data);
    onSubmit();
    onApi();
  }
console.log(data)
  return (
    <>
      <Flex flexDir = {'column'} gap = {['4px', '4px', '16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading  fontFamily = {fonts.montserrat} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Let’s create your account</Heading>
        <Text title = {'Montserrat Regular 20px'} fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>Enter your identity information</Text>
      </Flex>

      <form onSubmit = {handleSubmit}>
        {/* Sign Up Page Input Field */}
        <SimpleGrid columns = {2} w = {'100%'} rowGap = {'16px'} columnGap = {'20px'}>
        {
          SignUpBasicInfoLabelData.map((e: SignUpPageLabelDataValues) => {
            let field = data.find((val) => val.id == e.id);
            if (!field) return null;
            let stateValue = field.value!;
            const errorType = field.error ?? null;
            const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
            const isInValid = (errorType != null);

            switch (e.type) {
              case "TEXT":
                return (
                  <GridItem colSpan = {[2, 2, 1]} key = {e.id}>
                    <TextField label = {e.label} req={true}  value = {stateValue} placeholder = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} errorMessage = {errorMessage} />
                  </GridItem>
                );
              case "PHONE" :
                return(
                  <GridItem colSpan = {[2, 2, 1]} key = {e.id}>
                    <PhoneNumberField id={e.id} label={e.label} isInValid={isInValid} inputValue = {stateValue} errorMessage = {errorMessage} value={phoneNumber} values={e.values} req={true} inputProps = {{ onChange: event => onChange(event, e.id, e) }} onChangePhone={onChangePhnSelect} helpText={e.help_text}  required={false} toolTip={''} textHelpText={e.help_text}  />
                  </GridItem>
                )
            }
          })
        }
        </SimpleGrid>

        {/* Verification Section */}
        <Flex mt = {'24px'}>
          <ButtonField textValue = {'Continue'}  buttonLoader={buttonLoader}/>
        </Flex>
      </form>

      <Flex justifyContent = {'center'} alignItems = {'center'} mt = {'-16px'} gap = {'10px'} h = {'32px'}>
        <Text title = {'Helvetica Regular 16px'} fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT}> Have an account?</Text>
        <Link href = {'/client/login'} >
          <Text title = {'Montserrat Bold 18px'} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY}  fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT} _hover = {{color:PRE_LOGIN_LINK_HOVER_COLOR}}>Sign In</Text>
        </Link>
      </Flex>
    </>
  );
}

export default BasicInfoForm

"use client"
import React, { useEffect, useState } from 'react'
import ButtonField from '../../components/button_field';
import { BUTTON_BG, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, TEXT_FONT_SIZE, INPUT_TEXT_COLOR, LABEL_TEXT_FONT_SIZE, LOGIN_INPUT_FIELD_PADDING, INPUT_BORDER_COLOR, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_LABEL_TEXT_FONT_FAMILY, PRE_LOGIN_LABEL_TEXT_FONT_SIZE, PRE_LOGIN_LABEL_TEXT_FONT_WEIGHT, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT } from '@/lib/app/app_constants';
import { Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { validateField } from '@/lib/utlils/utill_methods';
import { ForgotPasswordPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';
import { useRouter } from 'next/navigation';
import TextField from '../../components/text_field';


export interface CheckEmailProps {
  onSubmit:(email:string) => void,
  buttonLoader:boolean
}

export const ForgotPasswordLabelData: ForgotPasswordPageLabelDataValues[] = [
  {
    id: "email",
    type: "TEXT",
    label: "Email",
    help_text: "Input your Email address",
    error_message: "Enter your Email address",
    format_error_message: "Please enter an email using the standard format (e.g., example@domain.com)",
    format_validation: "EMAIL",
    values: []
  }
]


const SendEmail = ({onSubmit,buttonLoader}:CheckEmailProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const router = useRouter();
 
  const [data, setData] = useState(
    ForgotPasswordLabelData.map((field) => {
      let ansVal = '';
      return {
        id: field.id,
        value: ansVal as string | string[] | number,
        error: null as 'EMPTY' | 'FORMAT' | null
      }
    })
  );
  //console.log("Initial Data :", data);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: ForgotPasswordPageLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    if (index < 0) return;

    let value: string | number = event.target.value;
    const validateResult = validateField(value.toString(), field.format_validation);
    tempData[index].value = value;

    tempData[index].error = (validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" : null);
    setData(tempData);
  }

  const submitValidate = () => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    tempData.forEach((input) => {
      let value = ForgotPasswordLabelData.filter((e) => e.id == input.id);
      value.map((e) => {
        if (e.type == "TEXT") {
          let value: number | string = input.value as number | string;
          const validateResult = validateField(value.toString(), e.format_validation);
          input.error = validateResult.isEmpty ? "EMPTY" : (validateResult.isContainsFormatError ? "FORMAT" : null);
        }
      });
    });
    setData(tempData);
    return tempData.every((input) => input.error == null);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitValidate()) return;
    console.log("Answer Data :", data);
    onSubmit(data[0].value as string);
  }

  return (
    <Flex flexDir = {'column'}  w = {'100%'}  gap = {'40px'}>

      {/* Forgot Password Page Heading */}
      <Flex flexDir = {'column'} gap = {['4px','4px','16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Forgot your pasword?</Heading>
        <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>Enter the email address associated with your account and we'll send you a link to reset your password.</Text>
      </Flex>

      <Flex w = {'100%'} flexDir = {'column'} gap = {'24px'}>
        <form onSubmit = {handleSubmit}>
          <Flex flexDir = {'column'} gap = {'24px'}>
            {
              ForgotPasswordLabelData.map((e: ForgotPasswordPageLabelDataValues) => {
                let field = data.find((val) => val.id == e.id);
                let stateValue = field?.value!;
                const errorType = field?.error ?? null;
                const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
                const isInValid = (errorType != null);

                switch (e.type) {
                  case "TEXT":
                    return (
                      <React.Fragment key = {e.id}>
                        <TextField label = {e.label} value = {stateValue} placeholder = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} errorMessage = {errorMessage} />
                      </React.Fragment>
                    );
                }
              })
            }
            
            {/* Sign In Button */}
            <ButtonField textValue = {"Continue"}  buttonLoader={buttonLoader} />

          </Flex>
        </form>
      </Flex>

      <Flex justifyContent = {'center'} alignItems = {'center'} mt = {"-16px"} gap = {'8px'}>
        <Link href = '/client/login'>
          <HiArrowNarrowLeft fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT}/>
        </Link>
        <Link href = '/client/login'>
          <Text fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT} > Back to Login Page</Text>
        </Link>
      </Flex>

    </Flex>
  );
}

export default SendEmail

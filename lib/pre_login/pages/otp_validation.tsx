"use client"
import { PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_BODY_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_SIZE, PRE_LOGIN_PAGE_BODY_FONT_WEIGHT, PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT, PRE_LOGIN_ALTERNATE_BUTTON_BACKGROUND_COLOR, PRE_LOGIN_BUTTON_BORDER_COLOR } from '@/lib/app/app_constants';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import ButtonField from '../components/button_field';
import { useRouter } from 'next/navigation';
import { OTPValidationPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';
import { validateField } from '@/lib/utlils/utill_methods';
import OTPField from '../components/otp_field';

export const OTPValidationPageLabelData:OTPValidationPageLabelDataValues[] = [
  {
    id: 'otp_1',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NUMBER'
  },
  {
    id: 'otp_2',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NUMBER'
  },
  {
    id: 'otp_3',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NUMBER'
  },
  {
    id: 'otp_4',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NUMBER'
  },
  {
    id: 'otp_5',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NUMBER'
  },
  {
    id: 'otp_6',
    type: 'TEXT',
    label: '',
    error_message: '',
    format_error_message: '',
    format_validation: 'NUMBER'
  }
];

const OTPValidationPage = () => {
  const router = useRouter();

  const [data, setData] = useState(
    OTPValidationPageLabelData.map((field) => {
      let ansVal = '';
      return {
        id: field.id,
        value: ansVal as string | string[] | number,
        error: null as 'EMPTY' | 'FORMAT' | null
      }
    })
  );
  //console.log("Initial Data :", data);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: OTPValidationPageLabelDataValues) => {
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
      let value = OTPValidationPageLabelData.filter((e) => e.id == input.id);
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitValidate()) return;
    console.log("Answer Data :", data);
    //router.push('/requirement_form/company_details');
  }

  return (
  <>
    {/* Forgot Password Content */}
    <Flex flexDir = {'column'}  w = {'100%'}  gap = {'40px'}>

      {/* Forgot Password Page Heading */}
      <Flex flexDir = {'column'} gap = {['4px','4px','16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Verification Code</Heading>
        <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>Enter the 6-digit code sent to your email</Text>
      </Flex>

        <form onSubmit = {onSubmit}>
          <Flex flexDir={'column'} gap = {'24px'}>
            <Flex gap = {'16px'}>
              {
                OTPValidationPageLabelData.map((e: OTPValidationPageLabelDataValues) => {
                  let field = data.find((val) => val.id == e.id);
                  let stateValue = field?.value!;
                  const errorType = field?.error ?? null;
                  const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
                  const isInValid = (errorType != null);

                  switch (e.type) {
                    case "TEXT":
                      return (
                        <React.Fragment key = {e.id}>
                          <OTPField label = {e.label} value = {stateValue} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} errorMessage = {errorMessage} />
                        </React.Fragment>
                      );
                  }
                })
              }
                
            </Flex>
            <ButtonField textValue = {'Verify'} />
          </Flex>
        </form>

        {/* Verification Section */}
        <Flex flexDir = {'column'} gap = {'24px'} mt = {'-16px'} justifyContent = {'center'} alignItems = {'center'}>
         
          <Flex flexDir = {'row'} fontFamily ={PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT} w= '100%' justifyContent = {'center'} gap = {'8px'}>
            <Text >Don’t receive the email? Try again in</Text>
            <Text fontWeight = {'700'}>4 m 59 s</Text>
          </Flex>

          <Button w = {'100%'} h = {'40px'} borderWidth = {'1px'} borderColor = {PRE_LOGIN_BUTTON_BORDER_COLOR} borderRadius = {'4px'} bg = {PRE_LOGIN_ALTERNATE_BUTTON_BACKGROUND_COLOR}  >
            <Text color = {PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT}>Resend Code</Text>
          </Button>

        </Flex>
       
    </Flex>
  </>
  );
}

export default OTPValidationPage

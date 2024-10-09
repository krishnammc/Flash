"use client"
import React, { useEffect, useState } from 'react'
import { FieldValidationType, formatValidate, validateField } from '@/lib/utlils/utill_methods';
import TextField from '../../components/text_field';
import { Alert, AlertIcon, Button, Flex, GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import ButtonField from '../../components/button_field';
import { BUTTON_BG, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, TEXT_FONT_SIZE, TEXT_COLOR, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_BUTTON_BACKGROUND_COLOR, PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT, PRE_LOGIN_BUTTON_TEXT_COLOR } from '@/lib/app/app_constants';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import CheckBox from '../../components/checkbox_field';
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import { SignUpPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';

export const SignUpCredentialInfoLabelData:SignUpPageLabelDataValues[] = [
  {
    id: 'new_password',
    type: 'TEXT',
    label: 'New Password',
    values: [],
    help_text: 'Input your Password',
    error_message: "Password should be entered",
    format_error_message: "Password must be more than 8 characters. With a combination of Alphapetic Letters, Numbers and Special Characters ",
    format_validation: 'PASSWORD'
  },
  {
    id: 'confirm_password',
    type: 'TEXT',
    label: 'Confirm Password',
    values: [],
    help_text: 'Retype your Password',
    error_message: "Password should be entered",
    format_error_message: "Your password doesn't Match",
    format_validation: 'CONFIRM_PASSWORD'
  },
  {
    id: 'agree_terms_and_conditions',
    type: 'CHECKBOX',
    label: '',
    values: [
      {
        id: 'one',
        value: 'By creating an account, I agree to Flash Accountant’s Terms & Conditions and Privacy Policy.'
      }
    ],
    help_text: '',
    error_message: 'Checkbox is Empty',
    format_error_message: '',
    format_validation: 'NONE'
  }
]

export interface CredentialInfoProps {
  onSubmit:() => void,
  moveBack:() => void,
  buttonLoader:boolean,
  regError:boolean
}

const CredentialInfo = ({onSubmit, moveBack,buttonLoader,regError}:CredentialInfoProps) => {

  const [data, setData] = useState<Array<{ id: string; type: string; format:FieldValidationType; value: string | string[] | number; error: 'EMPTY' | 'FORMAT' | null }>>(
    SignUpCredentialInfoLabelData.map((field: SignUpPageLabelDataValues) => ({
      id: field.id,
      type: field.type,
      format:field.format_validation,
      value: field.type === 'CHECKBOX' ? [] : '',
      error: null,
    }))
  );
  //console.log(data)

  const [isSubmitting, setSubmitting] = useState(false);
  const [store, setStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Credential Info Form Values');

  useEffect(() => {
    const answerData = store ?? {};
    const newData = SignUpCredentialInfoLabelData.map((field) => {
      const answer = answerData[field.id];
      return {
        id: field.id,
        type: field.type,
        format:field.format_validation,
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

    const value: string = event.target.value;
    let validateResult;

    //Password Validation
    if (field.format_validation === 'PASSWORD') {

      validateResult = validateField(value, field.format_validation);
      tempData[index].value = value;

      const confirmPassIndex = tempData.findIndex((field) => field.format == 'CONFIRM_PASSWORD');

      if (confirmPassIndex >= 0) {
        const confirmPassValue = tempData[confirmPassIndex].value;
        const confirmPassValidation = validateField(confirmPassValue.toString(), 'CONFIRM_PASSWORD', value);
        tempData[confirmPassIndex].error = confirmPassValidation.isEmpty ? "EMPTY" : confirmPassValidation.isContainsFormatError ? "FORMAT" : null;
      }

      tempData[index].error = (validateResult.isEmpty ? "EMPTY" : validateResult.isContainsFormatError ? "FORMAT" : null);
    } 
    //Confirm Password Validation
    else if (field.format_validation === 'CONFIRM_PASSWORD') {

      const passwordIndex = tempData.findIndex((field) => field.format == 'PASSWORD');
      
      if (passwordIndex >= 0) {
        const passwordValue = tempData[passwordIndex].value;
        validateResult = validateField(value, 'CONFIRM_PASSWORD', passwordValue.toString());
        tempData[index].value = value;
        tempData[index].error = validateResult.isEmpty ? "EMPTY" : validateResult.isContainsFormatError ? "FORMAT" : null;
      }
    }
    setData(tempData)
  }

  const onChangeCheckBox = (event:  React.ChangeEvent<HTMLInputElement> , id: string, fields:SignUpPageLabelDataValues , valueId:string | number) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field: { id: string; }) => field.id == id);

    if (index < 0) return;

    const validateResult = validateField(event.target.value, formatValidate(fields.format_validation))
    const selectedId = valueId
    
    if (event.target.checked) {
      tempData[index].value = [...(tempData[index].value as string[]), selectedId as string];
    } else if (event.target.checked == false) {
      tempData[index].value = (tempData[index].value as string[]).filter((b) => b !== selectedId);
    } 

    tempData[index].error = validateResult.isEmpty == true ? "EMPTY" : validateResult.isContainsFormatError == true ? "FORMAT" :null 
    setData(tempData)
  }

  const submitValidate = () => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    tempData.forEach((input) => {
      let value = SignUpCredentialInfoLabelData.filter((e) => e.id == input.id);
      
      value.map((e) => {
        const index = tempData.findIndex((field) => field.id == e.id);
        let validateResult;

        if (e.format_validation == "PASSWORD") {
          const value: string = input.value.toString();
          
          validateResult = validateField(value, e.format_validation);
          const confirmPassIndex = tempData.findIndex((field) => field.format == 'CONFIRM_PASSWORD');

          if (confirmPassIndex >= 0) {
            const confirmPassValue = tempData[confirmPassIndex].value;
            const confirmPassValidation = validateField(confirmPassValue.toString(), 'CONFIRM_PASSWORD', value);
            tempData[confirmPassIndex].error = confirmPassValidation.isEmpty ? "EMPTY" : confirmPassValidation.isContainsFormatError ? "FORMAT" : null;
          }

          tempData[index].error = (validateResult.isEmpty ? "EMPTY" : validateResult.isContainsFormatError ? "FORMAT" : null);
        } else if (e.format_validation === 'CONFIRM_PASSWORD') {
          const value: string = input.value.toString();
          const passwordIndex = tempData.findIndex((field) => field.format == 'PASSWORD');
          
          if (passwordIndex >= 0) {
            const passwordValue = tempData[passwordIndex].value;
            validateResult = validateField(value, 'CONFIRM_PASSWORD', passwordValue.toString());
            tempData[index].error = validateResult.isEmpty ? "EMPTY" : validateResult.isContainsFormatError ? "FORMAT" : null;
          }
        } else if (e.type == "CHECKBOX") {
          const validateResult = validateField(input.value as string, e.format_validation)
          input.error =  (validateResult.isEmpty? "EMPTY" : validateResult.isContainsFormatError? "FORMAT" : null) ;
        }
      });
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
    if (!submitValidate()) return;
    console.log("Answer Data :", data);
    onSubmit();
    onApi();
  }

  return (
    <>
      <Flex flexDir = {'column'} gap = {['4px', '4px', '16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Let’s create your account</Heading>
        <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>Enter your credential information</Text>
      </Flex>


      <form onSubmit = {handleSubmit}>
      {
        regError && <Alert borderRadius={"4px"} mb={"20px"} status='error' color={"#000"}>
          <AlertIcon />
          User already registered
        </Alert>
      }

        {/* Sign Up Page Input Field */}
        <SimpleGrid columns = {2} w = {'100%'} rowGap = {'16px'} columnGap = {'16px'}>
          {
            SignUpCredentialInfoLabelData.map((e: SignUpPageLabelDataValues) => {
              let field = data.find((val) => val.id == e.id);
              if (!field) return null;
              let stateValue = field.value!;
              const errorType = field.error ?? null;
              const errorMessage = (errorType == null) ? '' : ((errorType == 'EMPTY') ? e.error_message : e.format_error_message);
              const isInValid = (errorType != null);

              switch (e.type) {
                case "TEXT":
                  return (
                    <GridItem colSpan = {2} key = {e.id}>
                      <TextField label = {e.label} value = {stateValue} values = {e.values} placeholder = {e.help_text} format = {e.format_validation} inputProps = {{ onChange: event => onChange(event, e.id, e) }} isInValid = {isInValid} errorMessage = {errorMessage} h = {'44px'} />
                    </GridItem>
                  );
                case "CHECKBOX" :
                  return(
                    <GridItem colSpan = {2} key = {e.id} >
                      <CheckBox label = {e.label} value = {stateValue} values = {e.values} placeholder = {e.help_text} onChange = {(event, valueId) => onChangeCheckBox(event, e.id, e, valueId as string | number)} isInValid = {isInValid} errorMessage = {errorMessage} format = {'PASSWORD'}/>
                    </GridItem>
                  );
              }
            })
          }
        </SimpleGrid>

        {/* Verification Section */}
        <Flex mt = {'24px'}>
          <ButtonField textValue = {'Sign Up'}  buttonLoader={buttonLoader} />
        </Flex>
      </form>

      <Flex justifyContent = {'center'} alignItems = {'center'} mt = {"-16px"} >
        <Button w = {'100%'} h = {'40px'} bg = {PRE_LOGIN_BUTTON_BACKGROUND_COLOR} borderRadius = {'4px'} gap = {'8px'} onClick = {moveBack}>
          <HiArrowNarrowLeft fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT} />
          <Text color = {PRE_LOGIN_BUTTON_TEXT_COLOR} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT}>Previous</Text>
        </Button>
      </Flex>
    </>
  );
}

export default CredentialInfo

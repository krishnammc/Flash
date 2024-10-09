import React, { useEffect, useState } from 'react'
import TextField from '../../components/text_field';
import { BUTTON_BG, HEADING_FONT_SIZE, INPUT_TEXT_COLOR, LABEL_TEXT_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, LOGIN_INPUT_FIELD_PADDING, SUB_HEADING_FONT_SIZE, INPUT_BORDER_COLOR, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_BODY_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_SIZE, PRE_LOGIN_PAGE_BODY_FONT_WEIGHT } from '@/lib/app/app_constants';
import { Alert, AlertIcon, Flex, FormControl, FormErrorMessage, FormLabel, GridItem, Heading, Input, SimpleGrid, Text, useToast } from '@chakra-ui/react';
import { formatValidate, validateField } from '@/lib/utlils/utill_methods';
import ButtonField from '../../components/button_field';
import { FieldValidationType, ForgotPasswordPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import CheckBox from '../../components/checkbox_field';
import { format } from 'path';
import { resetPassword } from 'aws-amplify/auth';

export const ForgotPasswordPageLabelData:ForgotPasswordPageLabelDataValues[] = [
  {
    id: 'verfication_code',
    type: 'TEXT',
    label: 'Verification Code',
    values: [],
    help_text: 'Input your code',
    error_message: "verfication Code should be entered",
    format_error_message: "Password must be more than 8 characters. With a combination of Alphapetic Letters, Numbers and Special Characters ",
    format_validation: 'NONE'
  },{
    id: 'password',
    type: 'TEXT',
    label: 'Password',
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


export interface updatePassProps {
  onSubmit:(password:string,code:string) => void
  buttonLoader:boolean
  email:string
  codeError:"INVALID"|"USED"|null
  setCodeError:(data:"INVALID"|"USED"|null)=>void
}

const CreateNewPassword = ({onSubmit,buttonLoader,email,codeError,setCodeError}:updatePassProps) => {
 
  const toast = useToast();
 
  const [data, setData] = useState(
    ForgotPasswordPageLabelData.map((field:ForgotPasswordPageLabelDataValues) => {
      let ansVal = '';
      return { 
        id:field.id,
        type:field.type,
        format:field.format_validation,
        value:ansVal as string | string[] | number ,
        error: null as 'EMPTY' | 'FORMAT' | null
      }
    })
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: ForgotPasswordPageLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    setCodeError(null)
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

    else if(field.format_validation === 'NONE'){

      const passwordIndex = tempData.findIndex((field) => field.format == 'NONE');

          
      if (passwordIndex >= 0) {
        const passwordValue = tempData[passwordIndex].value;
        validateResult = validateField(value, 'NONE', passwordValue.toString());
        tempData[index].value = value;
        tempData[index].error = validateResult.isEmpty ? "EMPTY" : validateResult.isContainsFormatError ? "FORMAT" : null;
      }


    }
    setData(tempData)
  }

  const onChangeCheckBox = (event:  React.ChangeEvent<HTMLInputElement> , id: string, fields:ForgotPasswordPageLabelDataValues , valueId:string | number) => {
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
      let value = ForgotPasswordPageLabelData.filter((e) => e.id == input.id);
      
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
        }
        



        else if (e.type == "CHECKBOX") {
          const validateResult = validateField(input.value as string, e.format_validation)
          input.error =  (validateResult.isEmpty? "EMPTY" : validateResult.isContainsFormatError? "FORMAT" : null) ;
        }
      })
    })
    setData(tempData);
    return tempData.every((input) => input.error == null);
  }

  async function resendConfirmationCode() {
  
    const output = await resetPassword({
      username: email
    });
  
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        toast({
          title: 'Resended Verfication Code',
          description: "Verfication code is send to the registered email",
          status: 'success',
          duration: 5000,
          position:'top',
          isClosable: true,
        });
    
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case 'DONE':
        console.log('Successfully reset password.');
        break;
    }
}

  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitValidate()) return;
    console.log("Answer Data :", data);
    onSubmit(data[0].value as string,data[2].value as string);
  }

  return (
    <>
      <Flex flexDir = {'column'} gap = {['4px', '4px', '16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Reset your password</Heading>
        <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>Your new password should be different from previous used passwords</Text>
      </Flex>
      
      <form onSubmit = {handleSubmit}>
      {
        codeError !== null && <Alert mb={"20px"} borderRadius={"4px"}  status='error' color={"#000"}>
          <AlertIcon />
          {codeError == "INVALID" ? "Invalid verification code": "The verification code has already been used"}
        </Alert>
      }
        {/* Forgot Page Create New Password section */}
        <SimpleGrid columns = {2} w = {'100%'} rowGap = {'16px'} columnGap = {'16px'}>
          {
            ForgotPasswordPageLabelData.map((e: ForgotPasswordPageLabelDataValues) => {
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
          <ButtonField textValue = {'Sign Up'} buttonLoader={buttonLoader} />
        </Flex>
      </form>
      <Flex flexDir = {'column'}  fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT} w= '100%' justifyContent = {'center'} alignItems={'center'} gap = {'12px'}>
          {/* <Text >Don’t receive the email? try again
          </Text> */}

          {/* <Button onClick = {resendConfirmationCode} w = {'100%'} h = {'40px'} borderWidth = {'1px'} borderColor = {PRE_LOGIN_BUTTON_BORDER_COLOR} borderRadius = {'4px'} bg = {PRE_LOGIN_ALTERNATE_BUTTON_BACKGROUND_COLOR}  >
            <Text color = {PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT}>Resend Code</Text>
          </Button>  */}

        <Flex onClick = {resendConfirmationCode} w={"100%"}>
          <ButtonField textValue = {"Resend Email"} />
        </Flex>
        
      </Flex>
    </>
  );
}

export default CreateNewPassword

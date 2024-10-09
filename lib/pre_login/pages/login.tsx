"use client"
import { PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_SIZE, PRE_LOGIN_PAGE_BODY_FONT_WEIGHT, PRE_LOGIN_LINK_HOVER_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_OR_TEXT_BORDER_COLOR, PRE_LOGIN_BUTTON_TEXT_COLOR, PRE_LOGIN_SIGNPASS_BUTTON_TEXT_COLOR, PRE_LOGIN_SIGNPASS_BUTTON_SUB_TEXT_COLOR, PRE_LOGIN_BUTTON_BACKGROUND_COLOR, PRE_LOGIN_BUTTON_BORDER_COLOR, PRE_LOGIN_INPUT_BACKGROUND_COLOR } from '@/lib/app/app_constants';
import { Alert, AlertIcon, Button, Checkbox, Flex, FormControl, Heading, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import TextField from '../components/text_field';
import ButtonField from '../components/button_field';
import {  validateField } from '@/lib/utlils/utill_methods';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { confirmSignUp, resendSignUpCode, signIn, verifyTOTPSetup } from 'aws-amplify/auth'
import { LoginPageLabelDataValues } from '@/lib/interfaces/incorporation/pre_login_form/interfaces';
import { Amplify } from 'aws-amplify';
import outputs from "@/amplify_outputs.json";
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import useAuthSession from '@/lib/hooks/use_currentuser';

export const LoginLabelData: LoginPageLabelDataValues[] = [
  {
    id: "email",
    type: "TEXT",
    label: "Email",
    help_text: "Input your Email Address",
    error_message: "Email address is required for login",
    format_error_message: "Please enter an email using the standard format (e.g., example@domain.com)",
    format_validation: "EMAIL"
  },
  {
    id: "password",
    type: "TEXT",
    label: "Password",
    help_text: "Input your Password",
    error_message: "Password should be entered",
    format_error_message: "Your password doesn't meet the requirements. Make sure it's at least 8 characters long, with uppercase and lowercase letters, a number, and a special character.",
    format_validation: "PASSWORD"
  }
]

Amplify.configure(outputs);

const LoginPage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [loginError,setLoginError] = useState<boolean>(false);
  const [buttonLoader,setButtonLoader] = useState<boolean>(false);
  const { session, loading, error } = useAuthSession();
  const [store, setStorage] = useSessionStorage<Record<string, string | string[] | number> | null>('Basic Info Form Values');
  const router = useRouter();
  const toast = useToast();
 
  const [data, setData] = useState(
    LoginLabelData.map((field) => {
      let ansVal = '';
      return {
        id: field.id,
        value: ansVal as string | string[] | number,
        error: null as 'EMPTY' | 'FORMAT' | null
      }
    })
  );
  
  //console.log("Initial Data :", data);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string, field: LoginPageLabelDataValues) => {
    const tempData: typeof data = JSON.parse(JSON.stringify(data));
    const index = tempData.findIndex((field) => field.id == id);

    setLoginError(false)
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
      let value = LoginLabelData.filter((e) => e.id == input.id);
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

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitValidate()) return;
    setButtonLoader(true)
    try {
      const response = await signIn({
        username: data[0].value as string,
        password: data[1].value as string,
        
      });
      console.log(response)
      if(response.nextStep.signInStep=="CONFIRM_SIGN_UP"){
        resendSignUpCode({
          "username": data[0].value as string,
        })
        .then((output) => {
          // toast({
          //   title: 'Resended Verfication Code',
          //   description: "Verfication code is send to the registered email",
          //   status: 'success',
          //   duration: 5000,
          //   position:'top',
          //   isClosable: true,
          // });
          setStorage({email:data[0].value as string});
          console.log(output);
          router.push("/client/email_verification");
        })
        .catch((error) => {
         
          console.error(error);
        });
      } else {
        router.push('/home');
      }
      
    } catch (error) {
      if (error instanceof Error) {
        if(error.name=="NotAuthorizedException"){
          // toast({
          //   title: 'Invalid Credential',
          //   description: "this user details is not matched",
          //   status: 'error',
          //   duration: 9000,
          //   isClosable: true,
          // })
          setLoginError(true);
        } 
        // console.log(`Error: ${error.}`)
      } else {
        console.log(`Unknown error: ${error}`)
      }
      console.error(error);
      
      // Display an error message to the user
    }
    setButtonLoader(false);
  }

  return (
    <Flex flexDir = {'column'} w = {'100%'} h = {'fit-content'} justifyContent = {'center'} gap = {'40px'}>

      {/* Login Page Heading */}
      <Flex flexDir = {'column'} gap = {['4px', '4px', '16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading title = {'Montserrat Bold 24px'} fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Log in to your account</Heading>
        <Text title = {'Montserrat Regular 20px'} fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>Welcome! Enter your details to log in</Text>
      </Flex>

      {/* Login Page Form */}
      <Flex w = {'100%'} flexDir = {'column'} gap = {'24px'}>
        <form onSubmit = {onSubmit}>
        {
        loginError && <Alert borderRadius={"4px"} mb={"20px"} status='error' color={"#000"}>
          <AlertIcon />
          Invalid user Credentenails
        </Alert>
      }
          <Flex flexDir = {'column'} gap = {'16px'}>
            {
              LoginLabelData.map((e: LoginPageLabelDataValues) => {
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
            
            {/* CheckBox and Forgot Password Link */}
            <Flex w = {'100%'} justifyContent = {'space-between'} gap = {'16px'}>

              <FormControl w = {['40%', '40%', '60%']} >
                <Checkbox id = {"Keep_me_logged_in"} type = {'checkbox'} name = {"keep_me_logged_in"} isChecked = {isChecked} onChange = {(e) => setIsChecked(e.target.checked)}
                  sx = {{
                    "& .chakra-checkbox__control": {
                      borderRadius: "4px",
                      height: "16px",
                      width: "16px",
                      borderWidth: "1px",
                      bg: PRE_LOGIN_INPUT_BACKGROUND_COLOR
                    }
                  }}
                >
                  <Text title = {'Helvetica Regular 16px'} fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT}>Keep me logged for 14 days</Text>
                </Checkbox>
              </FormControl>

              <Flex w = {['60%', '60%', '40%']} justifyContent = {'flex-end'} alignItems = {'center'} >
                <Link href = {'/client/forgot_pass'} >
                  <Text title = {'Helvetica Regular 16px'} fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT} _hover = {{color:PRE_LOGIN_LINK_HOVER_COLOR}}  textAlign = {['start', 'end']}>Forgot Password?</Text>
                </Link>
              </Flex>

            </Flex>

            {/* Sign In Button */}
            <ButtonField textValue = {"Sign In"} w = {"100%"} h = {"40px"} buttonLoader={buttonLoader} />

          </Flex>
        </form>

        {/* SingPass Button Section */}
        <Flex flexDir = {'column'} gap = {'24px'} justifyContent = {'center'} alignItems = {'center'}>
          <Flex flexDir = {'row'} w = {'100%'} justifyContent = {'space-between'} alignItems = {'center'}>
            <Flex w = {'45%'} flexDir = {'column'} borderTopWidth = {'1px'} borderColor = {PRE_LOGIN_OR_TEXT_BORDER_COLOR}></Flex>
            <Text title = {'Helvetica Regular 16px'} fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT} >or</Text>
            <Flex w = {'45%'} flexDir = {'column'}  borderTopWidth = {'1px'} borderColor = {PRE_LOGIN_OR_TEXT_BORDER_COLOR}></Flex>
          </Flex>
          <Button title = {'Montserrat Bold 18px'} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY}  fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT} w = {'100%'} h = {'40px'} borderWidth = {'1px'} borderColor = {PRE_LOGIN_BUTTON_BORDER_COLOR} borderRadius = {'4px'} bg = {PRE_LOGIN_BUTTON_BACKGROUND_COLOR} gap = {'5px'} >
            <Text color = {PRE_LOGIN_BUTTON_TEXT_COLOR} >Sign In</Text>
            <Text color = {PRE_LOGIN_SIGNPASS_BUTTON_TEXT_COLOR} >s<Text as = {'span'} color = {PRE_LOGIN_SIGNPASS_BUTTON_SUB_TEXT_COLOR}>i</Text>ngpass</Text>
          </Button>
        </Flex>
      </Flex>

      <Flex justifyContent = {'center'} alignItems = {'center'} gap = {'10px'} h = {'32px'}>
       
        <Text title = {'Helvetica Regular 16px'} fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT} >Don’t have an account?</Text>
       
        <Link href = {'/'} >
          <Text title={'Montserrat Bold 18px'} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY}  fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT} _hover = {{color:PRE_LOGIN_LINK_HOVER_COLOR}} >Sign Up</Text>
        </Link>
      </Flex>

    </Flex>
  );
}

export default LoginPage

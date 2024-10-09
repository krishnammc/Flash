"use client"
import { BUTTON_BG, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, PRE_LOGIN_BUTTON_TEXT_COLOR, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, SUB_HEADING_FONT_SIZE, TEXT_COLOR, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '@/lib/app/app_constants';
import { Button, Flex, Heading, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import CreateNewPassword from '../forms/forgot_password_forms/create_new_pass';
import { useRouter } from 'next/navigation';
import { confirmResetPassword, resetPassword } from 'aws-amplify/auth';
import useSessionStorage from '@/lib/hooks/use_sessionstorage';
import { Amplify } from 'aws-amplify';
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const ResetPasswordPage = () => {
  const toast = useToast();
  const [passUpdated, setPassUpdated] = useState<boolean>(false);
  const [codeError,setCodeError] =useState<"INVALID"|"USED"|null>(null);
  const [store, setStorage] = useSessionStorage<string>('email_verfication');
  const [buttonLoader,setButtonLoader] = useState<boolean>(false);
  
  const router = useRouter();

  const handleSubmit = () => {
    setPassUpdated(true);
  };

  const resend = async() => {
  
    setButtonLoader(true);
    const output = await resetPassword({
      username: store !== null && store !== undefined && store ? store :""
    });
  
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case 'DONE':
        console.log('Successfully reset password.');
        break;
    }
    setButtonLoader(false);
  
  }

  const onSubmit = async(code:string,password:string,) => {

    setButtonLoader(true);
    await confirmResetPassword({
      username: store && store?store:"",
      confirmationCode: code,
      newPassword: password,
    }).then((res)=>{
      console.log(res);
      setPassUpdated(true);
    }).catch((error)=>{
      if(error instanceof Error){
        if(error.name=="CodeMismatchException"){
          setCodeError("INVALID")
          // toast({
          //   title: 'Incorrect Verfication Code',
          //   description: "Please enter valid verication code",
          //   status: 'error',
          //   position:'top',
          //   duration: 9000,
          //   isClosable: true,
          // })
        } else if (error.name == "LimitExceededException"){
          setCodeError("USED")
          // toast({
          //   title: 'Verfication Code Already Used',
          //   description: "Please enter valid verication code",
          //   status: 'error',
          //   position:'top',
          //   duration: 9000,
          //   isClosable: true,
          // })
        }
      }
    })
    setButtonLoader(false);
  
  }

  const onSubmitNext = () => {
    router.push('/client/login');
  }

  return (
    <Flex flexDir = {'column'}  w = {'100%'}  gap = {'40px'}>

      {/* Forgot Password Page Heading */}
      { passUpdated ?
        <>
          <Flex flexDir={'column'} gap={['4px', '4px', '16px']} color={PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
            <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>All done</Heading>
            <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>You have successfully changed your password. Now you can directly access to the dashboard.</Text>
          </Flex>
          <Flex>
            <Button onClick={onSubmitNext} w = {'100%'} h = {'40px'} type = {"submit"} bg={BUTTON_LINEAR_RIGHT_COLOR} _hover = {{ bgGradient: `linear(180deg, ${BUTTON_LINEAR_LEFT_COLOR}, ${BUTTON_LINEAR_RIGHT_COLOR})`}} borderRadius = {'4px'} >
              <Text color = {PRE_LOGIN_BUTTON_TEXT_COLOR} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT} >Proceed to Dashboard </Text>
            </Button>
          </Flex>
        </>
      :
        <CreateNewPassword onSubmit = {onSubmit} setCodeError={setCodeError} codeError={codeError} email={store !== null && store !== undefined && store? store:""} buttonLoader={buttonLoader}  />
      }
    </Flex>
  );
}

export default ResetPasswordPage

import React, { useEffect } from 'react'
import ButtonField from '../../components/button_field';
import { BUTTON_BG, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, LOGIN_BUTTON_SUB_TEXT_FONT_SIZE, FILE_BORDER_COLOR, HEADER_ICON_COLOR, HELP_TEXT_COLOR, TEXT_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_BODY_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_SIZE, PRE_LOGIN_PAGE_BODY_FONT_WEIGHT, PRE_LOGIN_ALTERNATE_BUTTON_BACKGROUND_COLOR, PRE_LOGIN_BUTTON_BORDER_COLOR, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT, PRE_LOGIN_BUTTON_TEXT_COLOR, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR } from '@/lib/app/app_constants';
import { Flex, Heading, Button, Text } from '@chakra-ui/react';
import { resendSignUpCode, ResendSignUpCodeInput } from 'aws-amplify/auth';
import Link from 'next/link';

export interface CheckEmailProps {
  onSubmit:() => void,
  email:string
}

const CheckEmail = ({onSubmit,email}:CheckEmailProps) => {

  useEffect(()=>{
    const dataFromSessionStorage = sessionStorage.getItem("IsEmailVerified");
    const isEmailVerified = dataFromSessionStorage === 'true';
    if (isEmailVerified) {
      setTimeout(() => { 
        onSubmit();
      }, 2000);
    }
  },[])

  async function resendConfirmationCode() {
    resendSignUpCode({"username":email})
  .then((output) => {
    console.log(output);
  })
  .catch((error) => {
    console.error(error);
  });
}

  const handleSubmit = () => {
    onSubmit();
  }
  
  return (
    <Flex flexDir = {'column'}  w = {'100%'}  gap = {'40px'}>

      {/* Forgot Password Page Heading */}
      <Flex flexDir = {'column'} gap = {['4px','4px','16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Check your Email</Heading>
        <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>We have sent Account Verification instructions to your email: {email}</Text>
      </Flex>


      <Flex onClick={()=>{handleSubmit()}}>
      <ButtonField textValue = {"Next Page"}/>
      </Flex>

      <Link href={`malito:${email}`}>
      <ButtonField textValue = {"Open Email"}/>
      </Link>
     
      <Flex flexDir = {'column'} fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT} w= '100%' justifyContent = {'center'} alignItems={'center'} gap = {'12px'}>
        <Text >Don’t receive the email? Try again in
          <Text fontWeight = {'700'} ml = {'8px'} as = {'span'}>4 m 59 s</Text>
        </Text>

        {/* <Button onClick = {resendConfirmationCode} w = {'100%'} h = {'40px'} borderWidth = {'1px'} borderColor = {PRE_LOGIN_BUTTON_BORDER_COLOR} borderRadius = {'4px'} bg = {PRE_LOGIN_ALTERNATE_BUTTON_BACKGROUND_COLOR}  >
          <Text color = {PRE_LOGIN_ALTERNATE_BUTTON_TEXT_COLOR} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT}>Resend Code</Text>
        </Button>  */}

      <Flex onClick = {resendConfirmationCode} w={"100%"}>
        <ButtonField textValue = {"Resend Email"}/>
      </Flex>
        
      </Flex>

      <Text fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT}>Need help? Visit support or contact us</Text>
    </Flex>
  );
}

export default CheckEmail

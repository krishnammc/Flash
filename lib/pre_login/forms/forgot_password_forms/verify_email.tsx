import { BUTTON_BG, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, LOGIN_BUTTON_SUB_TEXT_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_BODY_FONT_FAMILY, PRE_LOGIN_PAGE_BODY_FONT_SIZE, PRE_LOGIN_PAGE_BODY_FONT_WEIGHT } from '@/lib/app/app_constants';
import { Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import ButtonField from '../../components/button_field';
import { useRouter } from 'next/navigation';



const VerifyEmail = ({store}:{store:string}) => {
  const router  = useRouter();
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     router.push('/client/forgot_pass/reset_pass')
  //   }, 5000)
  // },[]);
  
  return (
    <Flex flexDir = {'column'}  w = {'100%'}  gap = {'40px'}>
      <Flex flexDir = {'column'} gap = {['4px','4px','16px']} color = {PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
        <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>Check your Email</Heading>
        <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>We have sent Password Recovery instructions to your email: {store}</Text>
      </Flex>
      <Flex onClick={()=>{ router.push('/client/forgot_pass/reset_pass')}}>
      <ButtonField textValue = {"Next Page"} />
      </Flex>
      <ButtonField textValue = {"Open Email"} />
      <Text fontFamily = {PRE_LOGIN_PAGE_BODY_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_BODY_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_BODY_FONT_WEIGHT}>Did not receive the email? Check your spam or try another email address</Text>
    </Flex>
  );
}

export default VerifyEmail

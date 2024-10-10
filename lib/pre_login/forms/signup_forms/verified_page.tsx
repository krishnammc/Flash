"use client"
import { BUTTON_BG, BUTTON_LINEAR_LEFT_COLOR, BUTTON_LINEAR_RIGHT_COLOR, HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, PRE_LOGIN_BUTTON_TEXT_COLOR, PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY, PRE_LOGIN_BUTTON_TEXT_FONT_SIZE, PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT, PRE_LOGIN_PAGE_HEADING_TEXT_COLOR, PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY, PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE, PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT, SUB_HEADING_FONT_SIZE, TEXT_COLOR, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT} from '../../../app/app_constants';
import { Button, Flex, Heading, Text, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function VerifiedPage() {

  const router = useRouter();

  const onSubmitNext = () => {
    router.push("/client/login")
  }

  return (
    <>
    <Flex flexDir={'column'} gap={['4px', '4px', '16px']} color={PRE_LOGIN_PAGE_HEADING_TEXT_COLOR}>
      <Heading fontFamily = {PRE_LOGIN_PAGE_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_HEADING_FONT_WEIGHT}>All done</Heading>
      <Text fontFamily = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_FAMILY} fontSize = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_SIZE} fontWeight = {PRE_LOGIN_PAGE_SUB_HEADING_FONT_WEIGHT}>You have successfully verified your Acccount</Text>
    </Flex>
    <Flex>
      <Button onClick={onSubmitNext} w = {'100%'} h = {'40px'} type = {"submit"} bg={BUTTON_LINEAR_RIGHT_COLOR} _hover = {{ bgGradient: `linear(180deg, ${BUTTON_LINEAR_LEFT_COLOR}, ${BUTTON_LINEAR_RIGHT_COLOR})`}} borderRadius = {'4px'} >
        <Text color = {PRE_LOGIN_BUTTON_TEXT_COLOR} fontFamily = {PRE_LOGIN_BUTTON_TEXT_FONT_FAMILY} fontSize = {PRE_LOGIN_BUTTON_TEXT_FONT_SIZE} fontWeight = {PRE_LOGIN_BUTTON_TEXT_FONT_WEIGHT} >Proceed to Login </Text>
      </Button>
    </Flex>
  </>
  )
}

export default VerifiedPage
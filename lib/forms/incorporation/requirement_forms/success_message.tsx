import React from 'react';
import { BUTTON_TEXT_COLOR, LABEL_TEXT_FONT_WEIGHT, PAGE_TEXT_COLOR, SUCCESS_TICK_COLOR, TEXT_FONT_WEIGHT } from '@/lib/app/app_constants';
import ButtonField from '@/lib/components/button_field';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { MdOutlineVerified } from 'react-icons/md';

const SuccessMessage = () => {
  return (
    <Flex flexDir = {'column'} gap = {['32px','40px']} w = '100vw' h = '100vh' justifyContent = {'center'} alignItems = {'center'}>
      <Flex>
        <Text fontSize = {'72px'} color = {SUCCESS_TICK_COLOR} >
          <MdOutlineVerified />
        </Text>
      </Flex>
      <Flex flexDir = {'column'} gap = {['8px','12px']}>
        <Heading fontSize = {['20px','24px']} textAlign = {'center'} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {BUTTON_TEXT_COLOR}>Requirements Form Successfully Submitted</Heading>
        <Text fontSize = {['14px','16px']} textAlign = {'center'} fontWeight = {TEXT_FONT_WEIGHT} color = {PAGE_TEXT_COLOR}>Your requirements form is submitted. If you haven’t finished the other required steps, please finish the next steps.</Text>
      </Flex>
      <Flex>
        <ButtonField textValue = {'Go to Due Diligence Form'} w = {'208px'} h = {'40px'}/>
      </Flex>
    </Flex>
  );
}

export default SuccessMessage

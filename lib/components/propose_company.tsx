import { Flex, FormControl, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { BODY_TEXT_FONT_FAMILY, LABEL_TEXT_FONT_WEIGHT, LIST_TEXT_FONT_SIZE, MESSAGE_ICON_COLOR, STATIC_TEXT_BG, TEXT_AREA_FONT_WEIGHT, TEXT_COLOR, TEXT_FONT_SIZE, TEXT_FONT_WEIGHT } from '../app/app_constants';
import { TbMessage } from 'react-icons/tb';

const ProposeCompany = () => {

  return (
    <FormControl w = {'100%'}>
      <Flex w = {['15px', '15px', '8px', '8px', '8px']} borderRadius = {'5px 0 0 5px'} bg = {STATIC_TEXT_BG}></Flex> 
      <Flex p = {'16px 24px 16px 16px'} gap = {'12px'}>
        <Flex>
          <TbMessage color = {MESSAGE_ICON_COLOR} />
        </Flex>       
        <Flex  flexDir = {'column'} gap = {'8px'}>
          <Text fontFamily={BODY_TEXT_FONT_FAMILY} fontSize = {TEXT_FONT_SIZE} fontWeight = {TEXT_AREA_FONT_WEIGHT} color = {TEXT_COLOR}>Tips for Company Name</Text>
          <UnorderedList fontFamily={BODY_TEXT_FONT_FAMILY} fontSize = {LIST_TEXT_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} color = {TEXT_COLOR} gap = {'4px'}>
            <ListItem >It should be unique. Even if you add articles, generic words or business entity type to differentiate, it will still considered taken.</ListItem>
            <ListItem >For faster licensing and license free, avoid using words like ‘finance’, ‘bank’, ‘education’, ‘school’, and ‘media’</ListItem>
            <ListItem >Do not using words that affiliated to religious names because registry will reject these type of names.</ListItem>
          </UnorderedList>  
        </Flex>
      </Flex>
    </FormControl>
  );
}

export default ProposeCompany

import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react'
import { VscChevronLeft } from 'react-icons/vsc';
import { RiSave3Fill } from 'react-icons/ri';
import { FORM_MAX_WIDTH, FILE_BORDER_COLOR, BUTTON_BG, HELP_TEXT_COLOR, TEXT_FONT_SIZE, BUTTON_TEXT_FONT_WEIGHT, TOP_BUTTON_TEXT_COLOR } from '@/lib/app/app_constants';

const TopButton = () => {
  return (
    <Flex maxW={FORM_MAX_WIDTH} w ={'100%'} justifyContent={'space-between'}>
        <Button maxW={'183px'} w={'100%'} h={'40px'} gap={'5px'} borderColor={FILE_BORDER_COLOR} borderWidth={'1px'} borderRadius={'6px'} bg={BUTTON_BG}>
          <Text color={TOP_BUTTON_TEXT_COLOR}><VscChevronLeft fontSize={'20px'}/></Text>
          <Text color={TOP_BUTTON_TEXT_COLOR} fontSize={TEXT_FONT_SIZE} fontWeight={BUTTON_TEXT_FONT_WEIGHT}>Back to Dashboard</Text>
        </Button>
        <Button maxW={'87px'} w={'100%'} h = {'40px'} gap={'5px'} borderWidth = {'1px'} borderRadius = {'6px'} bg = {BUTTON_BG} borderColor = {FILE_BORDER_COLOR}>
          <Text color={TOP_BUTTON_TEXT_COLOR}><RiSave3Fill /></Text>
          <Text color = {TOP_BUTTON_TEXT_COLOR} fontSize = {TEXT_FONT_SIZE} fontWeight = {BUTTON_TEXT_FONT_WEIGHT}>Save</Text>
        </Button>
    </Flex>
  );
}

export default TopButton

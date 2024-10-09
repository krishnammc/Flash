"use client"
import React, { useEffect, useState } from 'react';
import { shareHolderAnswerData, shareHolderFormData, shareHolderListData } from '@/lib/api/incorporation/requirement_form_data/share_holder_data';
import { TAB_HEADING_FONT_SIZE, LABEL_TEXT_FONT_WEIGHT, TEXT_COLOR, TAB_SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, PAGE_TEXT_COLOR, FORM_MAX_WIDTH, FORM_BORDER_COLOR, HEADER_BG, OVERALL_PAGE_BG, BODY_TEXT_FONT_FAMILY, PAGE_SUB_HEADING_FONT_FAMILY } from '@/lib/app/app_constants';
import TopButton from '@/lib/components/top_button';
import ShareHoldersList from '@/lib/forms/incorporation/requirement_forms/share_holders_form/share_holders_list';
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react'


const ShareHolder = () => { 

  const formData = shareHolderFormData;
  const answerData = shareHolderAnswerData;
  const shareholder_list = shareHolderListData;

  //Initial Page Loading Spinner
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => { 
    setTimeout(() => { setLoading(false)}, 2000);
  }, [])

  if(loading){
    return(
      <Flex h = {'100vh'} w = {'100vw'} bg = {OVERALL_PAGE_BG} justifyContent = {'center'} alignItems = {'center'}>
        <Spinner
          thickness = {'4px'}
          speed = {'0.65s'}
          emptyColor = {'gray.200'}
          color = {HEADER_BG}
          size = {'xl'}
          width = {'50px'}
          height = {'50px'}
        />
      </Flex>
    );
  }
  
  return (
    <Flex key = {formData.page_heading} flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w = {'100%'} h = {'100%'} gap = {'24px'} >
      
      {/* Form Top Button For Save Details and Move to Dashboard Page */}
      <TopButton />
      {/* Page Heading */}
      <Flex flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w = {'100%'} gap = {['4px','8px']}>
        <Heading  fontSize = {TAB_HEADING_FONT_SIZE} fontFamily={PAGE_SUB_HEADING_FONT_FAMILY} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {TEXT_COLOR}>{formData.page_heading}</Heading>
        <Text fontSize = {TAB_SUB_HEADING_FONT_SIZE} fontFamily={BODY_TEXT_FONT_FAMILY} fontWeight = {TEXT_FONT_WEIGHT} color = {PAGE_TEXT_COLOR}>{formData.page_heading_sub_info}</Text>
      </Flex>
      {/* Page Data */}
      <Flex flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w = {'100%'}  h = {'fit-content'}   p = {'20px'} gap = {['10px', '10px', '20px']} borderWidth = {1} borderRadius = {'4px'} borderColor = { FORM_BORDER_COLOR}>
        <Flex w = {'100%'} flexDir = {'column'} gap = {'20px'}>
          <ShareHoldersList  shareholder_list = {shareholder_list} answer_data = {answerData}/>
        </Flex>
      </Flex>

    </Flex>
  );
}

export default ShareHolder


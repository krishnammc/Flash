"use client"
import React, { useEffect, useState } from 'react';
import { IndividualInfoAnswerData, IndividualInfoFormData } from '@/lib/api/incorporation/due_diligence_form_data/individual_info_data';
import { TEXT_COLOR, PAGE_TEXT_COLOR, FORM_MAX_WIDTH, LABEL_TEXT_FONT_WEIGHT, TAB_HEADING_FONT_SIZE, TAB_SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, FORM_BORDER_COLOR, HEADER_BG, OVERALL_PAGE_BG } from '@/lib/app/app_constants';
import TopButton from '@/lib/components/top_button';
import IndividualInfoDashboard from '@/lib/forms/incorporation/due_diligence_forms/individual_info_form/individual_info_dashboard';
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';

const IndividualInfoForm = () => {
  const formData = IndividualInfoFormData;
  const answerData = IndividualInfoAnswerData;

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
      <Flex flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w = {'100%'} gap = {['4px', '8px']}>
        <Heading fontSize = {TAB_HEADING_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {TEXT_COLOR}>{formData.page_heading}</Heading>
        <Text fontSize = {TAB_SUB_HEADING_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} color = {PAGE_TEXT_COLOR}>{formData.page_heading_sub_info}</Text>
      </Flex>
      {/* Page Data */}
      <Flex flexDir = {'column'} maxW = {FORM_MAX_WIDTH} w = {'100%'} h = {'fit-content'} gap = {['10px', '10px', '20px']} borderWidth = {1} borderRadius = {'4px'} borderColor = {FORM_BORDER_COLOR}>
        <IndividualInfoDashboard answer = {answerData} page_values = {formData.page_values} />
      </Flex>
      
    </Flex>
  );
}

export default IndividualInfoForm

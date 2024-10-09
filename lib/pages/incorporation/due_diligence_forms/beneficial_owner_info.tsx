"use client"
import React, { useEffect, useState } from 'react';
import { BeneficialOwnerInfoAnswerData, BeneficialOwnerInfoFormData } from '@/lib/api/incorporation/due_diligence_form_data/beneficial_owner_info_data';
import { TEXT_COLOR, PAGE_TEXT_COLOR, FORM_MAX_WIDTH, LABEL_TEXT_FONT_WEIGHT, TAB_HEADING_FONT_SIZE, TAB_SUB_HEADING_FONT_SIZE, TEXT_FONT_WEIGHT, FORM_BORDER_COLOR, HEADER_BG, OVERALL_PAGE_BG } from '@/lib/app/app_constants';
import TopButton from '@/lib/components/top_button';
import BeneficialOwnerInfoDashboard from '@/lib/forms/incorporation/due_diligence_forms/beneficial_owner_info_form/beneficial_owner_info_dashboard';
import { Flex, Heading, ListItem, Spinner, Text, UnorderedList } from '@chakra-ui/react';

const BeneficialOwnerInfo = () => {
  const formData = BeneficialOwnerInfoFormData;
  const answerData = BeneficialOwnerInfoAnswerData;

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
      <Flex flexDir = {'column'} w = {'100%'} gap = {['4px', '8px']}>
        <Heading fontSize = {TAB_HEADING_FONT_SIZE} fontWeight = {LABEL_TEXT_FONT_WEIGHT} color = {TEXT_COLOR}>{formData.page_heading}</Heading>
        <Text fontSize = {TAB_SUB_HEADING_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} color = {PAGE_TEXT_COLOR}>{formData.page_heading_sub_info}</Text>
        <UnorderedList ml = {'20px'} fontSize = {TAB_SUB_HEADING_FONT_SIZE} fontWeight = {TEXT_FONT_WEIGHT} color = {PAGE_TEXT_COLOR}>
          <ListItem>Identify the natural persons (whether acting alone or together) who ultimately own all the assets or undertakings of the customer/client;</ListItem>
          <ListItem>if there is doubt as to whether the natural persons who ultimately own all the assets or undertakings of the customer/client are the beneficial owners or where no natural persons ultimately own all the assets or undertakings of the customer/client, to then identify the natural persons (if any) who ultimately control the customer/client or have ultimate effective or significant control over the customer/client; and</ListItem>
          <ListItem>where no natural persons are identified above, to identify the natural persons having executive authority in the customer/client, or in equivalent or similar positions.</ListItem>
        </UnorderedList>
      </Flex>
      {/* Page Data */}
      <Flex flexDir = {'column'} w = {'100%'} h = {'fit-content'} gap = {['10px', '10px', '20px']} borderWidth = {1} borderRadius = {'4px'} borderColor = {FORM_BORDER_COLOR}>
        <BeneficialOwnerInfoDashboard answer = {answerData} page_values = {formData.page_values} />
      </Flex>
    </Flex>

  );
}

export default BeneficialOwnerInfo
